'use strict';

const slug = require(__dirname +    '/lib/user-one');
const unicorn = require(__dirname + '/lib/user-two');

console.log(slug.getUserStatus());
console.log(unicorn.getUserStatus());

slug.toggleUserStatus();

console.log(slug.getUserStatus());
console.log(unicorn.getUserStatus());
