module.exports.controller = function(app) {

    var bashPath = "/admin";

    /**
     * a home page route
     */
    app.get(bashPath+ '/index', function(req, res) {
        res.render('admin/index');
    });

    /**
     * a signup page route
     */
    app.get(bashPath+'/left', function(req, res) {
        res.render('admin/left');
    });

    /**
     * a signup page route
     */
    app.get(bashPath+'/top', function(req, res) {
        res.render('admin/top');
    });

    /**
     * About page route
     */
    app.get(bashPath+ '/right', function(req, res) {
        res.render('admin/right');
    });

};