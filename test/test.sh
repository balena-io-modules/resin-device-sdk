export RESIN_SUPERVISOR_PORT=1080
export RESIN_SUPERVISOR_API_KEY=1234
node mock-server/index.js start &
while ! echo exit | nc localhost 1080; do sleep 3; done
echo "TESTING NODEJS" &&
mocha &&
echo "TESTING PYTHON" &&
python3 -m pytest test.py
node mock-server/index.js stop
