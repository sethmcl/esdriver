'use strict';

var newSession = s.lib('commands', 'newSession');

describe('newSession', function () {
  var data;

  before(function () {
    data = newSession();
  });

  it('should have the correct method', function () {
    s.assert.equal(data.method, 'POST');
  });

  it('should have the correct api url', function () {
    s.assert.equal(data.api, '/session');
  });

  describe('desiredCaps', function () {
    it('should accept custom caps', function () {
      data = newSession({ browser: 'custom' });
      s.assert.equal(data.body.desiredCapabilities.browser, 'custom');
    });

    it('should use defaults', function () {
      data = newSession();
      s.assert.equal(typeof data.body.desiredCapabilities, 'object');
    });
  });

  describe('requiredCaps', function () {
    it('should accept custom caps', function () {
      data = newSession(null, { browser: 'custom' });
      s.assert.equal(data.body.requiredCapabilities.browser, 'custom');
    });

    it('should use defaults', function () {
      data = newSession();
      s.assert.equal(typeof data.body.requiredCapabilities, 'object');
    });
  });
});
