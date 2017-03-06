/**
 * Implements hook_menu().
 */
function apprenPContacts_menu() {
    var items = {};
    items['User_apprenP'] = {
    title: 'Apprentice Plasterers',
    page_callback: 'apprenPContacts_User_apprenP_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function apprenPContacts_User_apprenP_page() {
    try {
        var content = {};
        content['my_User_apprenP_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'apprenPContracts', /* the path to the view in Drupal */
        row_callback: 'apprenPContacts_User_apprenP_list_row',
        empty_callback: 'apprenPContacts_User_apprenP_list_empty',
        attributes: {
        id: 'my_User_apprenP_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('apprenPContacts_User_apprenP_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function apprenPContacts_User_apprenP_list_row(view, row) {
    try {
        return l(t(row.name), 'user/' + row.uid);
    }
    catch (error) { console.log('apprenPContacts_User_apprenP_list_row - ' + error); }
}

/**
 *
 */
function apprenPContacts_User_apprenP_list_empty(view) {
    try {
        return t('Sorry, no apprentice plasterers were found.');
    }
    catch (error) { console.log('apprenPContacts_User_apprenP_list_empty - ' + error); }
}