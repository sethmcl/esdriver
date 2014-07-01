'use strict';

var getUrl = s.lib('commands', 'getUrl');

describe('getUrl', function () {
  var data;

  before(function () {
    data = getUrl();
  });

  it('should have the correct method', function () {
    s.assert.equal(data.method, 'GET');
  });

  it('should have the correct api url', function () {
    s.assert.equal(data.api, '/session/:sessionId/url');
  });
});
