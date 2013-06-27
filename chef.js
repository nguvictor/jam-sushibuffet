	var chefScore = 0;
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
			case 2: cleanBoard();addSushi(); pieceCount = 0;chefScore+=1;$('#chefScore').text("Score: "+chefScore);break; //sushi is complete send over the sushi give chef a point and restart
			
		}
	}
	
	
	//Catch the keyboard Events
	$(document).keyup(function(event) {
	  if (event.which == 83 && isControlEnabled ) {
		addPiece();
	   }
	});
	/*
	$("#left").click(function() {
		if(isControlEnabled)
			addPiece();
	});*/
	function handleHammer(ev) {
            console.log(ev);
            // disable browser scrolling
            ev.gesture.preventDefault();

            switch(ev.type) {
                case 'tap':
					addPiece();
                    break;
				case 'doubletap':
					addPiece();
                    break;
            }
        }
		


        $('#left').hammer({ drag_lock_to_axis: true })
            .on("tap doubletap", handleHammer);



});
