module.exports.controller = function(app) {



    var basePath = 'order';

    /**
     * a home page route
     */
    app.get("/"+ basePath + '/', function(req, res) {
        res.render(basePath+'/index',{ pageTitle: 'Home page' });
    });

    /**
     * a signup page route
     */
    app.get("/"+basePath + '/reg', function(req, res) {
        res.render(basePath+'/reg');
    });

    /**
     * About page route
     */
    app.get("/"+basePath + '/login', function(req, res) {
        res.render(basePath+'/login');
    });

};