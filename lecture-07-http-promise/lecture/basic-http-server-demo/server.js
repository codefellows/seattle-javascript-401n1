'use strict';

const http = require('http');
const parseUrl = require('url').parse;
const parseQuery = require('querystring').parse;

const parseBody = require('./lib/parse-json');

const port = process.argv[2] || 3000;


const server = http.createServer(function(req, res){
  req.url =  parseUrl(req.url);
  req.url.query = parseQuery(req.url.query);

  console.log('req.method', req.method);

  if(/(PUT|POST|DELETE)/.test(req.method)){
    parseBody(req).then(function(){
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(req.body));
      res.end();
    }).catch(function(err){
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(err));
      res.end();
    });
  }

});


server.listen(port, function(){
  console.log('server is running on port', port);
});
