var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'web_fanke',
    password: 'mysql',
    port: 3306
});


conn.connect();

exports.getConnection = function (){
    return conn;
};