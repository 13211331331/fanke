module.exports.controller = function(app) {

    var adminPath  = "admin";
    var basePath = 'product';
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
     * 添加产品
     */
    app.get(requestMapping + '/add', function(req, res) {
        res.render(adminPath+'/product/product_list');
    });


    /**
     * 添加产品
     */
    app.post(requestMapping + '/add', function(req, res) {
        var fs = require("fs");
        // 获得文件的临时路径
        var tmp_path = req.files.uploadImg.path;
        // 指定文件上传后的目录 - 示例为"images"目录。
        var target_path ='./public/images/'+ req.files.uploadImg.name;
        // 移动文件
        fs.rename(tmp_path, target_path,function(err){
            if(err)throw err;
            // 删除临时文件夹文件,
            fs.unlink(tmp_path,function(){
                if(err)throw err;
                res.send('File uploaded to: '+ target_path +' - '+ req.files.uploadImg.size +' bytes');
            });
        });
    });

    /**
     * About page route
     */
    app.get(requestMapping + '/login', function(req, res) {
        res.render(adminPath+'/login');
    });
};