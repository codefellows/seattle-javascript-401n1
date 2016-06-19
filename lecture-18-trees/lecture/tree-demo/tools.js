'use strict';

const fs = require('fs');

console.log('readdir', fs.readdirSync('./'))
console.log('isDir lib', fs.statSync('./lib').isDirectory())
console.log('isDir index', fs.statSync('./index.js').isDirectory())
