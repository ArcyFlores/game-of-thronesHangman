window.onload = function (){

//GLOBAL VARIABLES
// words to be guessed for each game played
var sigils = ['stark', 'bolton', 'tully', 'lannister', 'baratheon', 
'targaryen', 'martell', 'tyrell', 'greyjoy', 'arryn'];
var shownWord = " ";
var dashes = [];
var wrongLetters = []; 
var correctGuesses = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessCounter = 10;

// randomly selecting word to be guessed 
var randomWord = sigils[Math.floor(Math.random ()* sigils.length)];
var word = randomWord.split("");	
	for (i = 0; i < word.length; i++) { 
	dashes += "_ ";
	shownWord.innerHTML = dashes;
	}
	document.getElementById()	
	document.getElementById('sigil').src = 'assets/images/' + randomWord + ".jpg";		
	
	document.onkeyup = function(event) {
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (guessCounter > 0){
						if (word.indexOf(userGuess) !== -1) {
						
						}
						else{
						wrongGuess.push(userGuess);
						var tempString = " ";
							for (i = 0; i < wrongGuess.length; i++){
								tempString += wrongGuess[i] + " ";
								wrongLetters.innerHTML= tempString;
							}
							guessCounter -- ;
						}	
						
						document.getElementById("guessesLeft").innerHTML = guessCounter;
			}

			else {
				var reload = alert('Game Over, hit refresh to start again!')
			
				if(reload = true){
					location.reload();
				}
			}
	}	
	document.getElementById("guessesLeft").innerHTML = guessCounter;
  

   

			

};