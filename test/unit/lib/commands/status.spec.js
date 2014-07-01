'use strict';

var status = s.lib('commands', 'status');

describe('status', function () {
  var data;

  before(function () {
    data = status();
  });

  it('should have the correct method', function () {
    s.assert.equal(data.method, 'GET');
  });

  it('should have the correct api url', function () {
    s.assert.equal(data.api, '/status');
  });
});
