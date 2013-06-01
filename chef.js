$(document).ready(function() {
	var pieceCount = 0; //What piece of sushi assembling
	
	//Add the rice image
	function addRice(){
	}
	
	//Add the fish
	function addFish(){
	}
	
	function addPiece(){
		switch(pieceCount){
			case 0: addRice();break; //Place the rice
			case 1: addFish();break; //place the fish
			case 2: addSushi(); pieceCount = 0;break; //sushi is complete send over the sushi and restart
			
		}
	}
	
	
	//Catch the keyboard Events
	$(document).keydown(function(event) {
	  if (event.which == 83) {
		 addPiece();
	   }
	});
});
