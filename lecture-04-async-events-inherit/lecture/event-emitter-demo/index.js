'use strict';

// get a reference to the EventEmitter constructor
const EE = require('events').EventEmitter;

// create a new instance of the event emitter
const myEventEmitter = new EE();

function sayHello(data){
  console.log('hello from inside sayHello function');
  console.log(data.name);
}

// listen for a unicorn event and invoke the function hello
myEventEmitter.on('unicorn', sayHello);

//  emmit the unicorn event and pass it an object literal as the the 
//  argument to the callback 
myEventEmitter.emit('unicorn', {name: 'penelopy'});

