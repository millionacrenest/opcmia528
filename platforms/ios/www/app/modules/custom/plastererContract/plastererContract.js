/**
 * Implements hook_menu().
 */
function plastererContract_menu() {
    try {
        var items = {};
        items['plasterer_Contracts'] = {
        title: 'My Contracts',
        page_callback: 'plastererContract_plasterer_Contracts',
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
function plastererContract_plasterer_Contracts() {
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
        content['my_plasterer_Contracts_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'plasterer-contracts', /* the path to the view in Drupal */
        row_callback: 'plastererContract_plasterer_Contracts_list_row',
        empty_callback: 'plastererContract_plasterer_Contracts_list_empty',
        attributes: {
        id: 'plastererContract_listing_items'
        }
        };
        
        
        return content;
    }
    catch (error) { console.log('plastererContract_plasterer_Contracts - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function plastererContract_plasterer_Contracts_list_row(view, row) {
    try {
        
        //        var image_html = theme('image', { path: row.field_photo.src });
        var title_html = '<h2>' + row.title + '</h2>';
        var link = l(title_html, 'node/' + row.nid);
        
        return link;
        
    }
    catch (error) { console.log('plastererContract_plasterer_Contracts_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function plastererContract_plasterer_Contracts_images_list_empty(view) {
    try {
        return '<p>Sorry, no notes were found.</p>';
    }
    catch (error) { console.log('plastererContract_plasterer_Contracts_list_empty - ' + error); }
}