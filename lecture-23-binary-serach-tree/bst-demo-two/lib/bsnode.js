'use strict';

const BSNode = module.exports = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BSNode.prototype.addBSNodeWithValue = function(value){
  // duplicate BSBSNodes are not allowed
  if (value === this.value) throw new Error('no dup numbers');

  // check if the new value is less than the current value
  if (value < this.value){
    // if the right BSBSNode all ready exists use add the new value to it
    if (this.left) {
      this.left.addBSNodeWithValue(value)
      return
    }

    // the new value is less than the current value and the
    // current BSBSNode has no left child so create a new left child
    // with the new value
    this.left = new BSNode(value);
    return;
  }

  if(this.right){
    // if the right BSBSNode all ready exists use add the new value to it
    this.right.addBSNodeWithValue(value)
    return
  }
  
  // the new value is greater than the current value and the
  // current BSBSNode has no right child so create a new right child
  // with the new value

  this.right = new BSNode(value);
};

