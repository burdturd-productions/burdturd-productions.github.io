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
    textResult.textContent = 'Probably not the wisest decision to drink on the job. With or without the information from Trixie, your boss is alerted of your activities and you find yourself unemployed. The culprits are still out there and reports of eggnappings and abuse of eggcorns are on the rise';
}
else if(userScore === 0) {

    storyImg.src = '../../assets/lose-one.png';
    textResult.textContent = 'The possum posie were just caught in the middle. Check your Biases!';
}