export RESIN_SUPERVISOR_ADDRESS=http://127.0.0.1:48484
export RESIN_SUPERVISOR_API_KEY=1234
node index.js start &
while ! echo exit | nc localhost 48484; do sleep 3; done
echo "TESTING NODEJS" &&
node ../node_modules/.bin/mocha &&
echo "TESTING PYTHON" &&
python3 -m pytest -s test.py
node index.js stop
