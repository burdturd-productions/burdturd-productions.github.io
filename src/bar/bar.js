import { compareNumbers, getRandomInt } from './compare-numbers.js';

const guessButton = document.getElementById('button');
const result = document.getElementById('result');
const numberInput = document.getElementById('number-input');
var gulp = new Audio('../../assets/audio/gulp.mp3');


let numberOfGuesses = 3;

guessButton.addEventListener('click', function(event) { 
    event.preventDefault();
    decrementGuesses();
    let userGuess = parseInt(numberInput.value);
    let randomNumber = getRandomInt(20);
    let result = compareNumbers(userGuess, randomNumber);
    gulp.play();

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
    window.location = 'fin.html';
    disableButton();
}


function loseDisplay() {
    result.textContent = '';
    window.location = 'fin.html';
    disableButton();
}

function decrementGuesses() {
    numberOfGuesses -= 1;
}
