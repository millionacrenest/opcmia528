/**
 * Implements hook_menu().
 */
function filterMap_menu() {
    try {
        var items = {};
        items['filterMap'] = {
        title: 'Filter Map',
        page_callback: 'filterMap_filterMap',
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
function filterMap_filterMap() {
    try {
        var content = {};
       
       
        content['my_filterMap_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'filtermap', /* the path to the view in Drupal */
        row_callback: 'filterMap_filterMap_list_row',
        empty_callback: 'filterMap_filterMap_list_empty',
        attributes: {
        id: 'filterMap_listing_items'
        }
        };
        
        
        return content;
    }
    catch (error) { console.log('filterMap_filterMap - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function filterMap_filterMap_list_row(view, row) {
    try {
        
       // var image_html = theme('image', { path: row.field_photo.src });
        var title_html = '<h2>' + row.title + '</h2>';
        var link = l(title_html, 'node/' + row.nid);
        
        return link;
        
    }
    catch (error) { console.log('filterMap_filterMap_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function filterMap_filterMap_images_list_empty(view) {
    try {
        return '<p>Sorry, no notes were found.</p>';
    }
    catch (error) { console.log('filterMap_filterMap_list_empty - ' + error); }
}
