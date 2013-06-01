	//Global variables
	var isRunning = false;
	var isControlEnabled = false;
	

$(document).ready(function() {
	var beginCountDownNumber = 3;
	var countDown = 60;
	//Show Dialog press spacee to start
	
	//Regular Count down
	function CountDownStep(){
		console.log("Cot down step");
		setTimeout(function(){
			
			//If we still have time on the clock keep counting down
			if(countDown > 0){
				setTimeout(CountDownStep, 1000);
				countDown -=1;
			}
		});
		
		if(countDown == 0){
			$('#countdown').text("Go");
			$('#countdown').addClass('hide');
			$('#countdown').removeClass('hide');
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
});
