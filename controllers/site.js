var _ = require('underscore');

var site_routes = function(app) {
	app.get('/', function (req, res) {
		res.render('home', {css: 'css/home.css', page: 'home'});
	});

	app.get('/:pageName', function (req, res) {
		var page = req.params.pageName;
	  	res.render(page, {css: 'css/' + page + '.css', page: page});
	});
};

module.exports = site_routes;