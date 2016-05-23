'use strict';

const Queue = require('./lib/queue');
const numQueue = new Queue();

console.log('numQueue.data', numQueue.data);

numQueue.enqueue(78);
console.log('numQueue.data', numQueue.data);

numQueue.enqueue(27);
console.log('numQueue.data', numQueue.data);

numQueue.enqueue(88);
console.log('numQueue.data', numQueue.data);

console.log('dequeue', numQueue.dequeue());
console.log('numQueue.data', numQueue.data);

console.log('dequeue', numQueue.dequeue());
console.log('numQueue.data', numQueue.data);

console.log('dequeue', numQueue.dequeue());
console.log('numQueue.data', numQueue.data);
