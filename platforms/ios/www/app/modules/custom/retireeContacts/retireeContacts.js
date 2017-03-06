/**
 * Implements hook_menu().
 */
function retireeContacts_menu() {
    var items = {};
    items['User_retirees'] = {
    title: 'Retirees',
    page_callback: 'retireeContacts_User_retirees_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function retireeContacts_User_retirees_page() {
    try {
        var content = {};
        content['my_User_retirees_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'retireeContacts', /* the path to the view in Drupal */
        row_callback: 'retireeContacts_User_retirees_list_row',
        empty_callback: 'retireeContacts_User_retirees_list_empty',
        attributes: {
        id: 'my_User_retirees_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('retireeContacts_User_retirees_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function retireeContacts_User_retirees_list_row(view, row) {
    try {
        return l(t(row.name), 'user/' + row.uid);
    }
    catch (error) { console.log('retireeContacts_User_retirees_list_row - ' + error); }
}

/**
 *
 */
function retireeContacts_User_retirees_list_empty(view) {
    try {
        return t('Sorry, no retirees were found.');
    }
    catch (error) { console.log('retireeContacts_User_retirees_list_empty - ' + error); }
}