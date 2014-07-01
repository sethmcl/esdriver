module.exports = {
  ok: function (options, cb) {
    cb(null, 'foo', 'bar');
  },

  error: function (options, cb) {
    cb('some error', 'foo', 'bar');
  }

};

s.spy(module.exports, 'ok');
s.spy(module.exports, 'error');
