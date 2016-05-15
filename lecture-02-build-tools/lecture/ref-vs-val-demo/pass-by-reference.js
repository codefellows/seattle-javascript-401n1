'use strict';

var human = { name: 'ada' };

function swapName(obj){
  const lul = JSON.parse(JSON.stringify(obj));
  lul.name = 'hahahah not working';
}

console.log('human before: ', human);
swapName(human);
console.log('human after: ', human);
