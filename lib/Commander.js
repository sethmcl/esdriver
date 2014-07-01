'use strict';

var requireDir    = require('require-dir');
var CommandStream = require('./CommandStream');

module.exports = Commander;

/**
 * Execute WebDriver API commands
 * @param {object} config
 */
function Commander(config) {
  this.remote   = config.remote || 'http://127.0.0.1:4444/wd/hub';
  this.stream   = new CommandStream();
  this.commands = requireDir('./commands');
}

/**
 * Execute an api command
 * @returns {Promise}
 */
Commander.prototype.exec = function () {
  var command = arguments[0];
  var args    = Array.prototype.slice.call(arguments, 1);
  var data    = this.commands[command].apply(this.commands[command], args);

  return new Promise(function (resolve, reject) {
    data.url     = [this.remote, data.api].join('');
    data.url     = this.renderUrl(data.url);
    data.resolve = resolve;
    data.reject  = reject;

    this.stream.write(data);
  }.bind(this));
};

/**
 * Generate absolute URL from url template
 * @param {string} urlTemplate
 * @returns {string} absolute url
 */
Commander.prototype.renderUrl = function (urlTemplate) {
  var url = urlTemplate;

  Object.keys(this).forEach(function (key) {
    var value = this[key];

    if (typeof value !== 'string' && typeof value !== 'number') {
      return;
    }

    url = url.replace(':' + key, value);
  }, this);

  return url;
};

/**
 * Assigned by remote
 * @property {string} sessionId
 * @default
 */
Commander.prototype.sessionId = null;
