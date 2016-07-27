var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var methodOverride = require('method-override');

//yay do these on all requests
var app = express();
app.use(express.static(__dirname + '/node_modules/'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//disable caching
swig.setDefaults( { cache: false } );

//configure express to use swig. 
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//static route
app.get('/', function(req, res, next){
  res.redirect('/products');
});
app.use('/products', require('./product-routes'));

//port to listen on after server starts
app.listen(process.env.PORT, function(){
  console.log('app started on port' + process.env.PORT);
});
