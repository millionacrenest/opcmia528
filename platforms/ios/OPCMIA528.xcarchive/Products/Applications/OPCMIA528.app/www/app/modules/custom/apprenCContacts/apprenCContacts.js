/**
 * Implements hook_menu().
 */
function apprentCContacts_menu() {
    var items = {};
    items['User_apprenC'] = {
    title: 'Mason Apprentices',
    page_callback: 'apprentCContacts_User_apprenC_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function apprentCContacts_User_apprenC_page() {
    try {
        var content = {};
        content['my_User_apprenC_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'masonContacts', /* the path to the view in Drupal */
        row_callback: 'apprentCContacts_User_apprenC_list_row',
        empty_callback: 'apprentCContacts_User_apprenC_list_empty',
        attributes: {
        id: 'my_User_apprenC_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('apprentCContacts_User_apprenC_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function apprentCContacts_User_apprenC_list_row(view, row) {
    try {
        return l(t(row.name), 'user/' + row.uid);
    }
    catch (error) { console.log('apprentCContacts_User_apprenC_list_row - ' + error); }
}

/**
 *
 */
function apprentCContacts_User_apprenC_list_empty(view) {
    try {
        return t('Sorry, no apprentice masons were found.');
    }
    catch (error) { console.log('apprentCContacts_User_apprenC_list_empty - ' + error); }
}