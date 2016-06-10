'use strict';

// npm modules
const debug = require('debug')('authdemo:snack-router');
const Router = require('express').Router;
const jsonParser = require('body-parser').json();

// app modules
const parseBearerAuth = require('../lib/parse-bearer-auth');
const snackController = require('../controller/snack-controller');

// module constants
const snackRouter = module.exports = new Router();

snackRouter.post('/snack', parseBearerAuth, jsonParser, function(req, res, next){
  debug('POST /api/snack');
  req.body.userId = req.userId;
  snackController.createSnack(req.body)
  .then( snack => res.json(snack))
  .catch(next);
});
