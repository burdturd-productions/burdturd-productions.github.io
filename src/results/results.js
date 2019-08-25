import store from '../store.js';

let storyImg = document.getElementById('story-image');
let textResult = document.getElementById('text-id');

let currentUser = store.getCurrentUser();
let userScore = currentUser.score;

if(userScore === 2) {
    storyImg.src = '../../assets/results-win.png';
    textResult.textContent = 'Congratulations, it turns out you made the right decision in seeking out Georgie O. Squirrel. You\'ve captured the guilty party and returned the surviving egglings to their families. "This time he was right...it WAS Aliens!"';
}
else if(userScore === 1) {
    storyImg.src = '../../assets/lose-two.png';
    textResult.textContent = 'Probably not the wisest decision to drink on the job. With or without the information from Trixie, your boss is alerted of your activities and you find yourself unemployed. The culprits are still out there and reports of eggnappings and abuse of eggcorns are on the rise';
}
else if(userScore === 0) {
    storyImg.src = '../../assets/lose-one.png';
    textResult.textContent = 'Nice job...The possums tricked you into playing games, meanwhile the culprits are still at large! In the end the Possum Posse are just victims of species profiling and have been falsely accused by you...AGAIN. Check your Biases!';
}