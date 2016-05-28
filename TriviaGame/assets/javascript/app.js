window.onload = function(){
//  $('#start').on('click', timer.start);
$('#start').click(timer.start)
};


//$('#start').click(startTrivia);

function startTrivia (){
	//start timer, load Trivia in main-container
  
}


var timer = {
  time:30,
  reset: function(){
    timer.time = 30;
    $('#timer-display').html('Time Remaining: 30');
  },
  start: function(){
    counter = setInterval(timer.count, 1000);
  },
  count: function(){
    timer.time--;
    $('#timer-display').html('Time Remaining: ' + timer.time);
  },
  timeUp: function(){
  	//empty main container, display results
  }
};



		<!-- Begin
		// Insert number of questions
		var numQues = 4;

		// Insert number of choices in each question
		var numChoi = 3;

		// Insert number of questions displayed in answer area
		var answers = new Array(4);

		// Insert answers to questions
		answers[0] = "Cascading Style Sheets";
		answers[1] = "Dynamic HTML";
		answers[2] = "Netscape";
		answers[3] = "Common Gateway Interface";

		// Do not change anything below here ...
		function getScore(form) {
		  var score = 0;
		  var currElt;
		  var currSelection;
		  for (i=0; i<numQues; i++) {
		    currElt = i*numChoi;
		    for (j=0; j<numChoi; j++) {
		      currSelection = form.elements[currElt + j];
		      if (currSelection.checked) {
		        if (currSelection.value == answers[i]) {
		          score++;
		          break;
		        }
		      }
		    }
		  }
		  score = Math.round(score/numQues*100);
		  form.percentage.value = score + "%";
		  var correctAnswers = "";
		  for (i=1; i<=numQues; i++) {
		    correctAnswers += i + ". " + answers[i-1] + "\r\n";
		  }
		  form.solutions.value = correctAnswers;
		}
		//  End -->