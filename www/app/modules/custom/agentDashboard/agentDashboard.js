/**
 * Implements hook_menu().
 */
function agentDashboard_menu() {
    try {
        var items = {};
        items['agentDashboard'] = {
        title: 'Dashboard',
        page_callback: 'agentDashboard_hello_world_page'
        };
        return items;
    }
    catch (error) { console.log('agentDashboard_menu - ' + error); }
}
// Add the Page Callback Function
function agentDashboard_hello_world_page() {
    try {
        var content = {};
        content['map'] = {
        theme: 'button_link',
        text: 'Add Site',
        path: 'node/add/site',
//        options: {
        attributes: {
            'data-icon': 'location'
//            //          'data-iconpos': 'notext',
//            'class': 'ui-btn-left'
       }
//        }
        };
        content['contact'] = {
        theme: 'button_link',
        text: 'Add Contact',
        path: 'node/add/contact',
//        options: {
        attributes: {
           'data-icon': 'phone',
//            //          'data-iconpos': 'notext',
//             'class': 'ui-btn-left'
        }
//        }
        };
        content['info'] = {
        theme: 'button_link',
        text: 'Add Info',
        path: 'node/add/blog',
//        options: {
        attributes: {
           'data-icon': 'info',
            //          'data-iconpos': 'notext',
//             'class': 'ui-btn-left'
       }
//        }
        };
//        content['events'] = {
//        theme: 'button_link',
//        text: 'Add Event',
//        path: 'node/add/event',
////        options: {
//        attributes: {
//           'data-icon': 'calendar',
////            //          'data-iconpos': 'notext',
////             'class': 'ui-btn-left'
//       }
////        }
//        };
//        content['events'] = {
//        theme: 'button_link',
//        text: 'Add Event',
//        path: 'node/add/event'
////        options: {
////        attributes: {
////            'data-icon': 'calendar'
////            //          'data-iconpos': 'notext',
////            // 'class': 'ui-btn-left'
////        }
////        }
//        };
        content['notes'] = {
        theme: 'button_link',
        text: 'Add Daily Note',
        path: 'node/add/daily_notes',
//        options: {
        attributes: {
            'data-icon': 'comment',
//            //          'data-iconpos': 'notext',
     //      'class': 'ui-btn-left'
       }
//        }
        };

//        content['search'] = {
//        theme: 'button_link',
//        text: 'Search',
//        path: 'search/site'
////        options: {
////        attributes: {
////            'data-icon': 'search',
////            //          'data-iconpos': 'notext',
////            'class': 'ui-btn-left'
////        }
////        }
//        };
        
        
        
        content['push'] = {
        theme: 'button_link',
        text: 'Send Push Notification',
        path: 'my_form',
        options: {
//        InAppBrowser:true,
        attributes:{'data-icon': 'alert'}
        }
        };
                content['my_header'] = {
                theme: 'header',
                text: 'Search'
                };

        
        
        
        
        

        
        
        
        
        return content;
    }
    catch (error) { console.log('agentDashboard_hello_world_page - ' + error); }
}


//function my_module_hello_world_page() {
//    try {
//        var content = {};
//        content['my_intro_text'] = {
//        markup: '<p>Hello App World!</p>'
//        };
//        return content;
//    }
//    catch (error) { console.log('my_module_hello_world_page - ' + error); }
//}
//
//



