/**
 * Implements hook_menu().
 */
function masonContract_menu() {
    try {
        var items = {};
        items['mason_Contracts'] = {
        title: 'My Contracts',
        page_callback: 'masonContract_mason_Contracts',
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
function masonContract_mason_Contracts() {
    try {
        var content = {};
//                content['search_mason_contract'] = {
//                theme: 'button_link',
//                text: 'Search',
//                path: 'search/site');'
//                };
               // content['my_header'] = {
               // theme: 'header',
               // text: 'Recent Notes'
        //        };
        content['my_mason_Contracts_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'search-cement-mason-agreements', /* the path to the view in Drupal */
        row_callback: 'masonContract_mason_Contracts_list_row',
        empty_callback: 'masonContract_mason_Contracts_list_empty',
        attributes: {
        id: 'masonContract_listing_items'
        }
        };
        
        
        return content;
    }
    catch (error) { console.log('masonContract_mason_Contracts - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function masonContract_mason_Contracts_list_row(view, row) {
    try {
        
        //        var image_html = theme('image', { path: row.field_photo.src });
        var title_html = '<h2>' + row.title + '</h2>';
        var link = l(title_html, 'node/' + row.nid);
        
        return link;
        
    }
    catch (error) { console.log('masonContract_mason_Contracts_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function masonContract_mason_Contracts_images_list_empty(view) {
    try {
        return '<p>Sorry, no notes were found.</p>';
    }
    catch (error) { console.log('masonContract_mason_Contracts_list_empty - ' + error); }
}