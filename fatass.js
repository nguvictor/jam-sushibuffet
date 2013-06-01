	//This is the prototype for chef to send a sushi
	function addSushi(){
		console.log('adding sushi');
		stackSushi();
	}

$(document).ready(function() {

	var sushiPieces = 0; //up to 10
	var nomsRemaining = 2;

	
	//Add a sushi to the pile
	function stackSushi(){
		sushiPieces+=1;
	}
	
	//Eat a piece of the sushi
	function nomSushi(){
		//if exists 1
	}


	//Catch the keyboard Events
	$(document).keyup(function(event) {
	  if (event.which == 76) {
		 alert('fatass');
		 nomSushi();
	   }
	});
});
