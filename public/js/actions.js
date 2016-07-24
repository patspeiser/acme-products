//doc ready w/o jquery 
document.addEventListener('DOMContentLoaded', function(event){


//pull all action functions here
	var editButton = document.getElementById('edit');
	if (editButton){
		editButton.onclick = function(){
			console.log('edit action');
		}
	}
	
	var deleteButton = document.getElementById('delete');
	if (deleteButton) {
		deleteButton.onclick = function(){
			console.log('delete action');
		}
	}

	var addCharacter = document.getElementById('add');
	if (addCharacter){
		addCharacter.onclick = function(){
			console.log('add action');
		}
	};

});
