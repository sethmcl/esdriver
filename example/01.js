var es = require('..');
var q  = require('q');

var driver = new es.Driver({});

function* run() {

  var status = yield driver.status();

  yield driver.connect();
  console.log('after connect');

  yield driver.loadUrl('http://www.aol.com');
  console.log('after navigate aol');

  var url = yield driver.getUrl();
  console.log('url is', url.value);

  yield driver.loadUrl('http://www.google.com');
  console.log('after navigate google');

}

q.spawn(run);

