VERSION=$(node -p -e "require('./package.json').version")
haxe build.hxml &&
sed "s/xxx/${VERSION}/g" src/utils/__init__.py > dist/python/resin_device/__init__.py &&
sed "s/xxx/${VERSION}/g" src/utils/package.json > dist/nodejs/resin-device/package.json
