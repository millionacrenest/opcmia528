/**
 * Implements hook_menu().
 */
function masonContacts_menu() {
    var items = {};
    items['User_masons'] = {
    title: 'Journeymen Masons',
    page_callback: 'masonContacts_User_masons_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function masonContacts_User_masons_page() {
    try {
        var content = {};
        content['my_User_masons_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'masonContacts', /* the path to the view in Drupal */
        row_callback: 'masonContacts_User_masons_list_row',
        empty_callback: 'masonContacts_User_masons_list_empty',
        attributes: {
        id: 'my_User_masons_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('masonContacts_User_masons_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function masonContacts_User_masons_list_row(view, row) {
    try {
        return l(t(row.name), 'user/' + row.uid);
    }
    catch (error) { console.log('masonContacts_User_masons_list_row - ' + error); }
}

/**
 *
 */
function masonContacts_User_masons_list_empty(view) {
    try {
        return t('Sorry, no User_masons were found.');
    }
    catch (error) { console.log('masonContacts_User_masons_list_empty - ' + error); }
}