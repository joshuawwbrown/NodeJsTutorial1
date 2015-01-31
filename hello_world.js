// The world's simplest web app
 
var http = require('http');
var myIp = "127.0.0.1";
var myPort = '1337';
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(myPort, myIp);
 
console.log('Your server is running at http://' + myIp + ':' + myPort);
