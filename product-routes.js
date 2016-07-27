var express = require('express');
var router = express.Router();
var Product = require('./products');

module.exports = router;

//root. show index page
router.get('/', function(req, res){
	var prods = Product.getAllProducts();
	res.render('index', { products: prods });
});

//show add products page
router.get('/add', function(req, res){
	res.render('addproduct' );
});


//what to do when we submit on addprouct page
router.post('/', function(req, res){
	Product.addProduct(req.body.description);
	res.redirect('/products');
})

router.get('/:id', function(req, res){
	var product = Product.getById(req.params.id * 1);
	res.render('product', { product: product });
});

router.put('/:id', function(req, res){
	var idToUpdate = req.params.id*1;
	Product.updateProduct(idToUpdate, req.body.description);
	res.redirect('/products');
});

//handle how to delete a product
router.delete('/:id', function(req, res){
		Product.deleteProduct(req.params.id*1);
		res.redirect('/');
});


