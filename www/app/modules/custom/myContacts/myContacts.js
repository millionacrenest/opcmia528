/**
 * Implements hook_menu().
 */
function myContacts_menu() {
    var items = {};
    items['my_contacts'] = {
    title: 'My Contacts',
    page_callback: 'myContacts_my_contacts_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function myContacts_my_contacts_page() {
    try {
        var content = {};
        content['create_contact'] = {
        theme: 'button_link',
        text: 'Add a Contact',
        path: 'node/add/contact'
        };
        content['myContacts_my_contacts_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'contactsJSON', /* the path to the view in Drupal */
        row_callback: 'myContacts_my_contacts_list_row',
        empty_callback: 'myContacts_my_contacts_list_empty',
        attributes: {
        id: 'myContacts_my_contacts_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('myContacts_my_contacts_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function myContacts_my_contacts_list_row(view, row) {
    try {
        return l(t(row.title), 'node/' + row.nid);
    }
    catch (error) { console.log('myContacts_my_contacts_list_row - ' + error); }
}

/**
 *
 */
function myContacts_my_contacts_list_empty(view) {
    try {
        return t('Sorry, no contacts were found.');
    }
    catch (error) { console.log('myContacts_my_contacts_list_empty - ' + error); }
}