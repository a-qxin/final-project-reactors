const WebSocket = require('ws');
const redis = require('redis');
const client = redis.createClient({ host:'localhost' });

const wss = new WebSocket.Server({ port: 5050 });
const connections = {};

wss.on('connection', (ws) => {
  console.log('webserver connection :D success');
  ws.on('message',(data)=>{
    let userId = JSON.parse(data).userId;
    if (connections[userId] == null) {
      connections[userId] = ws;
    }
  })
});

client.on('message',function (channel, message) {
  let json = JSON.parse(message)
  if (connections[json.userId] != null) {
    connections[json.userId].send(json.text)
  }
});

client.subscribe('inquiries');