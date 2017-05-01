var mockserver = require('mockserver-grunt');
var client = require('./client');

mockserver.start_mockserver({
  serverPort: process.env.RESIN_SUPERVISOR_PORT || 1080,
  proxyPort: 1090,
  verbose: true
}).then(client.addExpecations);

module.exports = mockserver;
