'use strict';

const http = require('http');
const Router = require('./lib/router');

const port = process.env.PORT || 3000;
const router = new Router();

router.get('/', function(req, res){
  res.writeHead(200);
  res.write('yayayyayyaya our router works');
  res.end();
});

const server = http.createServer(router.route());

server.listen(port, function(){
  console.log('server up :::', port);
});
