package resin;

#if js
  import js.Promise;
#end

@:keep // <-- Avoid dead code elimination stripping this class away
@:expose('Supervisor')
class Supervisor {
  var port:String;
  var apiKey:String;
  var baseUrl:String;
  var query:String;

  public function new() {
    this.port = Sys.getEnv('RESIN_SUPERVISOR_PORT');
    this.apiKey = Sys.getEnv('RESIN_SUPERVISOR_API_KEY');
    this.baseUrl = 'http://localhost:$port/v1';
  }

  function request(url, ?method: Bool = false, ?body:Dynamic):Dynamic {
    var r = new haxe.Http('$baseUrl$url?apiKey=$apiKey');

    if (method) {
      trace(Reflect.isObject(body));
      if (body) {
        r.setPostData(haxe.Json.stringify(body));
      } else {
        // need for nodejs post requests (can't be undefined)
        r.setPostData('');
      }
    }

    #if js
      return new Promise(function(resolve, reject) {
        r.onData = function (data) {
          if (data.length == 0) {
            resolve(data);
          } else {
            resolve(haxe.Json.parse(data));
          }
        };

        r.onError = function (e) {
          trace("ERROR", e);
          reject(e);
        };

        r.request(method);
      });
    #else
      var returnedData = null;
      var returnedError = null;
      r.onData = function (data) {
        if (data.length == 0) {
          returnedData = data;
        } else {
          returnedData = haxe.Json.parse(data);
        }
      };

      r.onError = function (e) {
        trace("ERROR", e);
      };

      r.request(method);

      return returnedData;
    #end
  }

  public function ping() {
    return request('/ping');
  }

  public function device() {
    return request('/device');
  }

  public function blink() {
    return request('/blink', true);
  }

  public function reboot() {
    return request('/reboot', true);
  }

  public function shutdown() {
    return request('/shutdown', true);
  }

  public function update(?force: Bool = false) {
    var body:Body = {
      force: force
    }
    return request('/update', true, body);
  }

  public function purge(id) {
    var body:Body = {
      appId: id
    }
    return request('/purge', true, body);
  }

  public function restart(id) {
    var body:Body = {
      appId: id
    }
    return request('/restart', true, body);
  }

  public function tcpEnable() {
    return request('/tcp-ping', true);
  }

  public function app(id: String) {
    return request('/apps/$id');
  }

  public function start(id: String) {
    return request('/apps/$id/start', true);
  }

  public function stop(id: String) {
    return request('/apps/$id/stop', true);
  }
}

typedef Body = {
  ?force: Bool,
  ?appId: String
};
