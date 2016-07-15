'use strict';

const BSNode = require('./bsnode');

const BSTree = module.exports = function(){
  this.root = null;
};

BSTree.prototype.addNodeWithValue = function(value){
  if (!this.root) {
    this.root = new BSNode(value);
    return
  }
  this.root.addBSNodeWithValue(value);
};

BSTree.prototype.depthFirstPrint = function(){
  var pad;
  if(!root) return console.log('EMPTY TREE');
  _depthFirstPrint(this.root, '');
  
  function _depthFirstPrint(node, pad){
    console.log(`${pad}${node.value}`);
    if(node.left) _depthFirstPrint(node.left, pad + '  ')
    if(node.right) _depthFirstPrint(node.right, pad + '  ')
  }
};
