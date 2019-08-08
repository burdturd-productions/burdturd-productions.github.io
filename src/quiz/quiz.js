import store from '../store.js';

// Get user inputs captured as a variable

const choiceOne = document.getElementById('choice-one');
const choiceTwo = document.getElementById('choice-two');
const choiceThree = document.getElementById('choice-three');

// Assign that a number value
// updateScore(username, score)
// throw user to results page.

let userName = store.getCurrentUser();
let currentUser = store.getUser(userName);
console.log(userName);

choiceOne.addEventListener('click', ()=> {
    event.preventDefault();
    userName.score += 1;
    store.save('current-user', currentUser);
    console.log(currentUser.score);
    window.location = 'fin.html';
});

choiceTwo.addEventListener('click', ()=> {
    event.preventDefault();
    userName.score += 1;
    store.save('current-user', currentUser);
    window.location = 'fin.html';
});

choiceThree.addEventListener('click', ()=> {
    event.preventDefault();
    userName.score += 0;
    store.save('current-user', currentUser);
    window.location = 'fin.html';
});

window.onload = function() {
    document.getElementById('quiz_audio').play();
};