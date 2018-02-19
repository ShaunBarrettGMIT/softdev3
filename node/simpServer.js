var http = require('http');
var url = require('url');
var fs = require('fs');

var options = {
    docroot : "public/"
}

var server = http.createServer( function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("got a request to "+pathname.toString());

    var fileName = pathname.substr(1);
    var filePath = options.docroot+fileName;
    console.log(filePath);
    fs.readfile(filePath, function (err, data){
        if(err){
            response.writeHead(404, {'Content-Type': 'text/html'});
                console.log(err);
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toSring());
            response.end();
        }

    )}



});
server.listen("3001");

console.log("Server running");