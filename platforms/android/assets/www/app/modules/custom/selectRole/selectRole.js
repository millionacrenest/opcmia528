/**
 * Implements hook_field_widget_form().
 */
function selectRole_field_widget_form(form, form_state, field, instance, langcode, items, delta, element) {
    try {
        //console.log(form);
        //console.log(form_state);
        //console.log(field);
        //console.log(instance);
        //console.log(langcode);
        //console.log(items);
        //console.log(element);
        
        // Change it to a role input.
        items[delta].type = 'role';
        
        // Determine either the default value or item value, if either, then set the attribute value.
        var value = '';
        if (instance.default_value && instance.default_value.length) {
            value = instance.default_value[0].role;
        }
        if (items[delta].item && items[delta].item.role) {
            value = items[delta].item.role;
        }
        items[delta].options.attributes.value = value;
        
    }
    catch (error) { console.log('selectRole_field_widget_form - ' + error); }
}

/**
 * Implements hook_field_formatter_view().
 */
function selectRole_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
    try {
        //console.log(entity_type);
        //console.log(entity);
        //console.log(field);
        //console.log(instance);
        //console.log(langcode);
        //console.log(items);
        //console.log(display);
        
        // Iterate over each item, and place a widget onto the render array.
        var content = {};
        $.each(items, function(delta, item) {
               switch (display.type) {
               case 'role_default':
               content[delta] = {
               theme: 'role_link',
               text: item.role,
               path: null
//               attributes: {
//               href: 'mailto:+' + item.email
//               }
               };
               break;
               case 'role_plain':
               content[delta] = { markup: item.role };
               break;
               default:
               console.log('WARNING: selectRole_field_formatter_view - unsupported display type: ' + display.type);
               break;
               }
               });
        return content;
    }
    catch (error) { console.log('selectRole_field_formatter_view - ' + error); }
}

/**
 *
 */
function theme_role_link(variables) {
    try {
        if (!variables.attributes['data-icon']) { variables.attributes['data-icon'] = 'star'; }
        return theme('button_link', variables);
    }
    catch (error) { console.log('theme_role_link - ' + error); }
}

/**
 * Implements hook_assemble_form_state_into_field().
 */
function selectRole_assemble_form_state_into_field(entity_type, bundle, form_state_value, field, instance, langcode, delta, field_key, form) {
    try {
        field_key.value = "role";
        return form_state_value;
    }
    catch (error) { console.log('hook_assemble_form_state_into_field - ' + error); }
}