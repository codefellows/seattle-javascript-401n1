'use strict';

const List = require('./lib/list');


const numList = new List();

console.log(numList.toString());

numList.addNodeWithValue(3);
console.log(numList.toString());

numList.addNodeWithValue(7);
console.log(numList.toString());

numList.addNodeWithValue(9);
console.log(numList.toString());

numList.removeFirstNode();
console.log(numList.toString());

numList.removeFirstNode();
console.log(numList.toString());

numList.removeFirstNode();
console.log(numList.toString());

numList.removeFirstNode();
console.log(numList.toString());
