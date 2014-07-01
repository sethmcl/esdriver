'use strict';

/**
 * Create a new session.
 *
 * @param {string} url
 * @see {@link https://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/url|POST /session/:sessionId/url}
 */
module.exports = function (url) {
  return {
    body: {url: url},

    method: 'POST',

    api: '/session/:sessionId/url'
  };
};

