'use strict';

const EventEmitter = require('events').EventEmitter;

// register socket(clients) to the pool
function registerClinet(socket, clientPool){
  socket.wack = {};
  socket.wack.id = 'client_' + Date.now(); 
  clientPool.pool[socket.wack.id] = socket;
};

// register event listeners to the new sockets(clients)
function registerClinetListeners(socket, clientPool){
  // data event is triggered when ever the socket sends data
  socket.on('data', function(data){
    console.log(data.toString());
    Object.keys(clientPool.pool).forEach(function(clientId){
      clientPool.pool[clientId].write(data.toString());
    });
  });

  // data evetn is triggered when the socket(client) cloess the connection
  socket.on('close', function(){
    console.log('a client has disconeccted');
  });

  // error event is triggered when the socket(client) has an error
  socket.on('error', function(err){
    console.error('CLIENT ERROR:', err.message);
  });

}

// Create an object constructor that inherets from EventEmitter
// give it a property called pool for registering contions to
const ClientPool = module.exports = function(){
  // inheret the EventEmitter property's
  EventEmitter.call(this);
  this.pool = {};
  
  // when the register event is emited add the sockek(cleint)
  // to the pool, and register eventEmitters with the socket
  this.on('register', (socket) => {
    socket.write('welcome sluggy!\n');
    registerClinet(socket, this);
    registerClinetListeners(socket, this);
  });
};

// inheret the EventEmitter's methods
ClientPool.prototype = Object.create(EventEmitter.prototype);
