'use strict';

function Node(value){
  this.value = value;
  this.next = null;
}

Node.prototype.printNext = function(){
  console.log('this.value', this.value);
  if (this.next){
    this.next.printNext();
  }
};

var node1 = new Node(3);
var node2 = new Node(7);
var node3 = new Node(9);

node1.next = node2;
node2.next = node3;

node1.printNext();


