var http = require('http');
var dt = require('./module1')


http.createServer(function (req, res) {
  
  // The first argument of the res.writeHead() method is the status code,
  // 200 means that all is OK, the second argument is an object containing the response headers.
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write(`the date and time is ${dt.myDateTime()}`)

  // req argument represents the request from the client
  // This object has a property called "url" which holds 
  // the part of the url that comes after the domain name:
  res.write(req.url)

  
  res.end("Hello World! ");
}).listen(8080);