var wins = 0
var losses = 0
var guessesLeft = 0
var guessesSoFar = ''
var bodyEl = document.getElementById('main')
var randomLetter = ''
var alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F',
                 'G', 'H', 'I', 'J', 'K', 'L', 
                 'M', 'N', 'O', 'P', 'Q', 'R', 
                 'S', 'T', 'U', 'V', 'W', 'X', 
                 'Y', 'Z']

//get all elements from HTML DOM
var winsEL = document.getElementById('wins')
var lossesEL = document.getElementById('losses')
var guessesSoFarEL = document.getElementById('guesses-so-far')
var guessesLeftEL = document.getElementById('guesses-left')

//reset/start the game
function reset(){

  //get a random letter from alphabet
  randomLetter = 
    alphabet[Math.floor(Math.random()*alphabet.length)]
  console.log(randomLetter)
  guessesLeft = 10
  guessesSoFar = ''
}

//bind the body to the keydown event
bodyEl.onkeydown = function(e){
  
  e = e || window.event;

  var letter = String.fromCharCode(e.keyCode)
  
  //if the letter is part of the alphabet
  //i.e. ignore non-alpha characters
  if(alphabet.indexOf(letter) > -1){
    
    //if the letter matches the random 
    //secret letter increment wins and reset
    if(letter === randomLetter){
        wins++
        reset()
    }
    //if the letter has not been tried before
    else if(guessesSoFar.indexOf(letter) < 0){
      guessesSoFar += letter
      guessesLeft--
    }    
  }  
  
  //if there are no more guesses left
  //update losses and reset the game
  if(guessesLeft === 0){
    losses++
    reset()
  }
  
  //update the dom score board
  winsEL.innerHTML = wins.toString()
  lossesEL.innerHTML = losses.toString()
  guessesLeftEL.innerHTML = guessesLeft.toString()

  //split the guesses so far into array
  //the rejoin with comma in between letters
  guessesSoFarEL.innerHTML = guessesSoFar.split('').join(',')
}

//start the game
reset()