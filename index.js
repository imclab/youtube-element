
/**
 * Module dependencies.
 */

var element = require('tower-element');
var youtube = require('youtube-player');

/**
 * Define `<youtube>` tag.
 */

element('youtube')
  .attr('src')
  .attr('width', 'integer')
  .attr('height', 'integer')
  .attr('playlist', 'array')
  .on('render', function(el, scope, attrs){
    var sel = el.getAttribute('id');

    var opts = {
      width: el.getAttribute('width'),
      height: el.getAttribute('height'),
      videoId: el.getAttribute('src')
    };

    youtube(sel, opts, function(){
      
    });
  });

/**
 * Expose `youtube` element.
 */

module.exports = element('youtube');