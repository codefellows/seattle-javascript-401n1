'use strict';

const Node = require('./node');

const List = module.exports = function(){
  this.head;
};

List.prototype.addNodeWithValue = function(value){
  var node = new Node(value);
  if (!this.head) return this.head = node;
  this.head.addNode(node);
};

List.prototype.toString = function(){
  var result = 'List < ';
  var current = this.head;
  while (current) {
    result += `${current.value} `;
    current = current.next;
  }
  result += '>';
  return result;
};

List.prototype.removeFirstNode = function(){
  if (this.head && this.head.next){
    this.head = this.head.next; 
    return;
  }
  this.head = null;
};
