/**
 * Implements hook_block_info().
 */
function headline_block_info() {
    try {
        var blocks = {};
        blocks['headline_block'] = {
        delta: 'headline_block',
        module: 'headline'
        };
        return blocks;
    }
    catch (error) { console.log('headline_block_info - ' + error); }
}

/**
 * Implements hook_block_view().
 */
function headline_block_view(delta, region) {
    try {
        var content = '';
        if (delta == 'headline_block') {
         
            content = '<h2><center> OPCMIA 528</center></h2>';
        }
        return content;
    }
    catch (error) { console.log('headline_block_view - ' + error); }
}