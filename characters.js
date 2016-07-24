//i provide 5 defaults. so starting at 6
var id = 6;
var characters = [
	{ 
		id: 1,
		name: 'Bugs Bunny',
		info: 'Bugs is an anthropomorphic gray hare or rabbit who is famous for his flippant, insouciant personality.',
		image: '/assets/bugs.jpg'
		},
	{
		id: 2,
		name: 'Daffy Duck',
		info: 'Daffy was one of the first of the new "screwball" characters that emerged in the late 1930s to replace traditional everyman characters',
		image: 'assets/daffy.jpg'
	},
	{
    id: 3,
    name: 'Donald Duck',
    info: 'Donald is an anthropomorphic white duck with a yellow-orange bill, legs, and feet. He typically wears a sailor shirt and cap with a bow tie.',
		image: 'assets/donald.jpg'
  },
	{
    id: 4,
    name: 'Foghorn Leghorn',
    info: 'Foghorn Leghorn is depicted as a large, white adult Leghorn rooster with a stereotypically Southern accent.',
		image: 'assets/foghorn.jpg'
  },{
    id: 5,
    name: 'Yosemite Sam',
    info: 'He is commonly depicted as an extremely aggressive gunslinging prospector, outlaw, pirate, or cowboy with a hair-trigger temper and an intense hatred of rabbits',
		image: 'assets/yosemite_sam.jpg'
	}
];

var getAllCharacters = function(){
	return characters;
}

var getCharactersByID = function(id){
	for (var i = 0; i < characters.length; i++){
		if (characters[i].id == id){
			return characters[i];
		}
	}
}

var addCharacter = function(name, info){
	characters.push({
			id: id,
			name: name,
			info: info,
			image: 'assets/coming_soon.jpg'
		});
	id++;
		
};
console.log(getAllCharacters());
module.exports = { getAllCharacters: getAllCharacters, getCharactersByID: getCharactersByID, addCharacter: addCharacter };

