$(document).ready(function() {
// Theme Song//
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "theme-song.mp3");

	//Song button//
	$(".theme-button").on("click", function() {
		audioElement.play();
	});

	$(".pause-button").on("click", function() {
		audioElement.pause();
	

//How many letters can be pressed//
var doubleWord = ['a','b','c','d','e',
			'f','g'.'h','i','j','k'
			,'l','m','n','o','p','q',
			'r','s','t','u','v','w','x',
			'y','z'];


//Holds all the words//
var wordBank=	['hydrogen','sodium','argon',
				'helium','potassium','krypton'];
//Hold Chosen word//
var chosenWord= "";
//Holds letter in word//
var lettersInWord= [];
//Holds number of blanks//
var numBlanks= 0;
// Holds blanks and successes//
var blanksandSuccesses= [];
//Holds wrong guesses//
var wrongLetters= [];

//Counters//
var winCount= 0;
var loseCount= 0;
var guessesLeft= 9;
var rightGuessCounter= 0;		
//FUNCTIONS//
//=========================================================

function reset()
{
	//Chooses word randomly from the wordBank//
	chosenWord = wordBank[Math.floor(Math.random()* wordBank.length)];
	//underscore set-up for words//
	lettersInWord= chosenWord.split('');
	//Get number of blanks//
	numBlanks= lettersInWord.length;
//==========================================================
letterGuessed = 0;
rightGuessCounter = 0;
guessesLeft = 9;
wrongLetters= [];
blanksandSuccesses= [];
doubleWord= ['a','b','c','d','e',
			'f','g'.'h','i','j','k'
			,'l','m','n','o','p','q',
			'r','s','t','u','v','w','x',
			'y','z'];
	startGame();
}
function startGame()
{
	//Chooses random word from word bank//
	chosenWord= wordBank[Math.floor(Math.random()* wordBank.length)];
	//underscore set-up for words//
	lettersInWord= chosenWord.split('');
	//Get number of blanks//
	numBlanks= lettersInWord.length;


//RESET//
//================================================================================
letterGuessed = 0;
rightGuessCounter = 0;
guessesLeft = 9;
wrongLetters= [];
blanksandSuccesses= [];
doubleWord= ['a','b','c','d','e',
			'f','g'.'h','i','j','k'
			,'l','m','n','o','p','q',
			'r','s','t','u','v','w','x',
			'y','z'];
	startGame();
}	

function startGame()
{
	//Chooses random word from word bank//
	chosenWord= wordBank[Math.floor(Math.random()* wordBank.length)];
	//underscore set-up for words//
	lettersInWord= chosenWord.split('');
	//Get number of blanks//
	numBlanks= lettersInWord.length;


//RESET//
//================================================================================
rightGuessCounter = 0;
guessesLeft = 9;
wrongLetters= [];
blanksandSuccesses= [];
doubleWord= ['a','b','c','d','e',
			'f','g'.'h','i','j','k'
			,'l','m','n','o','p','q',
			'r','s','t','u','v','w','x',
			'y','z'];

//Blanks//
for( var i=0; i < numBlanks; i++)
{
	blanksandSuccesses.push('_');
	document.getElementById('wordToGuess').innerHTML = blanksandSuccesses;
}

//Changes in HTML//
document.getElementById('wordToGuess').innerHTML = blanksandSuccesses.join(' ');
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('winCounter').innerHTML = winCount;
document.getElementById('lossCounter').innerHTML = loseCount;
document.getElementById('wrongGuesses').innerHTML = wrongLetters;

//Testing//
console.log(chosenWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksandSuccesses);
}


function compareLetters(userKey){
if(userKey === doubleWord)
{
	//If player key exist in chosen word//
	if(chosenWord.indexOf(userKey) > -1)
	{
	//loops depending on blanks//
	for(var i=0; i < numBlanks; i++)
		{
		//Fills in right index using key//
		if(lettersInWord[i] === userKey)
		{
			rightGuessCounter++;
			blanksandSuccesses[i] = userKey;
			document.getElementById('wordToGuess').innerHTML = blanksandSuccesses.join(' ');
		}
	}
}
}
{
//Test//
console.log(blanksandSuccesses);
}
//Wrong Keys
else{
	wrongLetters.push(userKey);
	guessesLeft--;

//Changes HTML//
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;

//Test Console//
	console.log('Wrong Letters = ' + wrongLetters);
	console.log('Guesses left are ' + guessesLeft);
	
	}
}
function winLose(){
//Checks to see if player word matches guesses//
	if( rightGuessCounter == numBlanks){
		//Counts Win
		winCount++;
		//Changes HTML
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		reset();
	}
//When number of Guesses reaches 0, you lose.//
	else if(guessesLeft ===0){
		//Counts Losses
		loseCount++;
		//Changes HTML//
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');

	}

//Main//
//===============================================================================
startGame();
document.onkeyup = function(event)
{
	//saves letters//
	var letterGuessed = event.key;

	compareLetters(letterGuessed);
	winLose();
}
};


