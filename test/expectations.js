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
        'path': '/v1/ping',
        'queryStringParameters': [
            {
              'name': 'apiKey',
              'values': [ '1234' ]
            }
        ]
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
  }
]
