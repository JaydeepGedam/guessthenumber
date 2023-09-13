let randomNum = Math.floor((Math.random() * 100) + 1);;

const bt = document.querySelector("#button")
const ip = document.querySelector("#input")
const guessN = document.querySelector(".guessNum")
const remaining = document.querySelector(".remG")
const msgs = document.querySelector(".msg")
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numOfGuesses = 1;

let playGame = true;

if(playGame){
    bt.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if (guess < 1){
        alert('Please enter a number more than 1');
    } 
    else if (guess > 100){
        alert('Please enter a  number less than 100');
    }
    else{
        prevGuesses.push(guess);
        
        if(numOfGuesses !== 6){
            displayGuess(guess);
            checkGuess(guess);
        }
        else{
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
      displayMessage(`You guessed it right`);
      endGame();
    } 
    else if (guess < randomNum) {
      displayMessage(`Random number is high`);
    } 
    else if (guess > randomNum) {
      displayMessage(`Random number is low`);
    } 
}

function displayGuess(guess){
    ip.value = '';
    guessN.innerHTML += `${guess}, `;
    numOfGuesses++;
    remaining.innerHTML = `${7 - numOfGuesses} `;
}


function displayMessage(message) {
    msgs.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    ip.value = '';
    ip.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start new Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
  
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNum = Math.floor((Math.random() * 100) + 1);
    prevGuesses = [];
    numOfGuesses = 1;
    guessN.innerHTML = '';
    remaining.innerHTML = `${7 - numOfGuesses} `;
    ip.removeAttribute('disabled');
    startOver.removeChild(p);
    msgs.innerHTML='';
    playGame = true;
    });
}


