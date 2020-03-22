// Array for my project
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

// Pick a Random randomWord
var randomWord = months[Math.floor((Math.random() * months.length))];

// Create Array to store the guessed letters
var answerArray = [];

// Loop through answerArray and display the blank pointer _ 
for (let i = 0; i < randomWord.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = randomWord.length;

// The Game Logic
while (remainingLetters > 0) {
  alert(answerArray.join(" "));

  // Get the guess from the player
  var guess = prompt("Guess a letter (months names) or click Cancel to stop playing.");
  if (guess === null) {
    //If there are no guesses left, exit the loop
    break;
  }else if (guess.length !== 1) {
    alert("Please Enter a single letter.");
  }else {
    //Update the game states with guess
    for (let j=0; j<randomWord.length; j++) {
      if (randomWord[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

