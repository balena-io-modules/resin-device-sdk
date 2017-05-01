# node test/mock-server/index.js &
export RESIN_SUPERVISOR_PORT=1080
export RESIN_SUPERVISOR_API_KEY=1234
# until $(curl --output /dev/null http://localhost:1080/ping); do
#     echo 'waiting'
#     printf '.'
#     sleep 1
# done &&
haxe build.hxml &&
echo "NODE" &&
node test/test.js &&
echo "PYTHON" &&
python3 test/test.py
