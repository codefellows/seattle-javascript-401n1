'use strict';

const Queue = module.exports = function(){
  this.data = [];
};

Queue.prototype.enqueue = function(value){
  this.data[this.data.length] = value;
};

Queue.prototype.dequeue = function(){
  var result = this.data[0];
  this.data = this.data.filter(function( _ , index){
    if (index === 0) return false;
    return true;
  });
  return result;
};
