var http = require('http');
var fs = require('fs');
var url = require ('url');

var options ={
    docroot:"public/",
    defaultPage:"index.html"
};
http.createServer ( function (request, response){
    var parsedUrl = url.parse(request.url);
    var pathname = parsedUrl.pathname;
    console.log("2got a request to " + pathname.toString());

    if (pathname=="/") pathname+=options.defaultPage;

    var method = request.method;
    console.log("method: "+method);

    if (pathname=="/car"){
        displayAllCars(request, response);
        return
    }

    if (pathname=="/film"){
        displayAllCars(request, response);
        return
    }

    var getRoutes= routes.GET;

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
}).listen(3002);
console.log('Server running at http://127.0.0.1:3002/');

function displayAllCars(request,response){
    response.write("display all cars");
    response.end();
}

function displayAllFilms(request,response){
    response.write("display all films");
    response.end();
}

var routes={
    GET: [{route: "/car", processingFunction: displayAllCars},
         {route: "/films", processingFunction: displayAllFilms},
    ]
}