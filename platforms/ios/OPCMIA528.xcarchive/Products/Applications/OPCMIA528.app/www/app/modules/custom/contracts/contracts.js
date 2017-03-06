/**
 * Implements hook_menu().
 */
function contracts_menu() {
    try {
        var items = {};
        items['contracts'] = {
        title: 'Contracts',
        page_callback: 'contracts_contracts_page'
        };
        return items;
    }
    catch (error) { console.log('contracts_menu - ' + error); }
}
// Add the Page Callback Function
function contracts_contracts_page() {
    try {
        
        var content = {};

                content['my_contracts_list'] = {
                theme: 'view',
                format: 'ul',
                path: 'labor-agreements', /* the path to the view in Drupal */
                row_callback: 'contracts_contracts_list_row',
                empty_callback: 'contracts_contracts_list_empty',
                attributes: {
                id: 'my_contracts_list_view'
                }
                };
          










     



//        var content {};
//        var html = bl('2012 - 2013 Schedule ACM', null, {
//                      attributes: {
//                      onclick: "window.open('public_html/opcmialocal528.com/sites/default/files/contracts2012-2013ScheduleACM.pdf', '_system', 'location=yes')"
//                      }
//                      });

        
        
        //        content['notify'] = {
//        theme: 'button_link',
//        text: 'Notify',
//        path: ''
//        };
//        content['report'] = {
//        theme: 'button_link',
//        text: 'Run Reports',
//        path: ''
//        };
//        content['social'] = {
//        theme: 'button_link',
//        text: 'Social Networks',
//        path: ''
//        };
        
        
        
        
        
        
        //        content['Notify'] = {
        //        theme: 'button_link',
        //        text: 'Send Notice',
        //    path: 'www.opcmialocal528.com/user#overlay=admin/config/services/push_notifications/message'
        //        options: {
        //        InAppBrowser:true
        //        }
        //        };
        //
        //        content['Weekly_report'] = {
        //        theme: 'button_link',
        //        text: 'Run Weekly Report',
        //        path: 'weekly_daily'
        //        };
        
        
        
        
        
        return content;
    }
    catch (error) { console.log('contracts_contracts_page - ' + error); }
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
        /**
         * The row callback to render a single row.
         */
        function contracts_contracts_list_row(view, row) {
            try {
                return l(t(row.title), 'node/' + row.nid);
            }
            catch (error) { console.log('contracts_contracts_list_row - ' + error); }
        }
        
        /**
         *
         */
        function contracts_contracts_list_empty(view) {
            try {
                return t('Sorry, no contracts were found.');
            }
            catch (error) { console.log('contracts_contracts_list_empty - ' + error); }
        }


