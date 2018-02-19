var http = require('http');
var fs = require('fs');
var url = require ('url');

var options ={
    docroot:"public/",
    defaultPage:"index.html"
};
http.createServer ( function (request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname + " received.");

    if (pathname=="/") pathname+=options.defaultPage;

    fs.readFile(options.docroot+pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
    }).listen (3002);
console.log('Server running at http://127.0.0.1:3002/');