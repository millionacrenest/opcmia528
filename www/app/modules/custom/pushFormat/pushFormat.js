/**
 * Implements hook_push_notifications_receive().
 **/
function pushFormat_push_notifications_receive(data) {
    
    // data.message
    // data.title
    // data.count
    // data.sound
    // data.image
    // data.additionalData
    
    // Display the push notification.
    drupalgap_alert(data.message, data.image, {
                    title: drupalgap.settings.title,
                    buttonName: 'OK'
                    });
    
}