import store from '../store.js';

// Get user inputs captured as a variable

const choiceOne = document.getElementById('choice-one');
const choiceTwo = document.getElementById('choice-two');
const choiceThree = document.getElementById('choice-three');

// Assign that a number value
// updateScore(username, score)
// throw user to results page.

choiceOne.addEventListener('click', ()=> {
    event.preventDefault();
    let score = 0;
    store.updateScore(score);
    window.location = 'possum.html';
});

choiceTwo.addEventListener('click', ()=> {
    event.preventDefault();
    let score = 1;
    store.updateScore(score);
    window.location = 'bar.html';
});

choiceThree.addEventListener('click', ()=> {
    event.preventDefault();
    let score = 2;
    store.updateScore(score);
    window.location = 'squirrel.html';
});
window.onload = function() {
    document.getElementById('quiz_audio').play();
};
