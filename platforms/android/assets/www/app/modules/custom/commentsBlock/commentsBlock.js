/**
 * Implements hook_block_info().
 */
function commentsBlock_block_info() {
    try {
        var blocks = {};
        blocks['comments'] = {
        delta: 'comments',
        module: 'commentsBlock'
        };
        return blocks;
    }
    catch (error) { console.log('commentsBlock_block_info - ' + error); }
}

/**
 * Implements hook_block_view().
 */
function commentsBlock_block_view(delta, region) {
    try {
        var content = '';
        if (delta == 'comments') {
            // Show today's date for the block's content.
//            var d = new Date();
//            content = '<h2><center>' + d.toDateString() + '</center></h2>';
            
            //Show comments for the node
           // content = bl('Comments', 'comment/%');
            //, comment/%/view, comment/%/edit
            
//            comment_load(node.nid, {
//                         success: function(comment) {
//                         console.log('Loaded comment #' + comment.cid);
//                         }
//                         });
            
            
            
        }
        return content;
    }
    catch (error) { console.log('commentsBlock_block_view - ' + error); }
}