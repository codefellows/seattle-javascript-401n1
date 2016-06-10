'use strict';

// npm modules
const Router = require('express').Router;
const debug = require('debug')('authdemo:auth-rotuer');
const jsonParser = require('body-parser').json();
const parseBasicAuth = require('../lib/parse-basic-auth');

// app modules
const authController = require('../controller/auth-controller');

// module constants
const authRouter = module.exports = new Router();

authRouter.post('/signup', jsonParser, function(req, res, next){
  authController.signup(req.body)
  .then( token => res.send(token))
  .catch(next);
});

authRouter.get('/signin', parseBasicAuth ,function(req, res, next){
  console.log('req.auth', req.auth);
  authController.signin(req.auth)
  .then( token => res.send(token))
  .catch(next);
});
