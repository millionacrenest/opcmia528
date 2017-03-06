/**
 * Implements hook_menu().
 */
function plasterersContact_menu() {
    var items = {};
    items['User_plasterers'] = {
    title: 'Journeymen Plasterers',
    page_callback: 'plasterersContact_User_plasterers_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function plasterersContact_User_plasterers_page() {
    try {
        var content = {};
        content['my_User_plasterers_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'plasterersContact', /* the path to the view in Drupal */
        row_callback: 'plasterersContact_User_plasterers_list_row',
        empty_callback: 'plasterersContact_User_plasterers_list_empty',
        attributes: {
        id: 'my_User_plasterers_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('plasterersContact_User_plasterers_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function plasterersContact_User_plasterers_list_row(view, row) {
    try {
        return l(t(row.name), 'user/' + row.uid);
    }
    catch (error) { console.log('plasterersContact_User_plasterers_list_row - ' + error); }
}

/**
 *
 */
function plasterersContact_User_plasterers_list_empty(view) {
    try {
        return t('Sorry, no jounreymen plasterers were found.');
    }
    catch (error) { console.log('plasterersContact_User_plasterers_list_empty - ' + error); }
}