var express = require('express');
var app = express();

var site_routes = require('./controllers/site.js')(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
 	console.log('Listening on port ' + port + '!');
});
