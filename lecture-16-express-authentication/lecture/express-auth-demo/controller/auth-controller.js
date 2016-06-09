'use strict';

// npm modules
const debug = require('debug')('authdemo:auth-controller');

// app modules
const User = require('../model/user');

exports.signup = function(reqBody){
  debug('signup');
  return new Promise((resolve, reject) => {
    var password = reqBody.password;
    delete reqBody.password;
    var user = new User(reqBody);
    user.generateHash(password) // first hash there password
    .then( user => user.save())  // save the user to make sure unique username
    .then( user => user.geterateToken()) // create token to send to the user
    .then( token => resolve(token)) // resolve token
    .catch(reject) // reject any error
  });
};
