var mockserver = require('mockserver-grunt');
var cmd = process.argv[2];
var port = process.env.RESIN_SUPERVISOR_ADDRESS.split(':')[2]

var mockServerClient = require('mockserver-client').mockServerClient,
    expectations = require('./expectations');

function addExpecations() {
  expectations.map(expectation => {
    mockServerClient("127.0.0.1", port).mockAnyResponse(expectation);
  });
};

var config = {
  host: "127.0.0.1",
  serverPort: port,
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
    mockserver.start_mockserver(config).then(addExpecations);
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
