var http = require('http');
var dt = require('./module1')


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`the date and time is ${dt.myDateTime()}`)
  res.end("Hello World! ");
}).listen(8080);