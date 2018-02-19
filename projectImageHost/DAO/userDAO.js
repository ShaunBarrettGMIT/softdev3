var daoHelper = require ("./daoHelper");
var userDAO = {
    getAll : function (callback) {
        var sql = "select * from user;";
        daoHelper.callSQL(sql, [], "getAll", function (result){
           if (callback){ callback (result)};
        })

    },

    create : function (user,callback) {
        var sql = "insert into user (username, password, email) values (?, ?, ?);";
        daoHelper.callSQL(sql, [user.username,user.password,user.email], "create", callback);

    },

    findByUsername : function (username, callback) {
        var sql = "select * from user where username = ?;";
        daoHelper.callSQL(sql, [username], "find by id", callback);
    },

    update : function (user, callback) {
        var sql = "update user set ? where username = ?;";
        daoHelper.callSQL(sql, [user, user.username], "update", callback);

    },

    delete : function (username, callback) {
        var sql = "delete from user where username = ?;";
        daoHelper.callSQL(sql,[user.username],"delete",callback);
    }

}
module.exports = userDAO;