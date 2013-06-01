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
			case 0: addRice();break; //Place the rice
			case 1: addFish();break; //place the fish
			case 2: cleanBoard();addSushi(); pieceCount = 0;break; //sushi is complete send over the sushi and restart
			
		}
	}
	
	
	//Catch the keyboard Events
	$(document).keydown(function(event) {
	  if (event.which == 83) {
		console.log('adding Piece');
		addPiece();
		pieceCount+=1;
	   }
	});
});
