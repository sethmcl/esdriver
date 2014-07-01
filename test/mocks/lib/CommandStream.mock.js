
module.exports = CommandStreamMock;

function CommandStreamMock() {
  this.write = s.spy();
};
