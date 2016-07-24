var express = require('express');
var router = express.Router();
var characters = require('../../characters');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
router.use(bodyParser.urlencoded({ encoded: false }));
router.use(bodyParser.json());

//use this to get some cool stuff to display
router.get('/', function(req, res){
	var chars = characters.getAllCharacters();
	console.log(characters);
	res.render('index', { characters: chars });
});

router.get('/addcharacter', function(req, res){
	console.log('at /addcharacter');
	res.render('addcharacter' );
});

router.get('/character/:id/edit', function(req, res){
	var character = req.params.id;
	console.log('at /character/:id' + character);
	res.render('character')
})


module.exports = router;
