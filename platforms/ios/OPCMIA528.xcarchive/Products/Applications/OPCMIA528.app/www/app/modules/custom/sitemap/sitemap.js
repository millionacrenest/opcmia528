/**
 * Implements hook_menu().
 */
function sitemap_menu() {
    var items = {};
    items['sites'] = {
    title: 'Contractor Sites',
    page_callback: 'sitemap_sites_page',
    options:{
    reloadPage:true
    }
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function sitemap_sites_page() {
    try {
        var content = {};
       
        content['my_button_link'] = {
        theme: 'button_link',
        text: 'Add Contractor Site',
        path: 'node/add/site'
        };
        
        content['my_sites_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'site-gallery', /* the path to the view in Drupal */
        row_callback: 'sitemap_sites_list_row',
        empty_callback: 'sitemap_sites_list_empty',
        attributes: {
        id: 'my_sites_list_view'
        }
           
        };
       
        return content;
    }
    catch (error) { console.log('sitemap_sites_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function sitemap_sites_list_row(view, row) {
//    try {
//        return l(t(row.title), 'node/' + row.nid);
//    }
    try {
        var image = theme('image', { path: row.field_site_image.src });
        var title = '<h2>' + row.title + '</h2>';
        var html = l(image + title, 'node/' + row.nid);
        return html;
    }
    
    
    
    catch (error) { console.log('sitemap_sites_list_row - ' + error); }
}

/**
 *
 */
function sitemap_sites_list_empty(view) {
    try {
        return t('Sorry, no Contractor sites were found.');
    }
    catch (error) { console.log('sitemap_sites_list_empty - ' + error); }
}

//format: 'table',
//format_attributes: {
//border: 1,
//    'cellpadding': 10,
//    'cellspacing': 10,
//},
//
//var html =
//'<td>' + row.nid + '</td>' +
//'<td>' + l(row.title, 'node/' + row.nid) + '</td>';
//return html;
//
///**
// * The row callback to render a single row.
// */
//function sitemap_sites_list_row(view, row) {
//    try {
//        var html = l(row.title, 'node/' + row.nid);
//        // Use plain text for the first and last rows.
//        if (row._position == 0 || row._position == view.count - 1) {
//            html = row.title;
//        }
//        return html;
//    }
//    catch (error) { console.log('sitemap_sites_list_row - ' + error); }
//}

