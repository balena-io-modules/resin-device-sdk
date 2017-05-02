from os import sys, path
# __file__ should be defined in this case
PARENT_DIR = path.dirname(path.dirname(path.abspath(__file__)))
sys.path.append(PARENT_DIR + '/dist/python/resin')

from resin import resin_Supervisor

supervisor = resin_Supervisor()

print ('ping', supervisor.ping())
print ('device', supervisor.device())
print ('blink', supervisor.blink())

print ('restart', supervisor.restart('12'))
