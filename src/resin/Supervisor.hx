package resin;

#if js
  import js.Promise;
#end

@:keep // <-- Avoid dead code elimination stripping this class away
@:expose('Supervisor')
class Supervisor {
  var apiKey:String;
  var baseUrl:String;
  var debug:Bool;

  public function new(?opts:Opts) {
    this.baseUrl = Sys.getEnv('RESIN_SUPERVISOR_ADDRESS');
    this.apiKey = Sys.getEnv('RESIN_SUPERVISOR_API_KEY');
    this.debug = (opts!=null) ? opts.debug : false;
  }

  function handleResponse(?data:Dynamic):Dynamic {
    try {
      return haxe.Json.parse(data);
    } catch(msg : Dynamic) {
      return data;
    }
  }

  function request(url:String, ?post:Bool = false, ?body:Dynamic):Dynamic {
    var r = new haxe.Http('$baseUrl$url?apikey=$apiKey');

    r.setHeader("Content-Type", "application/json");

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
          if (url == '/v1/regenerate-api-key') {
            this.apiKey = data;
          }

          resolve(handleResponse(data));
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
        if (url == '/v1/regenerate-api-key') {
          this.apiKey = data;
        }

        returnedData = handleResponse(data);
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
    return request('/v1/device');
  }

  public function blink() {
    return request('/v1/blink', true);
  }

  public function reboot() {
    return request('/v1/reboot', true);
  }

  public function shutdown() {
    return request('/v1/shutdown', true);
  }

  public function update(?force: Bool = false) {
    var body:Body = {
      force: force
    }
    return request('/v1/update', true, body);
  }

  public function purge(id) {
    var body:Body = {
      appId: id
    }
    return request('/v1/purge', true, body);
  }

  public function restart(id) {
    var body:Body = {
      appId: id
    }
    return request('/v1/restart', true, body);
  }

  public function tcpEnable() {
    return request('/v1/tcp-ping', true);
  }

  public function app(id: String) {
    return request('/v1/apps/$id');
  }

  public function start(id: String) {
    return request('/v1/apps/$id/start', true);
  }

  public function stop(id: String) {
    return request('/v1/apps/$id/stop', true);
  }

  public function regenerateApiKey() {
    // TODO we need to update the instance with the new key
    return request('/v1/regenerate-api-key', true);
  }
}

typedef Body = {
  ?force: Bool,
  ?appId: String
};

typedef Opts = {
  ?debug: Bool
}
