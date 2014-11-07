module.exports.controller = function(app) {

    var adminPath  = "admin";
    var basePath = 'user';
    var requestMapping = '/'+adminPath+'/'+basePath;

    var db = require('../util/DBUtil.js');

    /**
     * 用户列表
     */
    app.get(requestMapping + '/list', function(req, res) {
        db.getConnection().query('SELECT * from user', function (err, rows) {
            if (err) throw err;
            console.log(rows);
            res.render(adminPath+'/user/user_list',{ users: rows });
        });
    });

    /**
     * a signup page route
     */
    app.get(requestMapping + '/reg', function(req, res) {
        res.render(adminPath+'/reg');
    });

    /**
     * About page route
     */
    app.get(requestMapping + '/login', function(req, res) {
        res.render(adminPath+'/login');
    });
};