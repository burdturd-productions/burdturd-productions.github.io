export function compareNumbers(guess, correctNumber) {
    if(typeof guess !== 'number') {
        throw 'Parameter is not a number';
    }

    if(guess > correctNumber) {
        return 1;
    } else if(guess < correctNumber) {
        return -1;
    } else {
        return 0;
    }
} 

  //function copied from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}