/**
 * Implements hook_menu().
 */
function messages_menu() {
    try {
        var items = {};
        items['messages_images'] = {
        title: 'messages',
        page_callback: 'messages_messages_images',
        options:{
        reloadPage:true
        }
        };
        
        //};
        return items;
    }
    catch (error) { console.log('hook_menu failed - ' + error); }
}

/**
 * The page callback to display the view messages_messages_images.
 */
function messages_messages_images() {
    try {
        
        var content = {};
        
        // Logged out users.
        if (Drupal.user.uid != 97) {
        content['contacts'] = {
        theme: 'button_link',
        text: 'Contacts',
        path: 'contacts_images'
        };
        }
//        content['contacts_add'] = {
//        theme: 'button_link',
//        text: 'Add a Contact',
//        path: 'node/add/contact'
//        };
        
        content['User_agents'] = {
        theme: 'button_link',
        text: 'Send Messages',
        path: 'my_form'
        };
        if (Drupal.user.uid) {
       
            content['my_push'] = {
            theme: 'button_link',
            text: 'My Message Threads',
            path: 'user-messages/' + Drupal.user.uid,
            options: {
            reloadPage:true
            }
            };
            
        }
       
   
        content['contractors_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'contractorsContact', /* the path to the view in Drupal */
        row_callback: 'messages_messages_images_list_row',
        empty_callback: 'messages_messages_images_list_empty',
        attributes: {
        id: 'messages_listing_items'
        }
        };
        
        return content;
    }
    catch (error) { console.log('messages_messages_images - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function messages_messages_images_list_row(view, row) {
    try {
        
        //return l(t(row.subject), 'messages/view/' + row.mid);
         return l(t(row.title), 'node/' + row.nid);
        
        return link;
        
    }
    catch (error) { console.log('messages_messages_images_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function messages_messages_images_list_empty(view) {
    try {
        return '<center><img src="http://www.opcmialocal528.com/sites/default/files/icon.png" alt="OPCMIA" width="100%"></center>';
    }
    catch (error) { console.log('messages_messages_images_list_empty - ' + error); }
}
