/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = false;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/

/* DRUPAL PATHS */
 
// Site Path (do not use a trailing slash)
Drupal.settings.site_path = 'https://www.opcmialocal528.com'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* CACHING AND PERFORMANCE */

// Entity Caching
Drupal.settings.cache.entity = {

  /* Globals (will be used if not overwritten below) */
  enabled: true,
  expiration: 60, // # of seconds to cache, set to 0 to cache forever

  /* Entity types */
  entity_types: {

    /* Comments */
    /*comment: {
     bundles: {}
     },*/

    /* Files */
    /*file: {
     bundles: {}
     },*/

    // Nodes
    node: {

      // Node Globals (will be used if not overwritten below)
      enabled: true,
      expiration: 120,

      // Content types (aka bundles)
      bundles: {

        article: {
          expiration: 3600
        },
        page: {
          enabled: false
        }

      }
    },
      

    /* Terms */
    /*taxonomy_term: {
     bundles: {}
     },*/

    /* Vocabularies */
    /*taxonomy_vocabulary: {
     bundles: {}
     },*/

    /* Users */
    /*user: {
     bundles: {}
     }*/

  }

};

/* Views Caching */

Drupal.settings.cache.views = {
  enabled: true,
  expiration: 3600
};

/*********************|
 * DrupalGap Settings |
 *********************/

// DrupalGap Mode (defaults to 'web-app')
//  'web-app' - use this mode to build a web application for a browser window
//  'phonegap' - use this mode to build a mobile application with phonegap
drupalgap.settings.mode = 'phonegap';

// Language Files - locale/[language-code].json
drupalgap.settings.locale = {
en: { }

};

/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'OPCMIA LOCAL 528';
 
// App Front Page
drupalgap.settings.front = 'messages_images';

// Theme
drupalgap.settings.theme = 'easystreet3';

// Logo
drupalgap.settings.logo = 'themes/easystreet3/images/drupalgap.jpg';

// Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = 'No connection found!';

// Exit app message.
drupalgap.settings.exit_message = 'Exit ' + drupalgap.settings.title + '?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: 'Loading...',
    textVisible: true,
    theme: 'b'
  },
  saving: {
    text: 'Saving...',
    textVisible: true,
    theme: 'b'
  },
  deleting: {
    text: 'Deleting...',
    textVisible: true,
    theme: 'b'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

Drupal.modules.contrib['geofield'] = {};
Drupal.modules.contrib['push_notifications'] = {};
Drupal.modules.contrib['entityreference'] = {};
Drupal.modules.contrib['date'] = {};
Drupal.modules.contrib['telephone'] = {};
Drupal.modules.contrib['link'] = {};
Drupal.modules.contrib['pathfix'] = {};
Drupal.modules.contrib['privatemsg'] = {};
Drupal.modules.contrib['force_authentication'] = {};
//Drupal.modules.contrib['video_embed_field'] = {};
//Drupal.modules.contrib['webform'] = {};
//Drupal.modules.contrib['views_infinite_scroll'] = {};


/** Custom Modules - www/app/modules/custom **/


Drupal.modules.custom['email'] = {};
Drupal.modules.custom['map'] = {};
Drupal.modules.custom['myContacts'] = {};
Drupal.modules.custom['contacts'] = {};
Drupal.modules.custom['info'] = {};
Drupal.modules.custom['dailynotes'] = {};
Drupal.modules.custom['contracts'] = {};
Drupal.modules.custom['headline'] = {};
Drupal.modules.custom['sendPush'] = {};
Drupal.modules.custom['messages'] = {};
Drupal.modules.custom['contractorsContact'] = {};
Drupal.modules.custom['login'] = {};
Drupal.modules.custom['notitle'] = {};
Drupal.modules.custom['filterMap'] = {};


/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'Login',
      path: 'user/login',
      options: {
        attributes: {
          'data-icon': 'lock',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    },
//    {
//      title: 'Create new account',
//      path: 'user/register',
//      options: {
//        attributes: {
//          'data-icon': 'plus'
//        }
//      }
//    }
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
options: menu_popup_get_default_options(),
links: [
        {
        title: 'My Account',
        path: 'user',
        options: {
        attributes: {
        'data-icon': 'user',
        'class': 'ui-btn ui-btn-icon-right'
        }
        }
        },
        
        //          {
        //          title: 'Job Sites',
        //          path: 'map',
        //          options: {
        //          attributes: {
        //          'data-icon': 'star',
        //          'class': 'ui-btn ui-btn-icon-right'
        //          }
        //          }
        //          },
        
        {
        title: 'Logout',
        path: 'user/logout',
        options: {
        attributes: {
        'data-icon': 'delete'
        }
        }
        }
        ]
};

// User Menu Agent
//drupalgap.settings.menus['user_menu_Agent'] = {
//options: menu_popup_get_default_options(),
//links: [
//        {
//        title: 'My Account',
//        path: 'user',
//        options: {
//        attributes: {
//        'data-icon': 'user',
//        'class': 'ui-btn ui-btn-icon-right'
//        }
//        }
//        },
//        {
//        title: 'Agent Map',
//        path: 'map',
//        options: {
//        attributes: {
//        'data-icon': 'star',
//        'class': 'ui-btn ui-btn-icon-right'
//        }
//        }
//        },
//
//        {
//        title: 'Logout',
//        path: 'user/logout',
//        options: {
//        attributes: {
//        'data-icon': 'delete'
//        }
//        }
//        }
//        ]
//};




// Main Menu
drupalgap.settings.menus['main_menu'] = {
options: menu_popup_get_default_options(),
links: [
        
    /* Contacts Button */
        {
        title: 'Contacts',
        path: 'contacts_images',
        options: {
        attributes: {
        'data-icon': 'phone',
        'data-iconpos': 'notext',
        'class': 'ui-btn-left'
        }
        }
        },
    /* Tags Button */
        //          {
        //                title:'Tags',
        //                path:'taxonomy/vocabularies',
        //                options:{
        //                  attributes:{
        //                    'data-icon':'grid',
        //          'data-iconpos': 'notext',
        //          'class': 'ui-btn-left'
        //                  }
        //                }
        //              },
        
    /* Info Button */
        {
        title: 'Info',
        path: 'info',
        options: {
        attributes: {
        'data-icon': 'info',
        'data-iconpos': 'notext',
        'class': 'ui-btn-left'
        }
        }
        },
    /* Calendar Button */
        {
        title: 'Events',
        path: 'events',
        options: {
        attributes: {
        'data-icon': 'calendar',
        'data-iconpos': 'notext',
        'class': 'ui-btn-right'
        }
        }
        },
    /* Daily Notes Button */
        {
        title: 'Notes',
        path: 'daily_notes',
        options: {
        attributes: {
        'data-icon': 'edit',
        'data-iconpos': 'notext',
        'class': 'ui-btn-right'
        }
        }
        }
    /* Contracts Button */
        //          {
        //          title: 'Contracts',
        //          path: 'contracts',
        //          options: {
        //          attributes: {
        //          'data-icon': 'star',
        //          'data-iconpos': 'notext',
        //          'class': 'ui-btn-right'
        //          }
        //          }
        //          }
        
        
        
        
        
        
        ////    {
        ////      title:'Content',
        ////      path:'node',
        ////      options:{
        ////        attributes: {
        ////          'data-icon': 'star',
        ////          'class': 'ui-btn ui-btn-icon-right'
        ////        }
        ////      }
        ////    },
        //    {
        //      title:'Tags',
        //      path:'taxonomy/vocabularies',
        //      options:{
        //        attributes:{
        //          'data-icon':'grid'
        //        }
        //      }
        //    },
        //    {
        //      title:'Agent Map',
        //      path:'users',
        //      options:{
        //        attributes:{
        //          'data-icon':'info'
        //        }
        //      }
        //    },
        //          {
        //          title:'Agent Contacts',
        //          path:'User_agents',
        //          options:{
        //          attributes:{
        //          'data-icon':'info'
        //          }
        //          }
        //          },
        //          {
        //          title:'Contacts',
        //          path:'contacts_images',
        //          options:{
        //          attributes:{
        //          'data-icon':'info'
        //          }
        //          }
        //          }
        //
        //
        //
        //
        ////          {
        ////          title:'Add Event',
        ////          path:'node/add/event',
        ////          options:{
        ////          attributes:{
        ////          'data-icon':'info'
        ////          }
        ////          }
        ////          }
        //
        //
        ////          {
        ////
        ////          title:'Notifications',
        ////
        ////          path:'mobile-notifications',
        ////
        ////          options:{
        ////
        ////          reloadPage:true,
        ////
        ////          attributes:{
        ////
        ////          'data-icon':'info'
        ////
        ////          }
        ////
        ////          }
        ////
        ////          }
        ]
};
//
// Agent Role Menu
//drupalgap.settings.menus['user_menu_agent'] = {
//options: menu_popup_get_default_options(),
//links: [
//        {
//        title: 'My Contacts',
//        path: 'contacts_images',
//        options: {
//        attributes: {
//        'data-icon': 'user',
//        'class': 'ui-btn ui-btn-icon-right'
//        }
//        }
//        },
//        {
//        title: 'Agent Map',
//        path: 'users',
//        options: {
//        attributes: {
//        'data-icon': 'delete'
//        }
//        }
//        }
//        ]
//};

drupalgap.settings.menus['agent_menu'] = {
links:[
       {
       title: 'Message',
       path: 'messages_images',
       options: {
       attributes: {
       'data-icon': 'star'
       }
       }
       
       },
       
       {
       title: 'Info',
       path: 'info',
       options: {
       attributes: {
       'data-icon': 'search'
       }
       }
       
       },
       {
       title: 'Daily Notes',
       path: 'daily_notes',
       options: {
       attributes: {
       'data-icon': 'plus'
       }
       }
       
       }
       
       
       
       //       {
       //       title: 'ser',
       //       path: 'user',
       //       options: {
       //       attributes: {
       //       'data-icon': 'user'
       //       }
       //       }
       //
       //       }
       //
       ]
};

drupalgap.settings.menus['my_menu'] = {
links:[
       
       {
       title: 'Info',
       path: 'info',
       options: {
       attributes: {
       'data-icon': 'info'
       }
       }
       
       },
       
       {
       title: 'Map',
       path: 'map',
       options: {
       attributes: {
       'data-icon': 'location'
       }
       }
       
       },
       //       {
       //       title: 'Mail',
       //       path: 'messages_images',
       //       options: {
       //       attributes: {
       //       'data-icon': 'mail'
       //       }
       //       }
       //
       //       },
       
       
       {
       title: 'Notes',
       path: 'daily_notes',
       options: {
       attributes: {
       'data-icon': 'edit'
       }
       }
       
       }
       ]
};

//drupalgap.settings.menus['my_footer_menu'] = {
//links:[
//       {
//       title: 'Message',
//       path: '<<MAKE ONE>>',
//       options: {
//       attributes: {
//       'data-icon': 'mail'
//       }
//       }
//
//       },
//       {
//       title: 'Post',
//       path: 'agentDashboard',
//       options: {
//       attributes: {
//       'data-icon': 'plus'
//       }
//       }
//
//       },
//       {
//       title: 'info',
//       path: 'info',
//       options: {
//       attributes: {
//       'data-icon': 'grid'
//       }
//       }
//
//       }
//       ]
//};


/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
header: {
user_menu_anonymous: {
roles: {
value: ['anonymous user'],
mode: 'include',
}
},
user_menu_authenticated: {
roles: {
value: ['authenticated user'],
mode: 'include',
}
},
    //    user_menu_Agent: {
    //        roles: {
    //            value: ['Agent user'],
    //            mode: 'include',
    //            }
    //    },
    //main_menu: { }
headline_block:{},
    
},
sub_header: {
    
},
navigation: {
    
    
    
    
    
    
    
    // title: { },
    
    /* My Custom Block */
my_menu:{
roles: {
value: ['authenticated user'],
mode: 'include',
}
    
},
    
    
    
primary_local_tasks: {
    
    //
    //    search: {
    //    pages: {
    //    value: ['info'],
    //    mode: 'include'
    //    }
    //    },
    
    
    
}
    
    
},
content: {
    
//search: {
//pages: {
//value: ['contracts'],
//mode: 'include',
//text: 'Search Labor Agreements'
//}
//},
    
messages: {},
    
    
    
    
    
    
main: {
    
    
    
    
},
    
    
    
    //   - `comment/%`, `comment/%/view`, `comment/%/edit`
    
    //  comments: {
    //  pages: {
    //  value: [],
    //  mode: 'include'
    //  }
    //  },
    
    
    
},
footer: {
    
    //    powered_by: { }
    //      user_menu_agent: {
    //
    //      roles: {
    //      value: ['Agent'],
    //      mode: 'include',
    //      }
    //      }
}
};




/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
links:[
       //    /* Main Menu Popup Menu Button */
       ////    {
       ////
       ////
       ////         options: {
       ////        popup: true,
       ////        popup_delta: 'main_menu',
       ////        attributes: {
       ////          'class': 'ui-btn-left',
       ////          'data-icon': 'plus'
       ////        }
       ////      }
       ////    },
       //    /* Home Button */
       //    {
       //      title: 'Home',
       //         path: '',
       //      options: {
       //        attributes: {
       //          'data-icon': 'home',
       ////          'data-iconpos': 'notext',
       //          'class': 'ui-btn-left'
       //        }
       //      },
       //      pages: {
       //        value: [''],
       //        mode: 'exclude'
       //      }
       //    },
       ////         /* Agent Dashboard Button */
       ////         {
       ////         title: 'Add',
       ////         path: 'agentDashboard',
       ////         options: {
       ////         attributes: {
       ////         'data-icon': 'plus',
       ////         //          'data-iconpos': 'notext',
       ////         'class': 'ui-btn-right'
       ////         }
       ////         },
       ////         //         pages: {
       ////         //         value: [''],
       ////         //         mode: 'include'
       ////         //         }
       ////         },
       //    /* Anonymous User Popup Menu Button */
       //    {
       //      title: 'User',
       //         options: {
       //        popup: true,
       //        popup_delta: 'user_menu_anonymous',
       //        attributes: {
       //          'class': 'ui-btn-left',
       //          'data-icon': 'user'
       //        }
       //      },
       //      roles: {
       //        value: ['anonymous user'],
       //        mode: 'include',
       //      }
       //    },
       //    /* Authenticated User Popup Menu Button */
       //    {
       //      title: 'User',
       //         options: {
       //        popup: true,
       //        popup_delta: 'user_menu_authenticated',
       //        attributes: {
       //          'class': 'ui-btn-left',
       //          'data-icon': 'user'
       //        }
       //      },
       //      roles: {
       //        value: ['authenticated user'],
       //        mode: 'include',
       //      }
       //    },
       //
       //
       //         /* Home Button */
       //         {
       //         title: 'Home',
       //         path: '',
       //         options: {
       //         attributes: {
       //         'data-icon': 'home',
       //         //          'data-iconpos': 'notext',
       //         'class': 'ui-btn-left'
       //         }
       //         },
       //         pages: {
       //         value: [''],
       //         mode: 'exclude'
       //         }
       //         }
       //
       //         /* Back Button */
       //         {
       //         title: 'Back',
       //         options: {
       //         attributes: {
       //         'data-icon': 'back',
       //       // 'data-iconpos': 'notext',
       //         'class': 'ui-btn-right',
       //         'onclick': 'javascript:drupalgap_back();'
       //         }
       //         },
       //         pages: {
       //         value: [''],
       //         mode: 'exclude'
       //         }
       //         }
       //           Dashboard Button
       //         {
       //         title: 'Dashboard',
       //         path: 'agentDashboard',
       //         options: {
       //         attributes: {
       //         'data-icon': 'grid',
       //         // 'data-iconpos': 'notext',
       //         'class': 'ui-btn-right'
       //         }
       //         }
       //         }
       ]
};

//drupalgap.settings.menus.regions['navigation'] = {
//links: [
//
///* ... other region links ... */
//{
//title: 'Add',
//path: 'node/add',
//options: {
//attributes: {
//    'data-icon': 'plus',
//    'class': 'ui-btn-right'
//}
//},
//pages: {
//value: ['agentDashboard'],
//mode: 'include'
//}
//}
//
//]
//};

drupalgap.settings.menus.regions['footer'] = {
links:[
       /* Main Menu Popup Menu Button */
       //    {
       //
       //
       //         options: {
       //        popup: true,
       //        popup_delta: 'main_menu',
       //        attributes: {
       //          'class': 'ui-btn-left',
       //          'data-icon': 'plus'
       //        }
       //      }
       //    },
       //       /* Home Button */
       //       {
       //       title: 'Home',
       //       path: '',
       //       options: {
       //       attributes: {
       //       'data-icon': 'home',
       //       //          'data-iconpos': 'notext',
       //       'class': 'ui-btn-left'
       //       }
       //       },
       //       pages: {
       //       value: [''],
       //       mode: 'exclude'
       //       }
       //       },
       //         /* Agent Dashboard Button */
       //         {
       //         title: 'Add',
       //         path: 'agentDashboard',
       //         options: {
       //         attributes: {
       //         'data-icon': 'plus',
       //         //          'data-iconpos': 'notext',
       //         'class': 'ui-btn-right'
       //         }
       //         },
       //         //         pages: {
       //         //         value: [''],
       //         //         mode: 'include'
       //         //         }
       //         },
       
       /* Home Button */
       {
       title: 'Home',
       path: '',
       options: {
       attributes: {
       'data-icon': 'home',
       //          'data-iconpos': 'notext',
       'class': 'ui-btn-left'
       }
       },
       pages: {
       value: [''],
       mode: 'exclude'
       }
       },
       
       
       /* Anonymous User Popup Menu Button */
       {
       title: 'User',
       options: {
       popup: true,
       popup_delta: 'user_menu_anonymous',
       attributes: {
       'class': 'ui-btn-left',
       'data-icon': 'user'
       }
       },
       roles: {
       value: ['anonymous user'],
       mode: 'include',
       }
       },
       /* Authenticated User Popup Menu Button */
       {
       title: 'User',
       options: {
       popup: true,
       popup_delta: 'user_menu_authenticated',
       attributes: {
       'class': 'ui-btn-left',
       'data-icon': 'user'
       }
       },
       roles: {
       value: ['authenticated user'],
       mode: 'include',
       }
       },
       
       /* Back Button */
       {
       title: 'Go Back',
       options: {
       attributes: {
       'data-icon': 'back',
       // 'data-iconpos': 'notext',
       'class': 'ui-btn-right',
       'onclick': 'javascript:drupalgap_back();'
       }
       },
       pages: {
       value: [''],
       mode: 'exclude'
       }
       }
       
       
       
       
       ]
};





/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
quality: 10
};






/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

////push notifications
drupalgap.settings.push_notifications = {
android: {
senderID: "853864091549"
},
ios: {
alert: "true",
badge: "true",
sound: "true"
},
windows: {}
};

