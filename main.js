	//Global variables
	var isRunning = false;
	var isControlEnabled = false;
	

$(document).ready(function() {
	var beginCountDownNumber = 0; //Count down to begin
	var countDown = 10; //Count down until game ends
	//Show Dialog press spacee to start
	
	//Regular Count down
	function CountDownStep(){
		setTimeout(function(){
			
			//If we still have time on the clock keep counting down
			if(countDown > 0){
				setTimeout(CountDownStep, 1000);
				countDown -=1;
			}
		});
		
		if(countDown == 0){
			isControlEnabled = false;
			$('#countdown').text("0");
			$('#countdown').addClass('hide');
			$('#countdown').removeClass('hide');
			
			if(chefScore == fatassScore)
				$('#result').text('Tie!');
			else if(chefScore > fatassScore)
				$('#result').text('Left Side Wins');
			else if(chefScore < fatassScore)
				$('#result').text('Right Side Wins');
			$('#result').removeClass('hide');
			//CountDownStep();
		}
		else
			$('#countdown').text(countDown);
	}
	
	//A single timeout for counting
	function BeginCountDownStep(){
		
		setTimeout(function(){
			//If we still have time on the clock keep counting down
			if(beginCountDownNumber > -1){
				beginCountDownNumber -=1;
				setTimeout(BeginCountDownStep, 1000);
			}
		});
		//Say Go
		if(beginCountDownNumber == 0){
			$('#begincountdown').text("Go");
		} else if(beginCountDownNumber == -1){
			$('#begincountdown').text("Go");
			$('#begincountdown').addClass('hide');
			$('#countdown').removeClass('hide');
			isControlEnabled = true;
			CountDownStep();
		}
		else
			$('#begincountdown').text(beginCountDownNumber);
	}
	
	
	
	//The regular countdown timer
	function countDown(){
		
	}
	
	//The Ready set go countdown
	function beginCountDown(){
		$('#begincountdown').removeClass('hide');
		$('#dialog').addClass('hide');
		BeginCountDownStep();
	}
	
	
	//Catch the keyboard Events
	$(document).keyup(function(event) {
	  if (event.which == 32) {
		  //If the game isn't running
		  if(!isRunning){

			//Display initial countdown!
			beginCountDown();
			isRunning = true;
		  }
	   }
	});
	
	
	$("#dialog").click(function() {
	
		  if(!isRunning){
			$('#dialog').css( 'z-index', '3' )

			//Display initial countdown!
			beginCountDown();
			isRunning = true;
			}
		 
	});
	
});
