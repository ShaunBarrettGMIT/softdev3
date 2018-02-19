var http = require('http');

var server = http.createServer ( function (request, response) {
   console.log("got a request");
   console.log(request);
   response.write("hello world");
   response.end();

});
server.listen("3001");
console.log("Server running");