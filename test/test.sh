# node test/mock-server/index.js &
export RESIN_SUPERVISOR_PORT=1080
export RESIN_SUPERVISOR_API_KEY=1234
echo "NODE" &&
node test/test.js &&
echo "PYTHON" &&
python3 test/test.py
