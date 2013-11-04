var youtubePlayerElement = 'undefined' == typeof window
  ? require('..')
  : require('youtube-player-element'); // how to do this better?

var assert = require('assert');

describe('youtubePlayerElement', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
