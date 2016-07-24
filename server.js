var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./public/js/routes');
//disable caching
swig.setDefaults( { cache: false } );

//configure express to use swig. 
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//static route
app.use(express.static(__dirname + '/node_modules/'));
app.use(express.static('public'));
app.use('/', routes);

//port to listen on after server starts
app.listen(5050);
