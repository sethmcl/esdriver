'use strict';

var CommanderMock = s.mock('lib', 'Commander.mock');
var Driver;

describe('Driver', function () {
  var driver;

  beforeEach(function () {
    Driver = s.proxy('Driver')({
      './Commander': CommanderMock
    });

    driver = new Driver();
  });

  describe('proxy command call', function () {
    beforeEach(function () {
      driver.loadPage('foo');
    });

    it('should have called exec once', function () {
      s.assert.equal(CommanderMock.instance.exec.callCount, 1);
    });

    it('should have called exec with correct args', function () {
      s.assert.equal(CommanderMock.instance.exec.args[0][0], 'loadPage');
      s.assert.equal(CommanderMock.instance.exec.args[0][1], 'foo');
    });
  });

  describe('connect', function () {
    beforeEach(function () {
      driver.connect();
    });

    it('should have called exec newSession', function () {
      s.assert.equal(CommanderMock.instance.exec.args[0][0], 'newSession');
    });
  });

  describe('proxy commander method', function () {
    it('should call foo() on commander', function () {
      driver.foo();
      s.assert.equal(CommanderMock.instance.foo.callCount, 1);
    });
  });

});
