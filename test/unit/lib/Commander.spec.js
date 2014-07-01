'use strict';

var CommandStreamMock = s.mock('lib', 'CommandStream.mock');
var Commander;

describe('Commander', function () {
  var commander;

  beforeEach(function () {
    Commander = s.proxy('Commander')({
      './CommandStream': CommandStreamMock
    });

    commander = new Commander({
      remote: 'http://wd'
    });
  });

  it('should use default remote', function () {
    Commander = s.proxy('Commander')({
      './CommandStream': CommandStreamMock
    });

    commander = new Commander({});

    s.assert.equal(commander.remote, 'http://127.0.0.1:4444/wd/hub');
  });

  describe('exec', function () {
    beforeEach(function () {
      commander.commands.foo = function (p) {
        return {
          api: '/call/foo/' + p,
          body: 'foobody',
          method: 'PUT'
        }
      };
    });

    it('should write correct command data', function () {
      var data;

      commander.exec('foo', 'hello');

      data = commander.stream.write.args[0][0];

      s.assert.equal(data.url, 'http://wd/call/foo/hello');
      s.assert.equal(data.api, '/call/foo/hello');
      s.assert.equal(data.body, 'foobody');
      s.assert.equal(data.method, 'PUT');
    });
  });

  describe('render url', function () {
    beforeEach(function () {
      commander.sessionId = 'foobar';
    });

    it('should generate correct url', function () {
      var url = commander.renderUrl('/hello/:sessionId');
      s.assert.equal(url, '/hello/foobar');
    });

  });
});
