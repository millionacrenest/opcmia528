/**
 * Implements hook_menu().
 */
function agentContract_menu() {
    try {
        var items = {};
        items['agent_Contracts'] = {
        title: 'My Contracts',
        page_callback: 'agentContract_agent_Contracts',
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
 * The page callback to display the view contacts_contacts_images.
 */
function agentContract_agent_Contracts() {
    try {
        var content = {};
        //        content['add_daily_notes'] = {
        //        theme: 'button_link',
        //        text: 'Add Notes',
        //        path: 'node/add/daily_notes'
        //        };
        //        content['my_header'] = {
        //        theme: 'header',
        //        text: 'Recent Notes'
        //        };
        content['my_agent_Contracts_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'agent-contracts', /* the path to the view in Drupal */
        row_callback: 'agentContract_agent_Contracts_list_row',
        empty_callback: 'agentContract_agent_Contracts_list_empty',
        attributes: {
        id: 'agentContract_listing_items'
        }
        };
        
        
        return content;
    }
    catch (error) { console.log('agentContract_agent_Contracts - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function agentContract_agent_Contracts_list_row(view, row) {
    try {
        
//        var image_html = theme('image', { path: row.field_photo.src });
        var title_html = '<h2>' + row.title + '</h2>';
        var link = l(title_html, 'node/' + row.nid);
        
        return link;
        
    }
    catch (error) { console.log('agentContract_agent_Contracts_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function agentContract_agent_Contracts_images_list_empty(view) {
    try {
        return '<p>Sorry, no notes were found.</p>';
    }
    catch (error) { console.log('agentContract_agent_Contracts_list_empty - ' + error); }
}