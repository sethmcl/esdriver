'use strict';

/**
 * Query server status
 *
 * @see {@link https://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/status|GET /status}
 */
module.exports = function () {
  return {
    method: 'GET',
    api: '/status'
  };
};

