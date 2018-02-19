var express = require ("express");
var router = express.Router();
var userDAO = require ("../DAO/userDAO");

router.get ("/",function (req,res){
    userDAO.getAll(function (result) {
        res.send(result);

    })
})

router.post ("/create", function (req,res) {
    var user = {};
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    userDAO.create (user,function (result){
        res.redirect("/users/users.html");
    })
})

router.get ("/editform/:username", function (req,res) {
    var username = req.param("username");
    userDAO.findByUsername(username, function (result){
       // console.log (result);
        var user = result[0];
        res.render("page/editform", {
            user:user
        });
    });
})

router.post ("/edit", function (req,res) {
    var user = {};
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    console.log (user);
    userDAO.update(user, function (result){
        res.redirect("/users/users.html");
    })
})

router.delete('/:username',function(req,res){
    var username = req.param("username");
    userDAO.delete(username,function(result){
        res.send(result);
    })

});

module.exports = router;