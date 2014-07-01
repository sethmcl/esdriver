'use strict';

module.exports = Capabilities;

function Capabilities() {}

/**
 * Browser name. Should be one of the following:
 *
 *  'chrome'
 *  'firefox'
 *  'htmlunit'
 *  'internet explorer'
 *  'iphone'
 *
 * @property {string} browserName
 * @default
 */
Capabilities.prototype.browserName = 'firefox';

/**
 * Browser version
 * @property {string} version
 * @default
 */
Capabilities.prototype.version = '';

/**
 * Platform. Should be one of the following:
 *
 * 'ANY'
 * 'WINDOWS'
 * 'XP'
 * 'VISTA'
 * 'MAC'
 * 'LINUX'
 * 'UNIX'
 *
 * @property {string} platform
 * @default
 */
Capabilities.prototype.platform = 'ANY';

/**
 * Whether the session supports executing user
 * supplied JavaScript in the context of the
 * current page.
 *
 * @property {boolean} javascriptEnabled
 * @default
 */
Capabilities.prototype.javascriptEnabled = true;

/**
 * Whether the session supports taking screenshots
 * of the current page.
 *
 * @property {boolean} takesScreenshot
 * @default
 */
Capabilities.prototype.takesScreenshot = true;

/**
 * Whether the session can interact with modal popups,
 * such as window.alert and window.confirm.
 *
 * @property {boolean} handlesAlert
 * @default
 */
Capabilities.prototype.handlesAlerts = true;

/**
 * Whether the session can interact database storage.
 *
 * @property {boolean} databaseEnabled
 * @default
 */
Capabilities.prototype.databaseEnabled = true;

/**
 * Whether the session can set and query the
 * browser's location context.
 *
 * @property {boolean} locationContextEnabled
 * @default
 */
Capabilities.prototype.locationContextEnabled = true;

/**
 * Whether the session can interact with the
 * application cache.
 *
 * @property {boolean} applicationCacheEnabled
 * @default
 */
Capabilities.prototype.applicationCacheEnabled = true;

/**
 * Whether the session can query for the browser's
 * connectivity and disable it if desired.
 *
 * @property {boolean} browserConnectionEnabled
 * @default
 */
Capabilities.prototype.browserConnectionEnabled = true;

/**
 * Whether the session supports CSS selectors
 * when searching for elements.
 *
 * @property {boolean} cssSelectorsEnabled
 * @default
 */
Capabilities.prototype.cssSelectorsEnabled = true;

/**
 * Whether the session supports interactions
 * with storage objects.
 *
 * @property {boolean} webStorageEnabled
 * @default
 * @see {@link http://www.w3.org/TR/2009/WD-webstorage-20091029/|W3C Spec}
 */
Capabilities.prototype.webStorageEnabled = true;

/**
 * Whether the session can rotate the current
 * page's current layout between portrait and
 * landscape orientations (only applies to
 * mobile platforms).
 *
 * @property {boolean} rotatable
 * @default
 */
Capabilities.prototype.rotatable = true;

/**
 * Whether the session should accept all SSL
 * certs by default.
 *
 * @property {boolean} acceptSslCerts
 * @default
 */
Capabilities.prototype.acceptSslCerts = true;

/**
 * Whether the session is capable of generating
 * native events when simulating user input.
 *
 * @property {boolean} nativeEvents
 * @default
 */
Capabilities.prototype.nativeEvents = true;

/**
 * Details of any proxy to use. If no proxy is
 * specified, whatever the system's current or
 * default state is used. 
 *
 * @property {object} proxy
 * @default
 * @see {@link https://code.google.com/p/selenium/wiki/JsonWireProtocol#Proxy_JSON_Object|Proxy JSON Object}
 */
Capabilities.prototype.proxy = null;

/**
 * Convert this object to JSON
 * @returns {string} JSON string
 */
Capabilities.prototype.data = function () {
  var retVal = {};

  Object
    .keys(Capabilities.prototype)
    .filter(function (key) {
      return key !== 'data';
    })
    .forEach(function (key) {
      retVal[key] = this[key];
    }, this);

  return retVal;
};


