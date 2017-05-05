const resin = require('../dist/nodejs/resin-device');
const supervisor = new resin.Supervisor();
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('Supervisor', function() {
  describe('.ping', function() {
    it('should return "OK" on success', function() {
      return expect(supervisor.ping()).to.eventually.equal('OK');
    });
  });

  describe('.restart', function() {
    it('should return "OK" on success', function() {
      return expect(supervisor.restart('12')).to.eventually.equal('OK');
    });
  });

  describe('.device', function() {
    it('should return device object on success', function() {
      return expect(supervisor.device()).to.eventually.have.property("ip_address");
    });
  });

  describe('.blink', function() {
    it('should return empty body on success', function() {
      return expect(supervisor.blink()).to.eventually.equal('');
    });
  });
});
