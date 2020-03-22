var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var randomWord = months[Math.floor((Math.random() * months.length))];
console.log(randomWord);

var resultArray = [];
var totalLettersTried = [];

var showData = document.querySelector('#show_guess_letter');
var showTotalLetters = document.querySelector('total_letters_tried');


for (let i = 0; i < randomWord.length; i++) {
  resultArray[i] = "-"; 
}

showData.innerHTML = resultArray.join(" ");

var remainingLetters = randomWord.length;



// user keypress

document.addEventListener('keyup', (e) => {
 if(e.keyCode > 64 && e.keyCode < 91){
  for(let i = 0; i < randomWord.length; i++) {

    if(e.key === randomWord[i]) {

      resultArray[i] = randomWord[i];
      showData.innerHTML = resultArray.join(" ");

      totalLettersTried.push(e.key);
      
      remainingLetters--;
      
      if (remainingLetters === 0) {
        showImg();
      }
      
    }else {
      totalLettersTried.push(e.key);
    }
    
  }
}
});


function showImg() {  
  var rightSection = document.querySelector('.right_section');
  rightSection.style.backgroundImage = "url('./assets/images/winner.jpg')"
}