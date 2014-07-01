'use strict';

/**
 * Create a new session.
 *
 * @see {@link https://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/url|GET /session/:sessionId/url}
 */
module.exports = function () {

  return {
    method: 'GET',

    api: '/session/:sessionId/url'
  };
};

