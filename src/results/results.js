import store from '../store.js';

let storyImg = document.getElementById('story-image');
let textResult = document.getElementById('text-id');

let currentUser = store.getCurrentUser();
let userScore = currentUser.score;

// Need an if statement that Renders results based on score.
if(userScore === 2) {
    storyImg.src = '../../assets/results-win.png';
    textResult.textContent = 'Georgie O. Squirrel was right, it WAS Aliens!';
}
else if(userScore === 1) {
    storyImg.src = '../../assets/lose-two.png';
    textResult.textContent = 'Something doesn\'t add up, are you sure you solved the case? Maybe you shouldn\'t have had so many drinks with those cats.';
}
else if(userScore === 0) {

    storyImg.src = '../../assets/lose-one.png';
    textResult.textContent = 'The possum posie were just caught in the middle. Check your Biases!';
}