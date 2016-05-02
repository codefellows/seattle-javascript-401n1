'use strict';

const hello = new Buffer('abcdef');
console.log('hello buffer: ', hello);
console.log('hello length: ', hello.length);

console.log('hello buffer utf8: ', hello.toString('utf8'));
console.log('hello buffer hex: ', hello.toString('hex'));
console.log('hello buffer base64: ', hello.toString('base64'));

hello.write('slugs', 6);
console.log('hello buffer: ', hello);
console.log('hello length: ', hello.length);

console.log('hello buffer utf8: ', hello.toString('utf8'));
console.log('hello buffer hex: ', hello.toString('hex'));
console.log('hello buffer base64: ', hello.toString('base64'));

hello.writeInt16LE(32);
console.log('first byte as int',  hello.readInt8());
console.log('first byte as int 16 LE',  hello.readInt16LE());
console.log('first byte as int 32 LE',  hello.readInt32LE());
console.log('hello buffer: ', hello);
