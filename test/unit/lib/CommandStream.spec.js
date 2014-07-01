'use strict';

var requestMock = s.mock('request.mock');
var CommandStream;

describe('CommandStream', function () {
  var stream;
  var chunk;

  beforeEach(function () {
    chunk = {
      body: 'hello',
      resolve: s.spy(),
      reject: s.spy()
    };
  });

  describe('write', function () {
    beforeEach(function () {
      CommandStream = s.proxy('CommandStream')({
        'request': requestMock.ok
      });

      stream = new CommandStream();

      stream.write(chunk);
    });

    it('should call request', function () {
      s.assert.equal(requestMock.ok.callCount, 1);
    });

    it('should call request with correct args', function () {
      var args = requestMock.ok.args[0][0];

      s.assert.equal(args.body, JSON.stringify('hello'));
    });
  });

  describe('process', function () {
    beforeEach(function () {
      CommandStream = s.proxy('CommandStream')({
        'request': requestMock.error
      });

      stream = new CommandStream();

    });

    it('should execute callback', function (done) {
      chunk.body = chunk;
      stream.process(chunk, null, function () {
        var args = requestMock.error.args[0][0];

        console.log(args.body);
        s.assert.equal(args.body, '');

        done();
      });
    });
  });
});
