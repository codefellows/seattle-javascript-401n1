'use strict';

const debug = require('debug')('authdemo:snack-controller');
const Snack = require('../model/snack');
const httpErrors = require('http-errors');

exports.createSnack = function(snackData){
  return new Promise((resolve, reject) => {
    new Snack(snackData).save()
    .then( snack => resolve(snack))
    .catch( err => reject(httpErrors(400, err.message)));
  });
};

exports.removeAllSnacks = function(){
  return Snack.remove({});
};
