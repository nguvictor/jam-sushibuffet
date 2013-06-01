$(document).ready(function() {
	var pieceCount = 0; //What piece of sushi assembling
	
	//Add the rice image
	function addRice(){
		$('#rice').removeClass('hide');
	}
	
	//Add the fish
	function addFish(){
		$('#fish').removeClass('hide');
	}
	
	//Clean the board
	function cleanBoard(){
		$('#rice').addClass('hide');
		$('#fish').addClass('hide');
		pieceCount = 0;
	}
	
	function addPiece(){
		switch(pieceCount){
			case 0: addRice();pieceCount+=1;break; //Place the rice
			case 1: addFish();pieceCount+=1;break; //place the fish
			case 2: cleanBoard();addSushi(); pieceCount = 0;break; //sushi is complete send over the sushi and restart
			
		}
	}
	
	
	//Catch the keyboard Events
	$(document).keyup(function(event) {
	  if (event.which == 83) {
		addPiece();
	   }
	});
});
