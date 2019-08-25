import store from '../store.js';

// Get user inputs captured as a variable

const choiceOne = document.getElementById('choice-one');
const choiceTwo = document.getElementById('choice-two');
const choiceThree = document.getElementById('choice-three');

// Assign that a number value
// updateScore(username, score)
// throw user to results page.

// use a common function:
function updateScore(score, location) {
    store.updateScore(score);
    window.location = location;
}

// event.preventDefault() should be used with form,
// not button.

choiceOne.addEventListener('click', ()=> {
    updateScore(0, 'possum.html');
});

choiceTwo.addEventListener('click', ()=> {
    updateScore(1, 'bar.html');
});

choiceThree.addEventListener('click', ()=> {
    updateScore(2, 'squirrel.html');
});

window.onload = function() {
    document.getElementById('quiz_audio').play();
};
