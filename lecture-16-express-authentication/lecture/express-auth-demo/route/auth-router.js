'use strict';

// npm modules
const Router = require('express').Router;
const debug = require('debug')('authdemo:auth-rotuer');
const jsonParser = require('body-parser').json();

// app modules
const authController = require('../controller/auth-controller');

// module constants
const authRouter = module.exports = new Router();

authRouter.post('/signup', jsonParser, function(req, res, next){
  debug('POST /api/signup');
  authController.signup(req.body)
  .then( token => res.send(token))
  .catch(next);
});
