var marvelAPI = require('marvel-api');

var marvel = marvelAPI.createClient({
	publicKey: '24b4e81f1770e2a04c0c7cebea010158',
	privateKey: '7b30bf76e79f765f6d273dce5f0f8bccc81323ca'
});

var charIDS = [];
marvel.characters.findAll()
	.then( function(res){
		console.log(Object.keys(res));
		//console.log(res.data);
		for (var i = 0; i < res.data.length; i++){
			charIDS.push(res.data[i].id)
		}
		return charIDS ;
	})
	.done();


