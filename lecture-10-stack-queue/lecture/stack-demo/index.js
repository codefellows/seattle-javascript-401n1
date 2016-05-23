'use strict';

const Stack = require('./lib/stack');
const numStack = new Stack();

console.log('numStack.data', numStack.data);

numStack.push(23);
console.log('numStack.data', numStack.data);

numStack.push(4);
console.log('numStack.data', numStack.data);

console.log('pop', numStack.pop());
console.log('numStack.data', numStack.data);

console.log('pop', numStack.pop());
console.log('numStack.data', numStack.data);
