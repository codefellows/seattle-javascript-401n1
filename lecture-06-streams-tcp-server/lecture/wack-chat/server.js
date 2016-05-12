'use strict';

const net = require('net');
const port = process.argv[2] || 3000
const ClientPool = require('./lib/client-pool');

const wackPool = new ClientPool();
const server = net.createServer();

// everytime a conection is made to a server 
// register the clinet with the wackPool 
server.on('connection', function(socket){
  wackPool.emit('register', socket);
});

// everytime the server has an error log it on stderr
server.on('error', function(err){
  console.error('SERVER ERROR:', err.message);
});

// tell the server to bind it self to the port@ the
// value of the port variable, and listen for connections
server.listen(port, function(){
  console.log('server is running on port:', port);
});
