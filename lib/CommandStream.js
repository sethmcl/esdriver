var request  = require('request');
var through2 = require('through2');

module.exports = CommandStream;

function CommandStream() {
  this.stream = through2.obj(this.process.bind(this));
}

CommandStream.prototype.write = function () {
  return this.stream.write.apply(this.stream, arguments);
};

CommandStream.prototype.process = function (chunk, enc, callback) {
  this.makeRequest(chunk).then(function (result) {
    var body;

    try {
      body = JSON.parse(result.body);
    } catch (e) {
      // log unable to parse
    }

    chunk.resolve(body);
    callback();
  }, function(err) {
    chunk.reject(err);
    console.error('process error: ', err);
    callback();
  });
};

/**
 * Send HTTP request
 * @param {object} data
 * @returns {Promise}
 */
CommandStream.prototype.makeRequest = function (data) {
  try {
    data.body = JSON.stringify(data.body);
  } catch (e) {
    data.body = '';
  }

  return new Promise(function (resolve, reject) {
    request(data, function (err, res, body) {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        res: res,
        body: body
      });
    });
  });
};
