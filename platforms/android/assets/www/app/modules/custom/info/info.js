/**
 * Implements hook_menu().
 */
function info_menu() {
    var items = {};
    items['info'] = {
    title: 'Latest News',
    page_callback: 'info_info_page',
    options:{
    reloadPage:true
    }
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function info_info_page() {
    try {
        var content = {};
        
        content['Apprentices'] = {
        theme: 'button_link',
        text: 'Browse Labor Agreements',
        path: 'contracts'
        };
        content['Header'] = {
        theme: 'header',
        text: 'News'
        };
        
        content['my_info_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'info', /* the path to the view in Drupal */
        row_callback: 'info_info_list_row',
        empty_callback: 'info_info_list_empty',
        attributes: {
        id: 'my_info_list_view'
        }
            
        };
        
        return content;
    }
    catch (error) { console.log('info_info_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function info_info_list_row(view, row) {
    try {
        
        
        
        
         return l(t(row.title), 'node/' + row.nid);
        
        
         return link;
        
    }
    //try {
    //var image = theme('image', { path: row.field_event_image.src });
    //var title = '<h2>' + row.title + '</h2>';
    //var html = l(image + title, 'node/' + row.nid);
    //return html;
    //}
    
    
    
    catch (error) { console.log('info_info_list_row - ' + error); }
}

/**
 *
 */
function info_info_list_empty(view) {
    try {
        return t('Sorry, no new posts were found.');
    }
    catch (error) { console.log('info_info_list_empty - ' + error); }
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
//function info_sites_list_row(view, row) {
//    try {
//        var html = l(row.title, 'node/' + row.nid);
//        // Use plain text for the first and last rows.
//        if (row._position == 0 || row._position == view.count - 1) {
//            html = row.title;
//        }
//        return html;
//    }
//    catch (error) { console.log('info_sites_list_row - ' + error); }
//}

