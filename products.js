//i provide 5 defaults. so starting at 6
var id = 5;
var products = [
	{
		id: 1,
		description: 'New yorks greatest product.'
	},	
	{
		id: 2,
		description: 'Mercas greatest product.'
	},
	{
		id: 3,
		description: 'North Mercas greatest product.'
	},
	{
		id: 4,
		description: 'Worlds greatest product'
	},	
	{
		id: 5,
		description: 'universes greatest product.'
	}
];

var getAllProducts = function(){
	return products;
}

var getProductsByID = function(id){
	for (var i = 0; i < products.length; i++){
		if (products[i].id == id){
			return products[i];
		}
	}
}

var addProduct = function(description){
	getAllProducts().push({
		id: id,
		description: description
		});
	id++;
	console.log('product added', getAllProducts())
};

var deleteProduct = function(id){
	var deleteProd = this.getAllProducts().filter(function(product){
			return product.id === id;
		})[0];

	var indexToDelete = getAllProducts().indexOf(deleteProd);
	this.getAllProducts().splice(indexToDelete, 1);
};

console.log(getAllProducts());
module.exports = { getAllProducts: getAllProducts, getProductsByID: getProductsByID, addProduct: addProduct, deleteProduct: deleteProduct };

