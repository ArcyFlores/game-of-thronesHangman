window.onload = function (){

// words to be guessed for each game played
var sigils = ['stark', 'bolton', 'tully', 'lannister', 'baratheon', 'targaryen', 'martell', 'tyrell', 'greyjoy', 'arryn'];

var shownWord = document.getElementById("word");
var wrongLetters = document.getElementById("wrong"); 

// randomly selecting word to be guessed 
var randomWord = sigils[Math.floor(Math.random ()* sigils.length)];

	// Attempt to output different pictures for each random word chosen
	
	if (randomWord == 'stark'){
	document.getElementById('sigil').src = 'assets/images/stark.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_"];
	}
	else if (randomWord == 'bolton'){
	document.getElementById('sigil').src = 'assets/images/bolton.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_"];
	}
	else if (randomWord == 'tully'){
	document.getElementById('sigil').src = 'assets/images/tully.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_"];
	}
	else if (randomWord == 'lannister'){
	document.getElementById('sigil').src = 'assets/images/lannister.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_","_","_","_"];
	}
	else if (randomWord == 'baratheon'){
	document.getElementById('sigil').src = 'assets/images/baratheon.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_","_","_","_"];
	}
	else if (randomWord == 'targaryen'){
	document.getElementById('sigil').src = 'assets/images/targaryen.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_","_","_","_"];
	}
	else if (randomWord == 'martell'){
	document.getElementById('sigil').src = 'assets/images/martell.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_","_"];
	}
	else if (randomWord == 'greyjoy'){
	document.getElementById('sigil').src = 'assets/images/greyjoy.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_","_"];
	}
	else if (randomWord == 'arryn'){
	document.getElementById('sigil').src = 'assets/images/arryn.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_"];
	}
	else if (randomWord == 'tyrell'){
	document.getElementById('sigil').src = 'assets/images/tyrell.jpg';
	// document.getElementById('word').innerHTML = ["_","_","_","_","_","_"];
	}

	// replacing letters from randomWord with underscores
	var word = randomWord.split("");
	console.log(word);
	var dashes = " ";
	for (i = 0; i < word.length; i++) { 
	dashes += "_ ";
	shownWord.innerHTML = dashes;
	}	

	var correctGuess= [];

	var wrongGuess = [];

	var wins = 0;

	var guessCounter = 10;

	document.getElementById("guessesLeft").innerHTML = guessCounter;
			
				document.onkeyup = function(event) {
							var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				if (guessCounter > 0){
									if (word.indexOf(userGuess) !== -1) {
									// correctGuess.push(userGuess);
									dashes.replace(/charAt(word.indexOf(userGuess))/g, userGuess);
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
// if (validateGuess(guess)) {" with "if (validateGuess(guess) && keepPlaying) 
// var letterArray.replace(/letterArray/g, userGuess);
// count.createTextNode(guessCounter).appendChild();
};