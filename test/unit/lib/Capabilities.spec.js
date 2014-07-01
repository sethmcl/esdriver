'use strict';

var Capabilities = s.lib('Capabilities');

describe('Capabilities', function () {
  it('should convert to a JSON serializable object', function () {
    var cap   = new Capabilities();
    var obj   = cap.data();
    var error = false;

    try {
      JSON.stringify(obj);
    } catch (e) {
      error = true;
    }

    s.assert.equal(error, false);
  });
});
