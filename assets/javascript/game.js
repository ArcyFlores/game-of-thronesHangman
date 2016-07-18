// words to be guessed for each game played
​
var sigils = ['lion', 'direwolf', 'dragon', 'blackfish', 'swan', 'flayedman', 'rose', 'rooster'];
​
// variable that outputs word to be guessed 
​
var randomWord = sigils[Math.floor(Math.random ()* sigils.length)];
var letterArray = [];
var dashes = [];
​
// splits string it into an array, turns into a string, removes the commas, and replaces letters with dashes
​
var letterArray = randomWord.split('').toString().replace(/,/g," ").replace(/[a-z]/g, '_');
console.log(letterArray);
​
document.getElementById("word").innerHTML = letterArray;
​
​
​
var shownWord;
​
var chosenWord;
​
var correctGuess; 
​
var wrongGuess;
​
counter = 10;
​
// document.getElementById("guessesLeft").innerHTML()= counter;
​
document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowercase();
			if (userGuess == letterArray) {
 			correctGuess.push();
			}
			else {
			wrongGuess.push();
			counter -- ;
			}
};