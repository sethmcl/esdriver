'use strict';

var loadUrl = s.lib('commands', 'loadUrl');

describe('loadUrl', function () {
  var data;

  before(function () {
    data = loadUrl('foo.com');
  });

  it('should have the correct method', function () {
    s.assert.equal(data.method, 'POST');
  });

  it('should have the correct api url', function () {
    s.assert.equal(data.api, '/session/:sessionId/url');
  });

  it('should have the correct body', function () {
    s.assert.deepEqual(data.body, { url: 'foo.com' });
  });
});
