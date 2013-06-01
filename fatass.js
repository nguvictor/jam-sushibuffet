var sushiStack = 0; //up to 10
var fatassScore = 0;

var nommingSushi = false;


function addSushi(){
	console.log('adding sushi');
	sushiStack+=1;	
	$('#stack').append('<div id="stack_sushi" style="bottom:'+sushiStack*25+'px;"></div>')
}


function removeSushi(){
	console.log('removing sushi');
	$("#stack div").last().remove();
}




$(document).ready(function() {
	
	var nomsRemaining = 2;
	
	addSushi();
	addSushi();
	addSushi();
	
	

	
	//Eat a piece of the sushi
	function nomSushi(){
		switch(nomsRemaining){
			case 2: placeSushi(); console.log( nommingSushi ); nomsRemaining-=1; break; //take from pile
			case 1: showBite1(); console.log( nommingSushi ); nomsRemaining-=1; break; //take bite 
			case 0: cleanPlate();  console.log( nommingSushi );  break; //take last bite
		}
	}
	
	//take from pile and put on plate
	function placeSushi(){
		removeSushi();
		if (sushiStack>0){
			showSushiOnPlate();
			sushiStack-=1;
			nomsRemaining=2
			nommingSushi = true;
		}

	}
	
	function showBite1(){
		$('#bite1').removeClass('hide');
		$('#sushi').addClass('hide');
	}

	function showSushiOnPlate(){
		$('#sushi').removeClass('hide');
	}
	
	function cleanPlate(){
		if (nommingSushi == true){
			fatassScore+=1;$('#fatassScore').text("Score: "+fatassScore);
		}
		nommingSushi = false;
		$('#bite1').addClass('hide');
		if (sushiStack > 0){
			nomsRemaining = 2;
		}
		
	}
	

	//Catch the keyboard Events
	$(document).keyup(function(event) {
		if (event.which == 76 && isControlEnabled) {
			nomSushi();
		}
	});
	
	$("#right").click(function() {
		if(isControlEnabled)
			nomSushi();
	});
});
