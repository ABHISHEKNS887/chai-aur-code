let randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const guessValue = document.querySelector('#guessField');
const lastResult = document.querySelector('.lastResult');
const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessedValue = parseInt(guessValue.value);
    validateGuess(guessedValue);
  });
}

function validateGuess(guessedValue) {
  if (isNaN(guessedValue)) alert('Please enter a Number');
  else if (guessedValue > 100) alert('Please enter a number less than 100.');
  else if (guessedValue < 1) alert('Please enter a number greater than 1.');
  else {
    prevGuesses.push(guessedValue);
    if (numGuess > 10) {
      displayGuess(guessedValue);
      displayMessage(`Game Over: Random number is: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guessedValue);
      checkGuess(guessedValue);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations, You guessed the correct number.`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Number is too high.');
  } else if (guess < randomNumber) {
    displayMessage('Number is too low.');
  }
}

function displayGuess(guess) {
  guessValue.value = '';
  guesses.innerHTML += `${guess}; `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  guessValue.value = '';
  guessValue.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function (e) {
    guessValue.removeAttribute('disabled', '');
    randomNumber = parseInt(Math.random() * 100) + 1;
    playGame = true;
    prevGuesses = [];
    guesses.innerHTML = '';
    numGuess = 1;
    resultParas.removeChild(p);
    lastResult.innerHTML = `${11 - numGuess}`;
  });
}
