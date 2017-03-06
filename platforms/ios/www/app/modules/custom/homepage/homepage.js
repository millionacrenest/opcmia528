/**
* Implements hook_menu().
*/
function homepage_menu() {
  var items = {};
  items['homepage'] = {
    title: 'Workers Rights App',
    page_callback: 'homepage_hello_world_page'
  };
  return items;
}

/**
* The callback for the "Hello World" page.
*/
function homepage_hello_world_page() {
  var content = {};
    content.welcome = {
      markup: 
      '<p style="text-align: center;">' +
        t('Washington State Labor Education and Research Center at South Seattle College') +
      '</p>'
    };
	if (drupalgap.settings.logo) {
      content.logo = {
        markup: '<center>' +
                 theme('image', {path: drupalgap.settings.logo}) +
               '</center>'
      };
    }
    content.clock_in = {
      theme: 'button_link',
      text: t('Punch Clock'),
      path: 'node/add/record',
    };
	content.record = {
      theme: 'button_link',
      text: t('Time Card'),
      path: 'articles',
    };
	
	
    content.guide = {
      theme: 'button_link',
      text: t('WA State Workers Rights Manual'),
      path: 'pages',
    };
	
  return content;
}
