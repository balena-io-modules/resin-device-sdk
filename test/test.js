const resin = require('../dist/resin.js')
const supervisor = new resin.Supervisor()

supervisor.ping().then(ping => {
  console.log({ping})
})

supervisor.device().then((device) => {
  console.log({device})
});

supervisor.blink().then((blink) => {
  console.log({blink})
}).catch(e => {
  console.log(e)
});

supervisor.restart('12').then((restart) => {
  console.log({restart})
}).catch(e => {
  console.log(e)
});
