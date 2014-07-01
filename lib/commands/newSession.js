'use strict';

var Capabilities = require('../Capabilities');

/**
 * Create a new session.
 *
 * @param {Capabilities} [desiredCaps]
 * @param {Capabilities} [requiredCaps]
 * @see {@link https://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session|POST /session}
 */
module.exports = function (desiredCaps, requiredCaps) {
  desiredCaps  = desiredCaps || new Capabilities().data();
  requiredCaps = requiredCaps || {};

  return {
    body: {
      desiredCapabilities: desiredCaps,
      requiredCapabilities: requiredCaps
    },

    method: 'POST',

    api: '/session'
  };
};

