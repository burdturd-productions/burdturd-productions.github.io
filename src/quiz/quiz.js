import store from '../store.js';

// Get user inputs captured as a variable

const choiceOne = document.getElementById('choice-one');
const choiceTwo = document.getElementById('choice-two');
const choiceThree = document.getElementById('choice-three');

// Assign that a number value
// updateScore(username, score)
// throw user to results page.
let allUsers = store.getAllUsers();
let currentUser = store.getCurrentUser();

let userObject = store.getUser(currentUser);
console.log(userObject);

choiceOne.addEventListener('click', ()=> {
    event.preventDefault();
    userObject.score += 1;
    for(let i =)

    store.save('current-user', userObject);
    // window.location = 'fin.html';
});

choiceTwo.addEventListener('click', ()=> {
    event.preventDefault();
    userObject.score += 1;

    store.save('current-user', userObject);
    // window.location = 'fin.html';
});

choiceThree.addEventListener('click', ()=> {
    event.preventDefault();
    userObject.score += 0;

    store.save('current-user', userObject);
    // window.location = 'fin.html';
});