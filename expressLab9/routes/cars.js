var express = require('express');
var router = express.Router();
var cars = {};

router.get('/', function(req, res, next){
    res.send(JSON.stringify(cars));
    console.log("in cars home");
});

router.get('/:id', function(req, res, next){
    var id = req.param("id");
    console.log("got param "+id);
    res.send(JSON.stringify(cars[id]));
});

router.post('/create', function(req, res, next) {
    console.log(req.body);
    var car = req.body;
    var id = car.id;
    cars [id] =  car;
    res.send({success:true});
});


module.exports = router;