'use strict';

var Commander = require('./Commander');

module.exports = Driver;

/**
 * @param {object} config
 * @returns {Proxy}
 */
function Driver(config) {
  var commander = new Commander(config);

  return Proxy.create({
    get: function (target, name) {
      if (commander[name]) {
        return commander[name];
      } else if (this[name]) {
        return this[name];
      } else {
        return commander.exec.bind(commander, name);
      }
    },

    connect: function () {
      return commander.exec('newSession').then(function (data) {
        commander.sessionId = data.sessionId;
      });
    }
  });
}

