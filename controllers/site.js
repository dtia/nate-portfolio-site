var _ = require('underscore');

var site_routes = function(app) {
	app.get('/', function (req, res) {
	  	res.render('home', {css: 'css/home.css'});
	});

	app.get('/about', function(req, res) {
		res.render('about', {css: 'css/about.css'});
	});

	app.get('/resume', function(req, res) {
		res.render('resume', {css: 'css/resume.css'});
	});

	app.get('/fun', function(req, res) {
		res.render('fun', {css: 'css/fun.css'});
	});

	app.get('/contact', function(req, res) {
		res.render('contact', {css: 'css/contact.css'});
	});

	app.get('/express-project', function(req, res) {
		res.render('express-project', {css: 'css/express-project.css'});
	});

	app.get('/glip-project', function(req, res) {
		res.render('glip-project', {css: 'css/glip-project.css'});
	});

	app.get('/iwatch-project', function(req, res) {
		res.render('iwatch-project', {css: 'css/iwatch-project.css'});
	});	
};

module.exports = site_routes;