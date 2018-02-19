var express = require('express');
var session = require('express-session');

var userRouter = require('./routes/user.js');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

// filter to check login
app.use("/user", userRouter);

app.use(session({
    secret: 'blahblah',
    resave: true,
    saveUninitialized: false
}));

var server = app.listen(3003, function () {
    var port = server.address().port

    console.log("Example app listening at :%s",  port)
})
