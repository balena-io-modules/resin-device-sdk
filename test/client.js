var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient,
    expectations = require('./expectations');

function addExpecations() {
  expectations.map(expectation => {
    mockServerClient("localhost", process.env.RESIN_SUPERVISOR_PORT || 1080).mockAnyResponse(expectation);
  });
};

module.exports = {
  addExpecations: addExpecations
}
