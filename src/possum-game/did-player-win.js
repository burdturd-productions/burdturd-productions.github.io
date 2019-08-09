
export function didPlayerWin(userChoice, computerChoice) {
    if(userChoice === 'rock' && computerChoice === 'scissors') {
        return true;
    }
    else if(userChoice === 'paper' && computerChoice === 'rock') {
        return true;
    }          
    else if(userChoice === 'scissors' && computerChoice === 'paper') {
        return true;
    }
    else if(userChoice === computerChoice) {
        return 'draw';            
    }
    else {
        return false;
    }
}