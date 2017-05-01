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
          api_port: '123',
          commit: 'hadfaf',
          ip_address: 'testesy',
          status: 'hyyyy',
          download_progress: '76'
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
        'body': JSON.stringify('ok'),
    },
    'times': {
        'unlimited': true
    }
  }
]
