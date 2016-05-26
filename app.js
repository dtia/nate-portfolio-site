var express = require('express');
var app = express();

var site_routes = require('./controllers/site.js')(app);

app.get('/', function (req, res) {
  	res.render('home');
});

app.set('view engine', 'ejs');

app.listen(3000, function () {
 	console.log('Listening on port 3000!');
});