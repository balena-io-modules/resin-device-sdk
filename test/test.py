from os import sys, path
# __file__ should be defined in this case
PARENT_DIR = path.dirname(path.dirname(path.abspath(__file__)))
sys.path.append(PARENT_DIR + '/dist/python')
import os

from resin_device_sdk import Supervisor

APP_ID = os.environ['RESIN_APP_ID']
supervisor = Supervisor()

class TestSupervisor():
    def test_ping(self):
        assert supervisor.ping() == "OK"

    def test_blink(self):
        assert supervisor.blink() == "OK"

    def test_restart(self):
        assert supervisor.restart(APP_ID) == "OK"

    def test_device(self):
        assert supervisor.device().ip_address == "192.168.0.114 10.42.0.3"

    def test_reboot(self):
        assert supervisor.reboot().Data == "OK"

    def test_shutdown(self):
        assert supervisor.shutdown().Data == "OK"

    def test_purge(self):
        assert supervisor.purge(APP_ID).Data == "OK"

    def test_tcpEnable(self):
        assert supervisor.tcpEnable() == ""

    def test_apps(self):
        assert supervisor.app(APP_ID).commit == "414e65cd378a69a96f403b75f14b40b55856f860"

    def test_stop(self):
        assert supervisor.stop(APP_ID).containerId == "5f4d4a857742e9ecac505ba5710834d3852ad7d71e10389fc6f61d8655a21806"

    def test_start(self):
        assert supervisor.start(APP_ID).containerId == "5f4d4a857742e9ecac505ba5710834d3852ad7d71e10389fc6f61d8655a21806"

    def test_update(self):
        assert supervisor.update(True) == ""

    def test_regenerateApiKey(self):
        assert supervisor.regenerateApiKey() == "5678a"

    def test_updateApiKey(self):
        assert supervisor.apiKey == "5678a"
