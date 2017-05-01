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
  var debug:Bool;

  public function new(?opts:Opts) {
    this.port = Sys.getEnv('RESIN_SUPERVISOR_PORT');
    this.apiKey = Sys.getEnv('RESIN_SUPERVISOR_API_KEY');
    this.baseUrl = 'http://localhost:$port/v1';
    this.debug = (opts!=null) ? opts.debug : false;
  }

  function request(url:String, ?post:Bool = false, ?body:Dynamic):Dynamic {
    var r = new haxe.Http('$baseUrl$url?apiKey=$apiKey');

    if (debug) {
      trace('Making request');
      trace('URL: $url');
      trace('is POST ? : $post');
      trace('body : $body');
    }

    if (post) {
      if (Reflect.isObject(body)) {
        r.setPostData(haxe.Json.stringify(body));
      } else {
        // need for nodejs post requests (can't be undefined)
        r.setPostData('');
      }
    }

    #if js
      return new Promise(function(resolve, reject) {
        r.onData = function (data) {
          if (url == '/regenerate-api-key') {
            this.apiKey = data;
          }

          if (data.length == 0) {
            resolve(data);
          } else {
            resolve(haxe.Json.parse(data));
          }
        };

        r.onError = function (e) {
          if (this.debug) {
            trace("ERROR: ", e);
          }

          reject(e);
        };

        r.request(post);
      });
    #else
      var returnedData = null;
      var returnedError = null;
      r.onData = function (data) {
        if (url == '/regenerate-api-key') {
          this.apiKey = data;
        }

        if (data.length == 0) {
          returnedData = data;
        } else {
          returnedData = haxe.Json.parse(data);
        }
      };

      r.onError = function (e) {
        if (this.debug) {
          trace("ERROR: ", e);
        }
        throw e;
      };

      r.request(post);

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

  public function regenerateApiKey() {
    // TODO we need to update the instance with the new key.
    return request('/regenerate-api-key', true);
  }
}

typedef Body = {
  ?force: Bool,
  ?appId: String
};

typedef Opts = {
  ?debug: Bool
}
