/**
 * Implements hook_form_alter().
 */
function login_form_alter(form, form_state, form_id) {
    try {
        if (form_id == 'user_login_form') {
            
            form.elements['my_markup'] = {
            markup: '<center><img src="http://www.opcmialocal528.com/sites/default/files/icon.png" alt="OPCMIA" width="100%"></center>'
            };
        }
    }
    catch (error) { console.log('login_form_alter - ' + error); }
}

