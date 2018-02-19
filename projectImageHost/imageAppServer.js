var express = require('express');
var app = express();
var bodyParser = require('body-parser');




/* app.get('/', function (req, res){
    res.send('Hello World');
}) */
app.set('view engine', 'ejs');
var imageRouter = require('./routes/images.js');
var userRouter = require('./routes/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use("/images", imageRouter);
app.use("/user",userRouter);

var server = app.listen(3003, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})