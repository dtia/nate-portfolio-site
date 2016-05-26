var _ = require('underscore');

var site_routes = function(app) {
	app.get('/about', function(req, res) {
		res.render('about');
	});

	app.get('/resume', function(req, res) {
		res.render('resume');
	});

	app.get('/fun', function(req, res) {
		res.render('fun');
	});

	app.get('/contact', function(req, res) {
		res.render('contact');
	});
};

module.exports = site_routes;