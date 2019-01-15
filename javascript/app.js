var questions = [
	{
		question: "Who holds the record for most rushing yards?",
		answers: {
			a: 'Emmit Smith',
			b: 'Zeke Williams',
			c: 'Hershell Walker'
		},
		correctAnswer: 'a'
	},
	{
		question: "Who was the last quarterback to win a Super Bowl?",
		answers: {
			a: 'Tony Romo',
			b: 'Roger Staubach',
			c: 'Troy Aikman'
		},
		correctAnswer: 'c'
    },
    {
		question: "What is the nickname for the new stadium?",
		answers: {
			a: 'AT&T Field',
			b: 'Jerry World',
			c: 'The Star'
		},
		correctAnswer: 'b'
	},
	{
		question: "What are the uniform colors?",
		answers: {
			a: 'black and yellow',
			b: 'red and blue',
			c: 'blue and silver'
		},
		correctAnswer: 'c'
    },
    {
		question: "How many Super Bowls have the Cowboys won?",
		answers: {
			a: '5',
			b: '4',
			c: '0'
		},
		correctAnswer: 'a'
	},
	{
		question: "Who is the current starting quarterback?",
		answers: {
			a: 'Tony Romo',
			b: 'Troy Aikman',
			c: 'Dak Prescott'
		},
		correctAnswer: 'c'
    },
];
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		document.getElementById("quiz").innerHTML("")
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}