var _ = require('underscore');

var site_routes = function(app) {
	app.get('/', function (req, res) {
	  	res.render('home', {css: 'css/home.css'});
	});

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

	app.get('/express-project', function(req, res) {
		res.render('express-project');
	});

	app.get('/glip-project', function(req, res) {
		res.render('glip-project');
	});

	app.get('/iwatch-project', function(req, res) {
		res.render('iwatch-project');
	});	
};

module.exports = site_routes;