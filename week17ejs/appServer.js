var express = require('express');
var testEJSRouter = require('./routes/testEJS');


var app = express();
var bodyParser = require('body-parser');
/*app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));



var server = app.listen(3003, function () {
    var port = server.address().port

    console.log("Example app listening at :%s",  port)
})
