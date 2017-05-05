module.exports = [
  {
    'httpRequest': {
        'method': 'GET',
        'path': '/ping'
    },
    'httpResponse': {
        'statusCode': 200,
        'body': JSON.stringify('OK')
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
              'name': 'apiKey',
              'values': [ '1234' ]
            }
        ]
    },
    'httpResponse': {
        'statusCode': 204,
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
              'name': 'apiKey',
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
              'name': 'apiKey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'appId': '12'
        }
    },
    'httpResponse': {
        'statusCode': 200,
        'body': JSON.stringify('OK'),
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
              'name': 'apiKey',
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
              'name': 'apiKey',
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
              'name': 'apiKey',
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
              'name': 'apiKey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'appId': '12'
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
              'name': 'apiKey',
              'values': [ '1234' ]
            }
        ],
        'body': {
          'appId': '12'
        }
    },
    'httpResponse': {
        'statusCode': 204,
        'body': JSON.stringify("OK"),
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
              'name': 'apiKey',
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
              'name': 'apiKey',
              'values': [ '1234' ]
            }
        ]
    },
    'httpResponse': {
        'statusCode': 200,
        'body': "480af7bb8a9cf56de8a1e295f0d50e6b3bb46676aaddbf4103aa43cb57039364",
    },
    'times': {
        'unlimited': true
    }
  },
  {
    'httpRequest': {
        'method': 'GET',
        'path': '/v1/apps/12',
        'queryStringParameters': [
            {
              'name': 'apiKey',
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
        'path': '/v1/apps/12/stop',
        'queryStringParameters': [
            {
              'name': 'apiKey',
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
        'path': '/v1/apps/12/start',
        'queryStringParameters': [
            {
              'name': 'apiKey',
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
