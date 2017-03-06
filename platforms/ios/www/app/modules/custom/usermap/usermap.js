// Create global variables to hold coordinates and the map.
var _usermap_user_latitude = null;
var _usermap_user_longitude = null;
var _usermap_map = null;

/**
 * Implements hook_menu().
 */
function usermap_menu() {
    try {
        var items = {};
        items['users'] = {
        title: 'Agent Locations',
        page_callback: 'usermap_map',
        pageshow: 'usermap_map_pageshow',
        options:{
        reloadPage:true
        }
        };
        return items;
    }
    catch (error) { console.log('usermap_menu - ' + error); }
}

/**
 * The map page callback.
 */
function usermap_map() {
    try {
        var content = {};
        var map_attributes = {
        id: 'usermap_map',
        style: 'width: 100%; height: 420px;'
        };
        content['map'] = {
        markup: '<div ' + drupalgap_attributes(map_attributes) + '></div>'
        };
        return content;
    }
    catch (error) { console.log('usermap_map - ' + error); }
}

/**
 * The map pageshow callback.
 */
function usermap_map_pageshow() {
    try {
        navigator.geolocation.getCurrentPosition(
                                                 
                                                 // Success.
                                                 function(position) {
                                                 
                                                 // Set aside the user's position.
                                                 _usermap_user_latitude = position.coords.latitude;
                                                 _usermap_user_longitude = position.coords.longitude;
                                                 
                                                 // Build the lat lng object from the user's position.
                                                 var myLatlng = new google.maps.LatLng(
                                                                                       _usermap_user_latitude,
                                                                                       _usermap_user_longitude
                                                                                       );
                                                 
                                                 // Set the map's options.
                                                 var mapOptions = {
                                                 center: myLatlng,
                                                 zoom: 11,
                                                 mapTypeControl: true,
                                                 mapTypeControlOptions: {
                                                 style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                                                 },
                                                 zoomControl: true,
                                                 zoomControlOptions: {
                                                 style: google.maps.ZoomControlStyle.SMALL
                                                 }
                                                 };
                                                 
                                                 // Initialize the map, and set a timeout to resize properly.
                                                 _usermap_map = new google.maps.Map(
                                                                                      document.getElementById("usermap_map"),
                                                                                      mapOptions
                                                                                      );
                                                 setTimeout(function() {
                                                            google.maps.event.trigger(_usermap_map, 'resize');
                                                            _usermap_map.setCenter(myLatlng);
                                                            }, 500);
                                                 
                                                 // Add a marker for the user's current position.
                                                 var marker = new google.maps.Marker({
                                                                                     position: myLatlng,
                                                                                     map: _usermap_map,
                                                                                     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                                                                                     });
                                                 
                                                 var infoWindow = new google.maps.InfoWindow({
                                                                                             content: l("Get Directions", "https://www.google.com/maps/dir//" +_usermap_user_latitude+ "," +_usermap_user_longitude, {InAppBrowser: true})
                                                                                             });
                                                 
                                                 google.maps.event.addListener(marker, 'click', function () {
                                                                               infoWindow.open(_usermap_map, marker);
                                                                               });
                                                 
                                                 },
                                                 
                                                 // Error
                                                 function(error) {
                                                 
                                                 // Provide debug information to developer and user.
                                                 console.log(error);
                                                 drupalgap_alert(error.message);
                                                 
                                                 // Process error code.
                                                 switch (error.code) {
                                                 
                                                 // PERMISSION_DENIED
                                                 case 1:
                                                 break;
                                                 
                                                 // POSITION_UNAVAILABLE
                                                 case 2:
                                                 break;
                                                 
                                                 // TIMEOUT
                                                 case 3:
                                                 break;
                                                 
                                                 }
                                                 
                                                 },
                                                 
                                                 // Options
                                                 { enableHighAccuracy: true }
                                                 
                                                 );
    }
    catch (error) {
        console.log('usermap_map_pageshow - ' + error);
    }
}