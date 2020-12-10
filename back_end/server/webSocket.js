const WebSocket = require('ws');
const redis = require('redis');
const client = redis.createClient({ host:'localhost' });

const wss = new WebSocket.Server({ port: 5050 });

wss.on('connection', (ws) => {
  console.log('webserver connection :D success');
  ws.on('message',(data)=>{
    console.log(data);
  })
});

client.on('message', (channel, message) => { // all channels for now
  console.log(`subscriber hears message ${message}`);
  wss.clients.forEach((client) => {
    client.send(message);
  });
});

client.subscribe('inquiries');