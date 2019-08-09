import getThrow from './rps.js';
import { didPlayerWin } from './did-player-win.js';

const throwButton = document.getElementById('throw-button');
const result = document.getElementById('result');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
var dice = new Audio('../../assets/audio/possum_laugh.wav');



let wins = 0;
let losses = 0;
let draws = 0;


let turns = 0;

throwButton.addEventListener('click', () => {
    const computerChoice = getThrow();
    const userChoice = document.querySelector('input:checked').value;
    const gameResult = didPlayerWin(userChoice, computerChoice);
    dice.play();
    turns++;
    
    if(turns === 10) {
        window.location = 'fin.html';
    }
    result.classList.remove('hidden');
    const src = 'assets/rps/' + computerChoice + '.png';
    result.src = src;
    display(gameResult);
    
});
function display(result) {
    if(result === true) {
        message.textContent = 'Player Wins!!';
        wins++;
        winCount.textContent = wins;
    }
    else if(result === false) {
        message.textContent = 'Player Loses!!';
        losses++;
        lossCount.textContent = losses;
    }
    else if(result === 'draw') {
        message.textContent = 'Player Draws!!';
        draws++;
        drawCount.textContent = draws;
    }
}
window.onload = function() {
    document.getElementById('possum_audio').play();
};
