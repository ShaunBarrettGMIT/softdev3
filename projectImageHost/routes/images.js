var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var fs = require('fs');
var images = {};

router.get('/', function(req, res, next){
    res.send(JSON.stringify(images));
    console.log("in images table");
});

router.get('/:id', function(req, res, next){
    var id = req.param("id");
    console.log("got param "+id);
    if (images[id] !== undefined){
        res.send(JSON.stringify(images[id]));
    }else{
        res.status(204).send({notfound: true});
    }
});

/*router.post('/create', function(req, res, next) {
    console.log("in create:"+req.body);
    var body = req.body;
    var id = body.id;
    images [id] =  body;
    res.send({success:true});
}); */

router.post('/create', function(req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        //res.writeHead(200, {'content-type': 'text/plain'});
        console.log(JSON.stringify(files));
        var username = "456";
        var dir = './public/fileuploads/'+username;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        var oldPath = files.fileToUpload.path;
        var newPath = dir+"/"+files.fileToUpload.name;
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
            res.send('received upload:\n\n');
        });


        //res.end(util.inspect({fields: fields, files: files}));
    });
    console.log("create");
});
router.get('/download', function(req,res,next){
    console.log("create");
})

module.exports = router;