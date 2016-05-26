var express = require('express');
var app = express();

var site_routes = require('./controllers/site.js')(app);

app.get('/', function (req, res) {
  	res.render('home');
});

app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
app.listen(port, function () {
 	console.log('Listening on port ' + port + '!');
});