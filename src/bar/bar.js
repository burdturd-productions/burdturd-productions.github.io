import { compareNumbers, getRandomInt } from './compare-numbers.js';

const guessButton = document.getElementById('button');
const result = document.getElementById('result');
const numberInput = document.getElementById('number-input');
const hiFive = document.getElementById('hi-five'); 
const youLose = document.getElementById('you-lose');

let numberOfGuesses = 3;

guessButton.addEventListener('click', function(event) { 
    event.preventDefault();
    decrementGuesses();
    let userGuess = parseInt(numberInput.value);
    let randomNumber = getRandomInt(20);
    let result = compareNumbers(userGuess, randomNumber);

    if(result === -1) {
        resultMessage('Trixie is not amused...better drink up!');
    }

    if(result === 1) {
        resultMessage('Whoa there! The room is starting to spin...better slow down\
        !');
    }

    if(result === 0) {
        winDisplay();
    }

    if(numberOfGuesses === 0) {
        loseDisplay();
    }
});

function disableButton() {
    guessButton.disabled = true;
}

function resultMessage(string) {
    result.textContent = string;
}

function winDisplay() {
    result.textContent = '';
    hiFive.classList.remove('hidden');
    disableButton();
}

// window.location = 'fin.html';

function loseDisplay() {
    result.textContent = '';
    youLose.classList.remove('hidden');
    disableButton();
}

function decrementGuesses() {
    numberOfGuesses -= 1;
}
