'use strict';

const Node = module.exports = function(value){
  this.value = value;
  this.next = null;
};

Node.prototype.addNode = function(node){
  if (! this.next) return this.next = node;
  this.next.addNode(node);
};
