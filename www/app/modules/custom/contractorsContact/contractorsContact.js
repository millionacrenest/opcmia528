/**
 * Implements hook_menu().
 */
function contractorsContact_menu() {
    var items = {};
    items['User_contractors'] = {
    title: 'Contractors',
    page_callback: 'contractorsContact_User_contractors_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function contractorsContact_User_contractors_page() {
    try {
        var content = {};
        content['my_User_contractors_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'contractorsContact', /* the path to the view in Drupal */
        row_callback: 'contractorsContact_User_contractors_list_row',
        empty_callback: 'contractorsContact_User_contractors_list_empty',
        attributes: {
        id: 'my_User_contractors_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('contractorsContact_User_contractors_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function contractorsContact_User_contractors_list_row(view, row) {
    try {
        return l(t(row.title), 'node/' + row.nid);
    }
    catch (error) { console.log('contractorsContact_User_contractors_list_row - ' + error); }
}

/**
 *
 */
function contractorsContact_User_contractors_list_empty(view) {
    try {
        return t('We can change this to whatever we want. Members will see this when they click the contractors link.');
    }
    catch (error) { console.log('contractorsContact_User_contractors_list_empty - ' + error); }
}