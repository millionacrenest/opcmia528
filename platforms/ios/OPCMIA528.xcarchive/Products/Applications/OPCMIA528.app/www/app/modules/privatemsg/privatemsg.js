/**
 * HOOKS
 */

/**
 * Implements hook_install().
 */
function privatemsg_install() {
  var css = drupalgap_get_path('module', 'privatemsg') + '/privatemsg.css';
  drupalgap_add_css(css);
}

/**
 * Implements hook_menu().
 */
function privatemsg_menu() {
  var items = {};
  items['user-messages/%'] = {
    title: 'Messages',
    page_callback: 'privatemsg_user_messages_page',
  options:{
  reloadPage:true
  },
    pageshow: 'privatemsg_user_messages_pageshow',
    page_arguments: [1]
  };
  items['messages/view/%'] = {
    title: 'Message',
    title_callback: 'privatemsg_messages_view_title',
    title_arguments: [2],
    page_callback: 'privatemsg_messages_view_page',
    pageshow: 'privatemsg_messages_view_pageshow',
    page_arguments: [2]
  };
  return items;
}

/**
 * HELPERS
 */

function privatemsg_user_messages_container_id(uid) {
  return 'privatemsg_user_messages_' + uid;
}

function privatemsg_message_container_id(thread_id) {
  return 'privatemsg_message_' + thread_id;
}

/**
 * PAGES
 */

function privatemsg_user_messages_page(uid) {
  var content = {};
  content['messages'] = {
    markup: '<div id="' + privatemsg_user_messages_container_id(uid) + '"></div>'
  };
  return content;
}

function privatemsg_user_messages_pageshow(uid) {
  privatemsg_index({
    success: function(messages) {
      $('#' + privatemsg_user_messages_container_id(uid)).html(theme('privatemsg_list', { messages: messages })).trigger('create');
    }
  });
}

function privatemsg_messages_view_title(callback, thread_id) {
  privatemsg_retrieve(thread_id, {
    success: function(thread) {
      callback.call(null, thread.subject);
    }
  });
}

function privatemsg_messages_view_page(thread_id) {
  var content = {};
  content['message'] = {
    markup: '<div id="' + privatemsg_message_container_id(thread_id) + '" class="privatemsg-thread"></div>'
  };
  content['form'] = {
    markup: drupalgap_get_form('privatemsg_thread_form', thread_id)
  };
  return content;
}

function privatemsg_messages_view_pageshow(thread_id) {
  privatemsg_retrieve(thread_id, {
    success: function(thread) {

      // Theme the thread.
      $('#' + privatemsg_message_container_id(thread_id)).html(theme('privatemsg_thread', { thread: thread })).trigger('create');

      // Figure out the recipient, then populate the hidden recipient element with the account's name.
      var recipient = null;
      if (thread.participants) {
        $.each(thread.participants, function(index, participant) {
          if (participant.uid != Drupal.user.uid) {
            recipient = participant.name;
            return false;
          }
        });
      }
      if (recipient) { $('#edit-privatemsg-thread-form-' + thread_id + '-recipient').val(recipient); }

    }
  });
}

/**
 * FORMS
 */

function privatemsg_thread_form(form, form_state, thread_id) {
  form.id += '_' + thread_id;
  form.elements['message'] = {
    type: 'textarea',
    title: t('Message'),
    required: true
  };
  form.elements['thread_id'] = {
    type: 'hidden',
    default_value: thread_id,
    required: true
  };
  form.elements['recipient'] = {
    type: 'hidden',
    required: true
  };
  form.elements['submit'] = {
    type: 'submit',
    value: t('Send message')
  };
  return form;
}

function privatemsg_thread_form_submit(form, form_state) {
  var thread_id = form_state.values.thread_id;
  privatemsg_create(null, form_state.values.message, [form_state.values.recipient], thread_id, {
    success: function(result) {
      if (result[0]) {
        // Clear the message box.
        $('#edit-privatemsg-thread-form-' + thread_id + '-message').val('');
        // Reload and re-render the thread.
        privatemsg_messages_view_pageshow(thread_id);
      }
    }
  });
}

/**
 * THEME FUNCTIONS
 */

function theme_privatemsg_list(variables) {
  var messages = variables.messages;
  if (!messages.length) { return ''; }
  var items = [];
  for (var i = 0; i < messages.length; i++) {
    items.push(theme('privatemsg_list_item', { message: messages[i] }));
  }
  return theme('jqm_item_list', { items: items });
}

function theme_privatemsg_list_item(variables) {
  var msg = variables.message;
  return l(msg.subject, 'messages/view/' + msg.thread_id);
}

function theme_privatemsg_thread(variables) {

  var thread = variables.thread;
  if (!thread.messages.length) { return ''; }

  var html = '';
  var swatch = 'a';
  var last_author_uid = null;

  // Iterate over each message in the thread...
  for (var i = 0; i < thread.messages.length; i++) {

    // Extract the message.
    var msg = thread.messages[i];

    // Extract the message author's account.
    var account = thread.participants['user_' + msg.author];

    // Profile picture.
    /*var picture = '';
     if (account.picture && account.picture.uri) {
     picture = theme('image', {
     path: drupalgap_image_path(account.picture.uri),
     attributes: { align: 'left' }
     });
     }*/

    // Toggle the swatch.
    if (last_author_uid && last_author_uid != msg.author) { swatch = swatch == 'a' ? 'b' : 'a'; }
    last_author_uid = msg.author;

    // Build the timestamp string.
    var timestamp = date('F j, Y', msg.timestamp * 1000) + ' ' + t('at') + ' ' + date('g:i a', msg.timestamp * 1000);

    // Theme the message.
    html += '<div class="ui-body ui-body-' + swatch + ' ui-corner-all privatemsg-thread-message">' +
        '<p><strong>' + account.name + '</strong><br />' + timestamp + '</p>' +
        '<p>' + msg.body + '</p>' +
        '</div>';

  }
  return html;
}

/**
 * SERVICE RESOURCES
 */

/**
 * Sends a private message
 * @param {String} subject The subject of the message.
 * @param {String} body The body of the message.
 * @param {Array} recipients An array of user names.
 * @param {Number} thread_id
 * @param {Object} options
 */
function privatemsg_create(subject, body, recipients, thread_id, options) {
  try {
    var data = {
      subject: subject,
      body: body,
      recipients: recipients
    };
    if (thread_id) { data.thread_id = thread_id; }
    options.method = 'POST';
    options.path = 'privatemsg.json';
    options.service = 'privatemsg';
    options.resource = 'create';
    options.data = JSON.stringify(data);
    Drupal.services.call(options);
  }
  catch (error) { console.log('privatemsg_create - ' + error); }
}

/**
 * Retrieves a private message by thread id.
 * @param {Number} thread_id
 * @param {Object} options
 */
function privatemsg_retrieve(thread_id, options) {
  options.method = 'GET';
  options.path = 'privatemsg/' + thread_id + '.json';
  options.service = 'privatemsg';
  options.resource = 'retrieve';
  Drupal.services.call(options);
}

/**
 * Indexes private messages for the current user.
 * @param {Object} options
 */
function privatemsg_index(options) {
  options.method = 'GET';
  options.path = 'privatemsg.json';
  options.service = 'privatemsg';
  options.resource = 'index';
  Drupal.services.call(options);
}
