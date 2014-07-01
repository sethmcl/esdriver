
module.exports = CommanderMock;

function CommanderMock(config) {
  this.exec = s.spy(this, 'exec');
  this.foo  = s.spy();

  CommanderMock.instance = this;
};

CommanderMock.prototype.exec = function () {
  return new Promise(function (resolve) {
    resolve();
  });
};
