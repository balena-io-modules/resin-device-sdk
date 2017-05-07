## resin.io device SDK

[![Build Status](https://travis-ci.org/resin-io-modules/resin-device-sdk.svg?branch=master)](https://travis-ci.org/resin-io-modules/resin-device-sdk)

This is a [resin-device-sdk](https://docs.resin.io/runtime/supervisor-api) implemented with [HAXE](https://haxe.org/). It currently compiles to `nodejs` & `python 3` and works on a resin device where the correct environment variables are present.

Example usage:

### Nodejs

``` javascript
const resin = require('resin-device-sdk');
const supervisor = new resin.Supervisor();

supervisor.device().then(device => {
  console.log({ device });
});
```

[Read the tests for more nodejs examples](/test/test.js)

### Python

``` python
from resin_device_sdk import Supervisor

supervisor = Supervisor()
print ('device', supervisor.device())
```

[Read the tests for more python examples](/test/test.py)

### More languages?

Theoretically this library should be able to compile to all [Haxe targets](https://haxe.org/documentation/introduction/compiler-targets.html). If you'd like a new target create an issue/PR. 💥

## Methods
- [x] [.ping()](https://docs.resin.io/runtime/supervisor-api/#get-ping)
- [x] [.blink()](https://docs.resin.io/runtime/supervisor-api/#post-v1-blink)
- [x] [.update(force:Bool)](https://docs.resin.io/runtime/supervisor-api/#post-v1-update)
- [x] [.device()](https://docs.resin.io/runtime/supervisor-api/#get-v1-device)
- [x] [.reboot()](https://docs.resin.io/runtime/supervisor-api/#post-v1-reboot)
- [x] [.shutdown()](https://docs.resin.io/runtime/supervisor-api/#post-v1-shutdown)
- [x] [.restart(id:String)](https://docs.resin.io/runtime/supervisor-api/#post-v1-restart)
- [x] [.purge(id:String)](https://docs.resin.io/runtime/supervisor-api/#post-v1-purge)
- [x] [.tcpEnable()](https://docs.resin.io/runtime/supervisor-api/#post-v1-tcp-ping)
- [ ] [.tcpDisable()](https://docs.resin.io/runtime/supervisor-api/#delete-v1-tcp-ping)
- [x] [.app(id:String)](https://docs.resin.io/runtime/supervisor-api/#get-v1-apps-appid)
- [x] [.start(id:String)](https://docs.resin.io/runtime/supervisor-api/#post-v1-apps-appid-start)
- [x] [.stop(id:String)](https://docs.resin.io/runtime/supervisor-api/#post-v1-apps-appid-stop)
- [x] [.regenerateApiKey()](https://docs.resin.io/runtime/supervisor-api/#post-v1-regenerate-api-key)
