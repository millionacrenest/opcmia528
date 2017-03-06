
// Create global variables to hold coordinates and the map.
var _map_user_latitude = null;
var _map_user_longitude = null;
var _map_map = null;

/**
 * Implements hook_menu().
 */
function map_menu() {
    try {
        var items = {};
        items['map'] = {
//        title: 'Sites Near You',
        page_callback: 'map_map',
        options:{
        reloadPage:true
        },
        pageshow: 'map_map_pageshow'
        };
        return items;
        
    }
    catch (error) { console.log('map_menu - ' + error); }
}

/**
 * The map page callback.
 */
function map_map() {
    try {
        var content = {};
        
        
      
        
        // Figure out the map's height from the device window height.
//                var window_height = $(window).height();
//                var map_height = window_height - 92; // = footer (px) + header (px)
//        var map_attributes = {
//        id: 'map_map',
//        style: 'width: 100%; height: 320px;'
//        };
//        content['map'] = {
//        markup: '<div ' + drupalgap_attributes(map_attributes) + '></div>'
//        };
       
        content['add_new_site'] = {
        theme: 'button_link',
        text: 'Add New Location',
        path:'node/add/site'
        };
        
                content['search_locations'] = {
                theme: 'button_link',
                text: 'Browse Locations',
               path: 'filterMap'
                };
                
        
        
        var window_height = $(window).height();
        var map_height = window_height - 92; // = footer (px) + header (px)
        var map_attributes = {
        id: 'map_map',
        style: 'width: 100%; height: 320px;'
        };
        content['map'] = {
        markup: '<div ' + drupalgap_attributes(map_attributes) + '></div>'
        };
       
        
        setTimeout(function() {
                   google.maps.event.trigger(_map_map, 'resize');
                   }, 500);
        
        // Figure out the map's height from the device window height.
//        var window_height = $(window).height();
//        var map_height = window_height - 92; // = footer (px) + header (px)
//        var map_attributes = {
//        id: 'map_map_map',
//        style: 'width: 100%; height: ' + map_height + 'px;'
//        };
//        content['map'] = {
//            /* ... map stuff goes here ... */
//        };
//        Depending on how many headers, footers, navbars, etc are on your page, you'll have to tweak the pixel count accordingly. You'll most likely need some CSS like this too:
//        #map .ui-content {
//        padding: 0em;
//        }
        
        
//        content['location_results'] = {
//        theme: 'jqm_item_list',
//        items: [],
//        attributes: {
//        id: 'location_results_list'
//        }
//        };
       
        
        
        // Figure out the map's height from the device window height.
//        var window_height = $(window).height();
//        var map_height = window_height - 92; // = footer (px) + header (px)
//        var map_attributes = {
//        id: 'map_map_map',
//        style: 'width: 100%; height: ' + map_height + 'px;'
//        };
//        content['map'] = {
//            /* ... map stuff goes here ... */
//        };
        
        content['my_markup'] = {
        markup: '<img src="http://www.opcmialocal528.com/sites/default/files/mapLegend.jpg" alt="Map Legend" width="100%">'
        };
       
        
        return content;
        
        
        
        
    }
    catch (error) { console.log('map_map - ' + error); }
}

/**
 * The map pageshow callback.
 */
function map_map_pageshow() {
    try {
        
        
        
       // Success.
        var showMap = function(position) {
            
            if (!position) { position = { coords: { latitude: 47.597402, longitude: -122.329047 } }; }
            
            // Set aside the user's position.
            _map_user_latitude = position.coords.latitude;
            _map_user_longitude = position.coords.longitude;
            
            // Build the lat lng object from the user's position.
            var myLatlng = new google.maps.LatLng(
                                                  _map_user_latitude,
                                                  _map_user_longitude
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
            _map_map = new google.maps.Map(
                                           document.getElementById("map_map"),
                                           mapOptions
                                           );
        //    setTimeout(function() {
          //             google.maps.event.trigger(_map_map, 'resize');
            //           _map_map.setCenter(myLatlng);
              //         }, 500);
            
            // Add a marker for the user's current position.
            var marker = new google.maps.Marker({
                                                position: myLatlng,
                                                map: _map_map,
                                                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                                                });
        
          
            
            
            // Build the path to the view to retrieve the results.
            var range = 400; // Search within a 4 mile radius, for illustration purposes.
            var path = 'nearby-locations/' +
            _map_user_latitude + ',' + _map_user_longitude + '_' + range;
            
            // Call the server.
            views_datasource_get_view_result(path, {
                                             success: function(data) {
                                             
                                             if (data.nodes.length == 0) {
                                             drupalgap_alert('Sorry, we did not find any nearby locations!');
                                             return;
                                             }
                                             
                                             // Iterate over each spot, add it to the list and place a marker on the map.
                                             var items = [];
//                                             var mockDataNodes = [
//                                                                  {
//                                                                  "node" : {
//                                                                  "title" : "Test2",
//                                                                  "nid" : "91",
//                                                                  "latitude" : "47.537496127232",
//                                                                  "longitude" : "-122.373758470750",
//                                                                  "field_geofield_distance" : "1.60",
//                                                                  "field_site_image" : "",
//                                                                  "field_mt_category" : ""
//                                                                  }
//                                                                  },
//                                                                  {
//                                                                  "node" : {
//                                                                  "title" : "Test",
//                                                                  "nid" : "90",
//                                                                  "latitude" : "47.537468802228",
//                                                                  "longitude" : "-122.373765930650",
//                                                                  "field_geofield_distance" : "1.60",
//                                                                  "field_site_image" : "",
//                                                                  "field_mt_category" : ""
//                                                                  }
//                                                                  }
//                                                                  ];
                                             
                                             $.each(/*mockDataNodes*/ data.nodes,
                                                    
                                                    function(index, object) {
                                                    
                                                    // Render a nearby location, and add it to the item list.
                                                    var row = object.node;
                                                    var image_html = theme('image', { path: row.field_site_image.src });
                                                    var distance =
                                                    row.field_geofield_distance + ' ' +
                                                    drupalgap_format_plural(row.field_geofield_distance, 'mile', 'miles');
                                                    var description =
                                                    '<h2>' + distance + '</h2>' +
                                                    '<p>' + row.title + '</p>' +
                                                    '<p>' + row.field_mt_category + '<p>';
                                                    var link = l(image_html + description, 'node/' + row.nid);
                                                    items.push(link);
                                                    
                                                 
                                                    
                                                    
                                                    
                                             
                                                    
                                                    // Add a marker on the map for the location.
                                                    var locationLatlng = new google.maps.LatLng(row.latitude, row.longitude);
                                                    
                                                    
                                                    var category = row.field_mt_category;
                                                    var fillColor = 'http://maps.google.com/mapfiles/ms/icons/green.png';
                                                    
                                                    switch(category) {
                                                    case "member created non signatory": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
                                                    break;
                                                    }
                                                    case "member created signatory": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/yellow.png';
                                                    break;
                                                    }
                                                    case "agent created non signatory": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/red.png';
                                                    break;
                                                    }
                                                    case "agent created signatory": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/green.png';
                                                    break;
                                                    }
                                                    case "Education": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
                                                    break;
                                                    }
                                                    case "Events": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/green.png';
                                                    break;
                                                    }
                                                    case "Gas & Car": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/red.png';
                                                    break;
                                                    }
                                                    case "Hotel": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/purple.png';
                                                    break;
                                                    }
                                                    case "Medical": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/orange.png';
                                                    break;
                                                    }
                                                    case "Pharmacy": {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/red.png';
                                                    break;
                                                    }
                                                   
                                                    default: {
                                                    fillColor = 'http://maps.google.com/mapfiles/ms/icons/green.png';
                                                    break;
                                                    }
                                                    }
                                                    var marker = new google.maps.Marker({
                                                                                        icon: fillColor,
                                                                                        position: locationLatlng,
                                                                                        map: _map_map,
                                                                                        data: row
                                                                                        });
                                                    
                                                    
                                                    
              
                                                    
                                                    
                                                    
                                                    
                                                    
            
                                                    
                                                    
                    var infoWindow = new google.maps.InfoWindow({
                                                                
                        content:
                                                                
//                                    l("Get Directions", "https://www.google.com/maps/dir//" +
//                                   row.latitude+ "," +row.longitude, {InAppBrowser: true}) +
                                l(row.title, 'node/' + row.nid) + "<br>" + l("Get Directions", "https://www.google.com/maps/dir//" +
                                                            row.latitude+ "," +row.longitude, {InAppBrowser: true})
                                                                                                });
                                                    google.maps.event.addListener(marker, 'click',
                                                                                  
                                                                                  function () {
                                                                                  infoWindow.open(_map_map, marker);
                                                                                  });
                                                    
                                                    
                                                
//        var infoWindow = new google.maps.InfoWindow({
//            content: l("Get Directions", "https://www.google.com/maps/dir//" +_usermap_user_latitude+ "," +_usermap_user_longitude, {InAppBrowser: true})
//                                                                                                });
                                                    
                                                    
                                                    
                                                    });  // Closing of each
                                             
                                             drupalgap_item_list_populate("#location_results_list", items);
                                             
                                             } //Close of success call back
                                             
                                             }); // Closing of views_datasource call
            

            
        };

        
        
        navigator.geolocation.getCurrentPosition(showMap
                                                 
                                                 ,
                                                 
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
                                                 
                                                 showMap(null);
                                                 
                                                 },
                                                 
                                                 
                                                 
                                                 // Options
                                                 { enableHighAccuracy: true }
                                                 
                                                 );
    
    
    
    
    //PULL TO REFRESH?
        
        // Set aside the thresholds so they can be reset later.
        var _scrollSupressionThreshold = $.event.special.swipe.scrollSupressionThreshold;
        var _horizontalDistanceThreshold = $.event.special.swipe.horizontalDistanceThreshold;
        var _verticalDistanceThreshold = $.event.special.swipe.verticalDistanceThreshold;
        
        // Adjust the thresholds for a vertical swipe.
        $.event.special.swipe.scrollSupressionThreshold = 5;
        $.event.special.swipe.horizontalDistanceThreshold = 1;
        $.event.special.swipe.verticalDistanceThreshold = 128;
        
        // Listen for the swipe event...
        $('#' + drupalgap_get_page_id() + ' div[data-role="header"]').on("swipe", function() {
                                                                         
                                                                         // Reset thresholds.
                                                                         $.event.special.swipe.scrollSupressionThreshold = _scrollSupressionThreshold;
                                                                         $.event.special.swipe.horizontalDistanceThreshold = _horizontalDistanceThreshold;
                                                                         $.event.special.swipe.verticalDistanceThreshold = _verticalDistanceThreshold;
                                                                         
                                                                         // Reload the current page.
                                                                         drupalgap_goto(drupalgap_path_get(), { reloadPage: true });
                                                                         
                                                                         });
    
    
    
    
    
    
    
    }
    catch (error) {
        console.log('map_map_pageshow - ' + error);
    }
}

/**
 * The "Find Nearby Locations" click handler.
 */
//function _map_map_button_click() {
//    try {
//            }
//    catch (error) { console.log('_map_map_button_click - ' + error); }
//}
