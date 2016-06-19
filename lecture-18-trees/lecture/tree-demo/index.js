'use strict';

//-D 
// | C
//   - A
// | B

const nodeA = {
  value: 'A',
  children: []
};

const nodeB = {
  value: 'B',
  children: []
};

const nodeC = {
  value: 'C',
  children: [nodeA]
};

const nodeD = {
  value: 'D',
  children: [nodeC,nodeB]
};

function printDepthFirst(node, pad){
  pad = pad || '';
  console.log(`${pad}${node.value}`);
  node.children.forEach((child) => {
    printDepthFirst(child, pad + '  ');
  });
}

printDepthFirst(nodeD);









