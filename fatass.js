var sushiStack = 0; //up to 10
var fatassScore = 0;

//This is the prototype for chef to send a sushi
function addSushi(){
	console.log('adding sushi');
	sushiStack+=1;
	
	//$('#stack').append('<div id="stack_sushi" style="bottom:25px;"></div>')
	$('#stack').append('<div id="stack_sushi" style="bottom:'+sushiStack*25+'px;"></div>')
}


function removeSushi(){
	//count latest.
	//look at stack... traverse it... 
	//console.log ( $("stack:last-child") );
	$("#stack div").last().remove(); //css('background-color','red');
	console.log ("derp");
}




$(document).ready(function() {
	
	var nomsRemaining = 2;
	
	addSushi();
	addSushi();
	addSushi();

	
	//Eat a piece of the sushi
	function nomSushi(){
		switch(nomsRemaining){
			case 2: placeSushi(); nomsRemaining-=1; break; //take a bite
			case 1: showBite1(); nomsRemaining-=1; break; //completed noming, replace if exists
			case 0: cleanPlate();  fatassScore+=1;$('#fatassScore').text("Score: "+fatassScore); break; //take another bite
		}
	}
	
	//take from pile and put on plate
	function placeSushi(){
		removeSushi();
		if (sushiStack>0){
			showSushi();
			sushiStack-=1;
			nomsRemaining=2
		}

	}
	
	function showBite1(){
		$('#bite1').removeClass('hide');
		$('#sushi').addClass('hide');
	}

	function showSushi(){
		$('#sushi').removeClass('hide');
	}
	
	function cleanPlate(){
		
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
});
