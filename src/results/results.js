const sideImg = document.getElementById('side-id');
const storyImg = document.getElementById('story-id');
const textResult = document.getElementById('text-id');

let userScore = 1;

const results = [
    {
        id: 'win',
        sideArt: 'assets/character-right.png',
        storyArt: 'assets/wtfbirb.jpeg',
        storyTxt: 'You Win!',
    },
    {
        id: 'lose',
        sideArt: 'assets/character-right.png',
        storyArt: 'storyLose.jpeg',
        storyTxt: 'You Lose!',
    }
];
// Need and if statement that Renders results based on score.
if(userScore > 1) {
    sideImg.src = results[0].sideArt;
    storyImg.src = results[0].storyArt;
    textResult.textContent = results[0].storyTxt;
}
else {
    sideImg.src = results[1].sideArt;
    storyImg.src = results[1].storyArt;
    textResult.textContent = results[1].storyTxt;
}

export default results;


// Need Assets, IMG's
// wire to STORE.JS to use live data.
