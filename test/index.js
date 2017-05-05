var mockserver = require('mockserver-grunt');
var client = require('./client');
var cmd = process.argv[2];

var config = {
  serverPort: process.env.RESIN_SUPERVISOR_PORT || 1080,
  proxyPort: 1090,
  // verbose: true
}

function killMock() {
  mockserver.stop_mockserver(config);
}

switch(cmd) {
  case undefined:
    console.error('You need to specify start/stop cmd');
    break;
  case 'start':
    mockserver.start_mockserver(config).then(client.addExpecations);
    break;
  case 'stop':
    killMock();
    break;
  default:
    console.log('only accepts start/stop')
}

process.on('exit', function() {
  killMock();
});

process.on('uncaughtException', function() {
  killMock();
});
