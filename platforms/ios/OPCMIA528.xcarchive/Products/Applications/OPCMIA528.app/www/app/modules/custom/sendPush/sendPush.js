/**
 * Define the form.
 */
function sendPush_custom_form(form, form_state) {
    try {
       
//        form.elements['recipients'] = {
//        type: 'textfield',
//        title: 'To:',
//        required: true
//        };
        form.prefix += '<p><center>Enter a subject and message to send a notification to all the <font color="red">OPCMIA 528 </font> agents. Type "Agent" in the <font color="red">to:</font> field</center></p>';
       
        
        
   
    
        
        
        form.elements['recipients'] = {
        type: 'textfield',
        title: 'To:',
            default_value: 'Agent',
        required: true,
        options:{
        reloadPage:true,
        attributes: {autocapitalize: "none"}
        }
        };
        form.elements['subject'] = {
        type: 'textfield',
        title: 'Subject',
        required: true
        };
        form.elements['message'] = {
        type: 'textfield',
        title: 'Message Body',
        required: true
        };
//        form.elements['language'] = {
//        type: 'select',
//        title: 'Language',
//        options: push_notifications_used_languages(),
//        required: true
//        };
//        form.elements['image_example_image_fid'] = {
//        type: 'managed_file',
//        title: 'Image',
//        options: ,
//        required: true
//        };
        form.elements['submit'] = {
        type: 'submit',
        value: 'Send'
        };
        return form;
    }
    catch (error) { console.log('sendPush_custom_form - ' + error); }
}






/**
 * Define the form's validation function (optional).
 */
//function sendPush_custom_form_alter(form, form_state) {
//    try {
////        // If the user isn't an agent, fill the textfield
//        if (drupalgap_user_has_role !== 'Agent') {
//            {
//                
//                
//                // console.log (form);
//                
//                if (form.id == 'custom_form') {
//                
//                    // set value
//                    form.elements['recipients'] = "Agent";
//                    
//                }
//
//            }
//
//            privatemsg_create(form_state.values.subject, form_state.values.message, form_state.values.recipients,  null, {
//                  success: function(result) {
//                  console.log('Message sent: ' + result.pmtid);
//                  drupalgap_alert("Message Sent");
//                  }
//                  });
//
//            drupalgap_form_set_error('name', 'Sorry, this function isn't working!');
//        }
//    }
//    catch (error) { console.log('sendPush_custom_form_validate - ' + error); }
//}




/**
 * Define the form's submit function.
 */
function sendPush_custom_form_submit(form, form_state) {
    try {
        if (form_state.values.recipients == "all") {
            form_state.values.recipients = "authenticated user"
        }
        privatemsg_create(form_state.values.subject, form_state.values.message, form_state.values.recipients,  null, {
                          success: function(result) {
                          console.log('Message sent: ' + result.pmtid);
                          drupalgap_alert("Message Sent");
                          }
                          });
    }
    catch (error) { console.log('sendPush_custom_form_submit - ' + error); }
}



/**
 * Implements hook_menu().
 */
function sendPush_menu() {
    try {
        var items = {};
        items['my_form'] = {
        title: 'Hello World',
       // pageshow: "sendPush_custom_form_pageshow",
        page_callback: 'drupalgap_get_form',
        page_arguments: ['sendPush_custom_form']
        };
        return items;
    }
    catch (error) { console.log('sendPush_menu - ' + error); }
}

