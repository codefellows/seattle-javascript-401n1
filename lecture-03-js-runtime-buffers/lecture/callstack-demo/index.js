'use strict';

function first(num){
  console.log('first function has been invoked');
  num++;
  return second(num);
}

function second(num){
  console.log('second function has been invoked');
  num++;
  return third(num);
}

function third(num){
  console.log('third function has been invoked');
  return num++;
}

const result = first(2);
console.log('result: ' + result);
