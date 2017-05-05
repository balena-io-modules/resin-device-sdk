from os import sys, path
# __file__ should be defined in this case
PARENT_DIR = path.dirname(path.dirname(path.abspath(__file__)))
sys.path.append(PARENT_DIR + '/dist/python')

from resin_device import Supervisor

supervisor = Supervisor()

def test():
    assert supervisor.ping() == "OK"
    assert supervisor.blink() == ""
    assert supervisor.restart('12') == "OK"
