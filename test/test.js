const resin = require('../dist/nodejs/resin-device-sdk');
const supervisor = new resin.Supervisor();
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const APP_ID = process.env.RESIN_APP_ID;

describe('Supervisor', function() {
  describe('.ping', function() {
    it('should return OK" on success', function() {
      return expect(supervisor.ping()).to.eventually.equal('OK');
    });
  });

  describe('.restart', function() {
    it('should return "OK" on success', function() {
      return expect(supervisor.restart(APP_ID)).to.eventually.equal('OK');
    });
  });

  describe('.device', function() {
    it('should return device object on success', function() {
      return expect(supervisor.device()).to.eventually.have.property('ip_address');
    });
  });

  describe('.blink', function() {
    it('should return "OK" on success', function() {
      return expect(supervisor.blink()).to.eventually.equal('OK');
    });
  });

  describe('.reboot', function() {
    it('should return object with Data property on success', function() {
      return expect(supervisor.reboot()).to.eventually.have.property('Data');
    });
  });

  describe('.shutdown', function() {
    it('should return object with Data property on success', function() {
      return expect(supervisor.shutdown()).to.eventually.have.property('Data');
    });
  });

  describe('.purge', function() {
    it('should return object with Data property on success', function() {
      return expect(supervisor.purge(APP_ID)).to.eventually.have.property('Data');
    });
  });

  describe('.tcpEnable', function() {
    it('should return empty response on success', function() {
      return expect(supervisor.tcpEnable()).to.eventually.equal('');
    });
  });

  describe('.app', function() {
    it('should return app object on success', function() {
      return expect(supervisor.app(APP_ID)).to.eventually.have.property('commit');
    });
  });

  describe('.start', function() {
    it('should return container object on success', function() {
      return expect(supervisor.start(APP_ID)).to.eventually.have.property('containerId');
    });
  });

  describe('.stop', function() {
    it('should return container object on success', function() {
      return expect(supervisor.stop(APP_ID)).to.eventually.have.property('containerId');
    });
  });

  describe('.update', function() {
    it('should return empty response on success', function() {
      return expect(supervisor.update(true)).to.eventually.equal('');
    });
  });

  describe('.regenerateApiKey', function() {
    it('should return apikey', function() {
      return expect(supervisor.regenerateApiKey()).to.eventually.equal('5678a');
    });

    it('should update the apikey on supervisor instance', function() {
      return expect(supervisor.apiKey).to.equal('5678a');
    });
  });

});
