import store from '../store.js';

let sideImg = document.getElementById('side-image');
let storyImg = document.getElementById('story-image');
let textResult = document.getElementById('text-id');

let currentUser = store.getCurrentUser();
let userScore = currentUser.score;
console.log(userScore);

// Need and if statement that Renders results based on score.
if(userScore > 0) {
    sideImg.src = '../../assets/character-right.png';
    storyImg.src = '../../assets/wtfbirb.jpg';
    textResult.textContent = 'You Fucking Did It...Win!';
}
else {
    sideImg.src = '../../assets/character-right.png';
    storyImg.src = '../../assets/placeholder-pigeon.jpg';
    textResult.textContent = 'You Were Terrible...Don\'t Even Bother Trying Again...Loser!';
}