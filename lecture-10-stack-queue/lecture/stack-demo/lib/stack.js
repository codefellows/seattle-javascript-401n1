'use strict';

const Stack = module.exports = function(){
  this.data = [];
};

Stack.prototype.push = function(value) {
  this.data[this.data.length] = value;
};

var x = 3;

Stack.prototype.pop = function(){
  const result = this.data[this.data.length - 1]
  delete this.data[--this.data.length];
  return result;
};

Stack.prototype.peek = function(){
  return this.data[this.data.length - 1]
};

