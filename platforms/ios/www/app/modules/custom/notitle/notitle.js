/**
 * Implements hook_form_alter().
 */
function notitle_form_alter(form, form_state, form_id) {
    try {
        if (form_id == 'node_edit' && form.elements.type.default_value == 'daily_notes') {
            // The site is using Automatic node titles, disable access to the default
            // title field and make it optional.
            form.elements.title.access = false;
            form.elements.title.required = false;
            // Disable access to other fields not needed.
            //form.elements.field_hours_total.access = false;
            
            // Redirect the node edit form submission to the user's gallery.
            
            
        }
        
    }
    catch (error) { drupalgap_error(error); }
}

