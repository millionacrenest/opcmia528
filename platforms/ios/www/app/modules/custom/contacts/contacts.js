/**
 * Implements hook_menu().
 */
function contacts_menu() {
    try {
        var items = {};
        items['contacts_images'] = {
        title: 'Contacts',
        page_callback: 'contacts_contacts_images',
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
function contacts_contacts_images() {
    try {
        
        var content = {};
//        content['contractorContact'] = {
//        theme: 'button_link',
//        text: 'Contractors',
//        path: 'User_contractors'
//        };
        content['myContact'] = {
        theme: 'button_link',
        text: 'My Contacts',
        path: 'my_contacts'
        };
        content['my_contacts_images_list'] = {
        theme: 'view',
        format: 'ul',
        path: 'contacts', /* the path to the view in Drupal */
        row_callback: 'contacts_contacts_images_list_row',
        empty_callback: 'contacts_contacts_images_list_empty',
        attributes: {
        id: 'contacts_contacts_images_list_view'
        }
        };
//        content['contractors'] = {
//        theme: 'button_link',
//        text: 'Contractors',
//        path: 'User_contractors'
//        };
//        content['User_agents'] = {
//        theme: 'button_link',
//        text: 'Agents',
//        path: 'User_agents'
//        };
//        content['User_mason'] = {
//        theme: 'button_link',
//        text: 'Journeymen Masons',
//        path: 'User_masons'
//        };
//        content['User_plasterer'] = {
//        theme: 'button_link',
//        text: 'Journeymen Plasterers',
//        path: 'User_plasterers'
//        };
//        content['CApprentices'] = {
//        theme: 'button_link',
//        text: 'Cement Apprentices',
//        path: 'User_apprenC'
//        };
//        content['PApprentices'] = {
//        theme: 'button_link',
//        text: 'Plasterer Apprentices',
//        path: 'User_apprenP'
//        };
//        content['Retirees'] = {
//        theme: 'button_link',
//        text: 'Retirees',
//        path: 'User_retirees'
//        };
//     
        
        return content;
    }
    catch (error) { console.log('contacts_contacts_images - ' + error); }
}

///**
// * The row callback to render a single row.
// */
function contacts_contacts_images_list_row(view, row) {
    try {
        
  
        var link = l(row.field_lastname + ", " + row.field_firstname, 'user/' + row.uid);
        
        return link;
        
    }
    catch (error) { console.log('contacts_contacts_images_list_row - ' + error); }
}

/**
 * Callback function for no results.
 */
function contacts_contacts_images_list_empty(view) {
    try {
        return '<p>Sorry, no contacts were found.</p>';
    }
    catch (error) { console.log('contacts_contacts_images_list_empty - ' + error); }
}