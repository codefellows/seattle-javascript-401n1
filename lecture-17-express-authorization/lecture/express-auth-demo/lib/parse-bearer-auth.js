'use strict';

// npm modules
const debug = require('debug')('authdemo:parse-bearer-auth');
const httpErrors = require('http-errors');
const jwt = require('jsonwebtoken');

// app modules
const User = require('../model/user');

module.exports = function(req, res, next){
  debug('parseBearerAuth');
  if (! req.headers.authorization)
    return next(httpErrors(401, 'requires authorization header'));
  const token = req.headers.authorization.split(' ')[1];
  console.log('token', token);
  jwt.verify(token, process.env.APP_SECRET, function(err, decoded){
    if (err)
      return next(httpErrors(401, err.message));
    User.findOne({findHash: decoded.token})
    .then( user => {
      req.userId = user._id;
      next()
    })
    .catch( err => {
      next(httpErrors(401, err.message))
    });
  });
};
