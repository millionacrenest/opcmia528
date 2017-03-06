/**
* Implements hook_menu().
*/
function events_menu() {
var items = {};
items['events'] = {
title: 'Calendar',
page_callback: 'events_events_page',
options:{
reloadPage:true
}
};
return items;
}

/**
* The page callback to display the view.
*/
function events_events_page() {
try {
var content = {};

//    content['my_header'] = {
//    theme: 'header',
//    text: 'Upcoming Events'
//    };

    content['my_button_link'] = {
    theme: 'button_link',
    text: 'Add an Event',
    path: 'node/add/event'
    };
    
content['my_events_list'] = {
theme: 'view',
format: 'ul',
path: 'events', /* the path to the view in Drupal */
row_callback: 'events_events_list_row',
empty_callback: 'events_events_list_empty',
attributes: {
id: 'my_events_list_view'
}

};
    
    
   

return content;
}
catch (error) { console.log('events_events_page - ' + error); }
}

/**
* The row callback to render a single row.
*/
function events_events_list_row(view, row) {
   try {
       
//       var date_html = '<h3>' + row.field_event_date + '</h3>';
//       var title_html = '<h2>' + row.title + '</h2>';
//       var link = l(date_html + title_html, 'node/' + row.nid);

       
       return l(t(row.title), 'node/' + row.nid);
       
       return link;
    }
//try {
//var image = theme('image', { path: row.field_event_image.src });
//var title = '<h2>' + row.title + '</h2>';
//var html = l(image + title, 'node/' + row.nid);
//return html;
//}



catch (error) { console.log('events_events_list_row - ' + error); }
}

/**
*
*/
function events_events_list_empty(view) {
try {
return t('Sorry, no events were found.');
}
catch (error) { console.log('events_events_list_empty - ' + error); }
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
//function events_sites_list_row(view, row) {
//    try {
//        var html = l(row.title, 'node/' + row.nid);
//        // Use plain text for the first and last rows.
//        if (row._position == 0 || row._position == view.count - 1) {
//            html = row.title;
//        }
//        return html;
//    }
//    catch (error) { console.log('events_sites_list_row - ' + error); }
//}

