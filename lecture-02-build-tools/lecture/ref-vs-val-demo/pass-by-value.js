'use strict';

// pass by copy

var a = 3;

function increment(num){
  var b = num;
  b++;
  return b;
}

console.log('a before:', a);
const result = increment(a);
console.log('a after:', a);
console.log('result:', result);

