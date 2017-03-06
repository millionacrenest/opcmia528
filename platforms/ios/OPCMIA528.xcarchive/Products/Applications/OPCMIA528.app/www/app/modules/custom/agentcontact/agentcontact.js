/**
 * Implements hook_menu().
 */
function agentcontact_menu() {
    var items = {};
    items['User_agents'] = {
    title: 'Agents',
    page_callback: 'agentcontact_User_agents_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function agentcontact_User_agents_page() {
    try {
        var content = {};
        content['my_User_agents_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'agent-contact', /* the path to the view in Drupal */
        row_callback: 'agentcontact_User_agents_list_row',
        empty_callback: 'agentcontact_User_agents_list_empty',
        attributes: {
        id: 'my_User_agents_list_view'
        }
        };
        return content;
    }
    catch (error) { console.log('agentcontact_User_agents_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function agentcontact_User_agents_list_row(view, row) {
    try {
        return l(t(row.name), 'user/' + row.uid);
    }
    catch (error) { console.log('agentcontact_User_agents_list_row - ' + error); }
}

/**
 *
 */
function agentcontact_User_agents_list_empty(view) {
    try {
        return t('Sorry, no User_agents were found.');
    }
    catch (error) { console.log('agentcontact_User_agents_list_empty - ' + error); }
}