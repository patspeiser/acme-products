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
};

var getById = function(id){
  return products.filter(function(product){
    return product.id === id;
  })[0];
};

var addProduct = function(description){
	getAllProducts().push({
		id: id,
		description: description
		});
	id++;
};

var deleteProduct = function(id){
	var indexToDelete = this.getAllProducts().indexOf(getById(id));
	this.getAllProducts().splice(indexToDelete, 1);
};

var updateProduct = function(id, description){
  var product = this.getById(id);
  product.description = description;
}


module.exports = { 
  getAllProducts: getAllProducts,
  getById: getById,
  addProduct: addProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct
};

