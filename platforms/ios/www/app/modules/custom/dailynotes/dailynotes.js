/**
 * Implements hook_menu().
 */
function dailynotes_menu() {
    try {
        var items = {};
        items['daily_notes'] = {
        title: 'Daily Notes',
        page_callback: 'dailynotes_daily_notes',
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
 * Implements hook_menu().
 */
//function dailynotes_menu() {
//    var items = {
//    my_custom_page:{
//    title:"Daily Notes",
//    page_callback:"dailynotes_daily_notes",
//    options:{
//    reloadPage:true
//    }
//    }
//    };
//    return items;
//}



/**
 * The page callback to display the view contacts_contacts_images.
 */
function dailynotes_daily_notes() {
    try {
        var content = {};
        content['add_daily_notes'] = {
        theme: 'button_link',
        text: 'Add Daily Notes',
        path: 'node/add/daily_notes'
        };
        content['my_header'] = {
        theme: 'header',
        text: 'Recent Notes'
        };
        content['my_daily_notes_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'daily-notes', /* the path to the view in Drupal */
        row_callback: 'dailynotes_daily_notes_list_row',
        empty_callback: 'dailynotes_daily_notes_list_empty',
        attributes: {
        id: 'dailynotes_listing_items'
        }
        };
        
        
        return content;
    }
    catch (error) { console.log('dailynotes_daily_notes - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function dailynotes_daily_notes_list_row(view, row) {
    try {
        
        var image_html = theme('image', { path: row.field_photo.src });
        var title_html = '<h2>' + row.title + '</h2>';
        var link = l(image_html + title_html, 'node/' + row.nid);
        
        return link;
        
    }
    catch (error) { console.log('dailynotes_daily_notes_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function dailynotes_daily_notes_images_list_empty(view) {
    try {
        return '<p>Sorry, no notes were found.</p>';
    }
    catch (error) { console.log('dailynotes_daily_notes_list_empty - ' + error); }
}
