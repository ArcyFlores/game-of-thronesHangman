

// GLOBAL VARIABLES 

// =====================================================================

// Arrays ans Varibles for holding data 
var wordOptions = ['stark', 'bolton', 'tully', 'lannister', 'baratheon', 'targaryen', 'martell', 'tyrell', 'greyjoy', 'arryn'];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSucceses = []; // s _ _ r _ 
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;


// FUNCTIONS (reusable locks of code that will be recalled upon when needed)
// =====================================================================

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;
     		

	// Reset
	guessesLeft = 10;
	wrongLetters = [];
	blanksAndSucceses = [];

	// Populate blanksAndSuccesses with right number of blanks stark = _ _ _ _ _ 

	for (i = 0; i < numBlanks; i++) { 
	blanksAndSucceses.push("_"); 
	}

	// Change HTML to reflect round conditions
	document.getElementById('word').innerHTML = blanksAndSucceses.join(" ");
	document.getElementById('wrong').innerHTML = wrongLetters.join(" ");
	document.getElementById('guessesLeft').innerHTML= guessesLeft;
	document.getElementById('wins').innerHTML = winCount;
	document.getElementById('losses').innerHTML = lossCount;
	// Outputs picture onto HTML
	document.getElementById('sigil').src = 'assets/images/' + selectedWord + ".jpg";

	// Testing/ Debugging
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSucceses);
	console.log(wrongLetters);
}


function checkLetters (letterGuessed){
	// Check if Letter exists in code at all 
	// if (selectedWord.indexOf(userGuess) !== -1) {
	// }
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++)	{
			if (selectedWord[i] == letterGuessed){
				isLetterInWord = true;
			}
	}

		//Check where in the word the letter exists then, populate out blanksAndSucceses 
		if (isLetterInWord){
			for (var i = 0; i < numBlanks; i++) {
				if (selectedWord[i] == letterGuessed){
					blanksAndSucceses[i] = letterGuessed;
				}
			}
		}
		//Letter was not found 
		else {
			wrongLetters.push(letterGuessed);
			guessesLeft -- ;
		}

	
	//Testing & Debugging 
	console.log(blanksAndSucceses);
}

function roundComplete(){
	console.log("Win Count: " + winCount  + "| Loss Count: " + lossCount + "| Guesses Left: " + guessesLeft);

	// Update the HTML to reflect most recent count stats
	document.getElementById('word').innerHTML= blanksAndSucceses.join(" ");
	document.getElementById('guessesLeft').innerHTML= guessesLeft;
	document.getElementById('wins').innerHTML = winCount;
	document.getElementById('losses').innerHTML = lossCount;
	document.getElementById('wrong').innerHTML = wrongLetters.join(" ");

	//Check if user won 
	if (lettersInWord.toString() == blanksAndSucceses.toString()){
		winCount++;
		alert('You Won!');

		//Update the win counter in the HTML
		document.getElementById('wins').innerHTML = winCount;

		startGame();
	}

	//Check if user lost 
	if (guessesLeft == 0 ){
		lossCount++;
		alert('You LOST!');
		document.getElementById('losses').innerHTML = lossCount;

		startGame();
	}

}
   
// MAIN PROCESS
// =====================================================================

startGame();

// Register Key Clicks 

document.onkeyup = function(event) {

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	
	checkLetters(letterGuessed);
	
	roundComplete();

	// Testing/ Debugging
	console.log(letterGuessed);
}




















