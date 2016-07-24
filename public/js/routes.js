var express = require('express');
var router = express.Router();
var products = require('../../products');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var methodOverride = require('method-override');

//yay do these on all requests
router.use(bodyParser.urlencoded({ encoded: false }));
router.use(bodyParser.json());
router.use(methodOverride('_method'));

//root. show index page
router.get('/', function(req, res){
	var prods = products.getAllProducts();
	res.render('index', { products: prods });
});

//show add products page
router.get('/addproduct', function(req, res){
	res.render('addproduct' );
});


//what to do when we submit on addprouct page
router.post('/addproduct', function(req, res){
	console.log(req.body.description);
	products.addProduct(req.body.description);
	res.redirect('/');
})

router.get('/product/:id', function(req, res){
	var description = products.getProductsByID(req.params.id).description;
	console.log(description);
	res.render('product', { id: req.params.id, description: description });
});

router.put('/product/:id', function(req, res){
	var idToUpdate = req.params.id*1;
	console.log(idToUpdate, req.body.description);
	products.updateProduct(idToUpdate, req.body.description);
	res.redirect('/');
});

//handle how to delete a product
router.delete('/:id', function(req, res){
		var idToDelete = req.params.id*1;
		products.deleteProduct(idToDelete);
		res.redirect('/');
});


module.exports = router;
