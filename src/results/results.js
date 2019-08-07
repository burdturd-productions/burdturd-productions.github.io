import store from '../store.js';

let sideImg = document.getElementById('side-image');
let storyImg = document.getElementById('story-image');
let textResult = document.getElementById('text-id');

let userName = store.getCurrentUser();
let user = store.getUser(userName);
let userScore = user.score;
console.log(userScore);

// Need and if statement that Renders results based on score.
if(userScore > 0) {
    sideImg.src = '../../assets/character-right.png';
    storyImg.src = '../../assets/wtfbirb.jpg';
    textResult.textContent = 'You Win!';
}
else {
    sideImg.src = '../assets/character-right.png';
    storyImg.src = '../assets/placeholder-pigeon.jpg';
    textResult.textContent = 'You Lose!';
}

