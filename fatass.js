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
		switch(nomsRemaining){
			case 2: showBite0();nomsRemaining-=1;break; //take a bite
			case 1: showBite1();nomsRemaining-=1;break; //take another bite
			case 0: refreshPlate();addSushi(); nomsRemaining=2;break; //completed noming, replace if exists
		}
	}
	
	function refreshPlate(){
		if (sushiPieces>0){
			showSushi();
		}

	}
	
	function showSushi(){
		$('#rice').removeClass('hide');
	}
	
	function showBite0(){
		$('#rice').removeClass('hide');
	}
	
	function showBite1(){
		$('#rice').removeClass('hide');
	}
	

	//Catch the keyboard Events
	$(document).keyup(function(event) {
	  if (event.which == 76 && isControlEnabled) {
		 alert('fatass');
		 nomSushi();
	   }
	});
});
