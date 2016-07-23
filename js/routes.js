var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
router.use(bodyParser.urlencoded({ encoded: false }));
router.use(bodyParser.json());

//use this to get some cool stuff to display
var marvelAPI = require('marvel-api');

var marvel = marvelAPI.createClient({
  publicKey: '24b4e81f1770e2a04c0c7cebea010158',
  privateKey: '7b30bf76e79f765f6d273dce5f0f8bccc81323ca'
});

router.get('/', function(req, res){
	var charIDS = [];

	marvel.characters.findAll()
		.then( function(res){
			for (var i = 0; i < res.data.length; i++){
				charIDS.push(res.data[i].id)
			}
		})
		.done();

	res.render('index', { chars: charIDS } );
});

router.get('/products', function(req, res){
	console.log('at /products');
	marvel.characters.findAll()
  .then(console.log)
  .done();
	res.render('products' );
});

router.get('/products/:id', function(req, res){
	var product = req.params.id;
	console.log('at /products/:id' + product);
	res.render('product', { product: product } )
})

module.exports = router;
