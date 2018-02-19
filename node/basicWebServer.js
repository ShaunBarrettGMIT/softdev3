var http = require('http');

var server = http.createServer( function (request, response) {
    console.log("got a request");
    console.log(response);
    response.write("helloooo");
    response.end();
});
    server.listen("3001");

console.log("Server running");