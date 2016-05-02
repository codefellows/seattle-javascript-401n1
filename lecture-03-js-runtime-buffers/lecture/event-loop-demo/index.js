'use strict';

function hello(){
  console.log('hello unicorn');
}

process.nextTick(hello);
console.log('before hello');
console.log('before hello');
console.log('before hello');
console.log('before hello');
console.log('before hello');
console.log('before hello');
