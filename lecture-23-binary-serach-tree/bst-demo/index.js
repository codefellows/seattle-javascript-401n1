'use strict';

const BSTree = require('./lib/bstree');

let bst = new BSTree();
bst.addNodeWithValue(4);
bst.addNodeWithValue(6);
bst.addNodeWithValue(2);
bst.addNodeWithValue(1);
bst.addNodeWithValue(-1);
bst.addNodeWithValue(11);

//console.log(bst)

//console.dir(bst, {depth: null, colors: true});
//
console.log('depth');
bst.depthFirstPrint();

console.log('\nbreadth');
bst.breadthFirstPrint();
