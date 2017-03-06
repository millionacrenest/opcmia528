/**
 * Implements hook_menu().
 */
function biggerButtons_menu() {
    try {
        var items = {};
        items['my-trip/%'] = {
        title: 'Before',
        page_callback: 'biggerButtons_trip_before_page',
        page_arguments: [1]
        };
        items['my-trip/%/before'] = {
        type: 'MENU_DEFAULT_LOCAL_TASK',
        title: 'Before'
        };
        items['my-trip/%/during'] = {
        type: 'MENU_LOCAL_TASK',
        title: 'During',
        page_callback: 'biggerButtons_trip_during_page',
        page_arguments: [1]
        };
        items['my-trip/%/after'] = {
        type: 'MENU_LOCAL_TASK',
        title: 'After',
        page_callback: 'biggerButtons_trip_after_page',
        page_arguments: [1]
        };
        return items;
    }
    catch (error) {
        console.log('biggerButtons_menu - ' + error);
    }
}

/**
 *
 */
function biggerButtons_trip_before_page(id) {
    try {
        var content = {};
        content['before_intro'] = {
        markup: '<p>Before intro...</p>'
        };
        return content;
    }
    catch (error) { console.log('biggerButtons_trip_before_page - ' + error); }
}

/**
 *
 */
function biggerButtons_trip_during_page(id) {
    try {
        var content = {};
        content['during_intro'] = {
        markup: '<p>During intro...</p>'
        };
        return content;
    }
    catch (error) { console.log('biggerButtons_trip_during_page - ' + error); }
}

/**
 *
 */
function biggerButtons_trip_after_page(id) {
    try {
        var content = {};
        content['after_intro'] = {
        markup: '<p>After intro...</p>'
        };
        return content;
    }
    catch (error) { console.log('biggerButtons_trip_after_page - ' + error); }
}