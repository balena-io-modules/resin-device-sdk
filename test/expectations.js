const APP_ID = process.env.RESIN_APP_ID;

module.exports = [
  {
    'httpRequest': {
        'method': 'GET',
        'path': '/ping'
    },
    'httpResponse': {
        'statusCode': 200,
        'body': 'OK'
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/blink',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ]
    },
    'httpResponse': {
        'statusCode': 204,
        'body': 'OK'
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'GET',
        'path': '/v1/device',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ]
    },
    'httpResponse': {
        'statusCode': 200,
        'body': JSON.stringify({
          api_port:48484,
          ip_address:"192.168.0.114 10.42.0.3",
          commit:"414e65cd378a69a96f403b75f14b40b55856f860",
          status:"Downloading",
          download_progress:84,
          os_version:"Resin OS 1.0.4 (fido)",
          supervisor_version:"1.6.0",
          update_pending:true,
          update_downloaded:false,
          update_failed:false
        }),
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/restart',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'appId': APP_ID
        }
    },
    'httpResponse': {
        'statusCode': 200,
        'body': 'OK',
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/update',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'force': true
        }
    },
    'httpResponse': {
        'statusCode': 204,
        'body': '',
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/reboot',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
    },
    'httpResponse': {
        'statusCode': 204,
        'body': JSON.stringify({
            "Data": "OK",
            "Error": ""
        }),
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/shutdown',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
    },
    'httpResponse': {
        'statusCode': 204,
        'body': JSON.stringify({
            "Data": "OK",
            "Error": ""
        }),
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/purge',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'appId': APP_ID
        }
    },
    'httpResponse': {
        'statusCode': 204,
        'body': JSON.stringify({
            "Data": "OK",
            "Error": ""
        }),
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/restart',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'appId': APP_ID
        }
    },
    'httpResponse': {
        'statusCode': 204,
        'body': 'OK',
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/tcp-ping',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ]
    },
    'httpResponse': {
        'statusCode': 204,
        'body': "",
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': '/v1/regenerate-api-key',
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ]
    },
    'httpResponse': {
        'statusCode': 200,
        'body': '5678a',
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'GET',
        'path': `/v1/apps/${APP_ID}`,
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
    },
    'httpResponse': {
        'statusCode': 200,
        'body': JSON.stringify({"appId": 3134,"commit":"414e65cd378a69a96f403b75f14b40b55856f860","imageId":"registry.resin.io/superapp/414e65cd378a69a96f403b75f14b40b55856f860","containerId":"e5c1eace8b4e","env":{"FOO":"bar"}}),
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': `/v1/apps/${APP_ID}/stop`,
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'force': true
        }
    },
    'httpResponse': {
        'statusCode': 200,
        'body': JSON.stringify({"containerId":"5f4d4a857742e9ecac505ba5710834d3852ad7d71e10389fc6f61d8655a21806"}),
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'POST',
        'path': `/v1/apps/${APP_ID}/start`,
        'queryStringParameters': [
            {
              'name': 'apikey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'force': true
        }
    },
    'httpResponse': {
        'statusCode': 200,
        'body': JSON.stringify({"containerId":"5f4d4a857742e9ecac505ba5710834d3852ad7d71e10389fc6f61d8655a21806"}),
    },
    'times': {
        'unlimited': true
    }
  }
]
