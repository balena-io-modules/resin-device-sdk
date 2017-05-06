## resin device SDK

This is a [resin-device](https://docs.resin.io/runtime/supervisor-api) SDK implemented with [HAXE](https://haxe.org/). It currently compiles to `nodejs` & `python 3` and works on a resin device where the correct environment variables are present.

Example usage:

### Nodejs

``` javascript
const resin = require('resin-device');
const supervisor = new resin.Supervisor();

supervisor.device().then(device => {
  console.log({ device });
});
```

[Read the tests for more nodejs examples](/test/test.js)

### Python

``` python
from resin_device import Supervisor

supervisor = Supervisor()
print ('device', supervisor.device())
```

[Read the tests for more python examples](/test/test.py)

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
- [ ] [.regenerateApiKey()](https://docs.resin.io/runtime/supervisor-api/#post-v1-regenerate-api-key)
