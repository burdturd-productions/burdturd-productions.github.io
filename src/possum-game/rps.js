export function getThrowFromNumber(number) {
    if(number === 0) {
        return 'rock';
    }
    else if(number === 1) {
        
        return 'paper';
    }
    else if(number === 2) {
        return 'scissors';
    }

}
function getThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    const result = getThrowFromNumber(randomNumber);
    return result;
}
export default getThrow;