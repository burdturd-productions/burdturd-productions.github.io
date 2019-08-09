const roundsCounter = document.getElementById('rounds-counter');
const winsTally = document.getElementById('wins-tally');
const lossesTally = document.getElementById('losses-tally');
const userDice = document.getElementById('user-dice');
const alienDice = document.getElementById('alien-dice');
const diceRoll = document.getElementById('dice-roll');
var diceAudio = new Audio('../../assets/audio/dice.wav');

// how are results being rendered?
    // disable button?
    // add new button?

let rounds = 0;
let wins = 0;
let losses = 0;

function getDieSide() {
    let side = Math.floor(Math.random() * 6) + 1;
    return side;
}

diceRoll.addEventListener('click', () => {
    event.preventDefault();
    
    // Get user and computer rolls
    let alienRoll = getDieSide();
    let userRoll = getDieSide();
    diceAudio.play();

    // Compare rolls
    if(userRoll > alienRoll) {
        wins++;
        winsTally.textContent = wins;
    }
    else if(userRoll < alienRoll) {
        losses++;
        lossesTally.textContent = losses;
    }
    else if(userRoll === alienRoll) {
        // Reroll dice until sides are different

        while(userRoll === alienRoll) {
            alienRoll = getDieSide();
            userRoll = getDieSide();
        }

        if(userRoll > alienRoll) {
            wins++;
            winsTally.textContent = wins;
        }
        else if(userRoll < alienRoll) {
            losses++;
            lossesTally.textContent = losses;
        }
    }

    // Update display
    userDice.classList.remove('dice');
    alienDice.classList.remove('dice');

    const userSrc = 'assets/dice-assets/' + userRoll + '.png';
    userDice.src = userSrc;
    const alienSrc = 'assets/dice-assets/' + alienRoll + '.png';
    alienDice.src = alienSrc;

    rounds++;
    roundsCounter.textContent = rounds;

    // Check number of rounds 
    if(rounds === 5) {
         // Check if user won or lost

        if(wins > losses) {
            window.location = 'fin.html';

        }       
        else if(wins < losses) {
            window.location = 'fin.html';

        }
    }
});