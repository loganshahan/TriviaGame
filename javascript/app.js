var questions = [
	{
		question: "Who holds the record for most rushing yards?",
		answers: ['Emmitt Smith', 'Zeke Williams', 'Hershell Walker'],
        correctAnswer: 0,
        answerWord : "Emmitt Smith",
	},
	{
		question: "Who was the last quarterback to win a Super Bowl?",
		answers: ['Tony Romo', 'Roger Staubach', 'Troy Aikman'],
        correctAnswer: 2,
        answerWord: "Troy Aikman"
    },
    {
		question: "What is the nickname for the new stadium?",
		answers: ['AT&T Field', 'Jerry World', 'The Star'],
        correctAnswer: 1,
        answerWord: "Jerry World"
	},
	{
		question: "What are the uniform colors?",
		answers: ['black and yellow', 'red and blue', 'blue and silver'],
        correctAnswer: 2,
        answerWord: "blue and silver"
    },
    {
		question: "How many Super Bowls have the Cowboys won?",
		answers: ['5', '4', '0'],
        correctAnswer: 0,
        answerWord: "5"
	},
	{
		question: "Who is the current starting quarterback?",
		answers: ['Tony Romo', 'Troy Aikman', 'Dak Prescott'],
        correctAnswer: 2,
        answerWord: "Dak Prescott"
    },
];

var answerTimeout = 10000;
var correct = 0;
var incorrect = 0;
var missed = 0;
var userAnswer = [];
var questionCounter = 0;
var timeLeft = 10;
var increment;



function runTimer(){
    increment = setInterval(decrement, 1000);
};

function decrement(){
    timeLeft--;
    $("#time-left").html("Time remaining: " + timeLeft + "seconds");
    if(timeLeft===0){
        stopTimer();
        userAnswer.length = 0;

        var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
		userAnswer.push(userSelection);
		// console.log(userAnswer);
		nextQ();
    }
};

function resetTimer() {
	timeLeft = 10;
	$("#time-left").html("Time remaining: " + timeLeft + " seconds");
};

function displayTimer() {
	$("#time-left").html("Answer Review");
};

function stopTimer() {
	clearInterval(increment);
};

function createRadios() {
	var responseOptions = $("#response");
	
	responseOptions.empty();
		
	for (var i = 0; i < questions[questionCounter].answers.length; i++) {
		responseOptions.append('<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="' + [i] +'"><div class="twd-opt">' + questions[questionCounter].answers[i] + '</div></input><br></label>');
	};
};

function displayQ() {
	clearQ();
	resetTimer();
    $(".questionX").html(questions[questionCounter].question);
    
	
	createRadios();
	
	$("#submit-div").append('<button type="submit" class="btn btn-default" id="submit">' + "Submit" + '</button>');
	runTimer()
	submitAnswer();
};

function submitAnswer(){
    $("#submit").on("click", function(e){
        e.preventDefault();
        userAnswer.length = 0;

        // var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
        var userSelection = $("input[name=optionsRadios]:checked").val();
		userAnswer.push(userSelection);
		console.log(userAnswer);
		nextQ();
    })
};

function displayStart() {
	$("#content").append('<a href="#" class="btn btn-primary btn-lg" id="start-button">' + "Start" + '</a>');
	
	$("#start-button").on("click", function(event) {
		event.preventDefault();
		
		firstQ();
		resetTimer();
	});
};

function reset() {
	questionCounter = 0;
	correct = 0;
	incorrect = 0;
	missed = 0;
	userAnswer = [];
	resetTimer();
};

function displayEnd() {
	clearQ();
	$("#content").append('<h3>' + "Correct answers: " + correct + '</h3><br><h3>' + "Incorrect answers: " + incorrect + '</h3><br><h3>' + "Skipped questions: " + missed + '</h3><br><br><a href="#" class="btn btn-primary btn-lg" id="restart-button">' + "Restart Game" + '</a>');
	
	$("#restart-button").on("click", function(event) {
		event.preventDefault();
		
		reset();
		clearQ();
		displayStart();
	});
};

function clearQ() {
	var questionDiv = $(".questionX");
	questionDiv.empty();

	var responsesDiv = $("#response");
	responsesDiv.empty();

	var submitDiv = $("#submit-div");
	submitDiv.empty();

	var contentDiv = $("#content");
	contentDiv.empty();

	stopTimer();
};

function checkQ() {
	clearQ();
    var correctAnswers = questions[questionCounter].correctAnswer;
    var correctAnswerWord = questions[questionCounter].answerWord;
	if (userAnswer[0] == correctAnswers) {
		$("#content").append('<h3>'+"Congratulations! You chose the right answer!" + '</h3>');
		correct++;
		displayTimer();
	}
	else if (userAnswer[0] === undefined) {
		$("#content").append('<h3>'+"Time's up!" + '</h3><br><br><h3>' + "The correct answer was: " + correctAnswerWord + '</h3>');
		missed++;
		displayTimer();
	}
	else {
        $("#content").append('<h3>'+"You chose the wrong answer." + '</h3><br><br><h3>' + "The correct answer was: " + correctAnswerWord + '</h3>');
		incorrect++;
		displayTimer();
	};
};

function nextQ() {
	checkQ();
	questionCounter++;
	if (questionCounter === questions.length) {
		setTimeout(displayEnd, answerTimeout);
	} 
	else {
		setTimeout(displayQ, answerTimeout);
	};
};

function firstQ() {
	var startContent = $("#content");
	startContent.empty(); 
	displayQ();
};

displayStart();
