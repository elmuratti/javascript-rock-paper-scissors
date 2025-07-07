// counter
let counterHuman = 0;
let counterComputer = 0;

// Auswahl Computer
const getComputerChoice = () => {
    const number = Math.random();
    if (number <= 0.3333) {
        return 'rock';
    }  else if (number > 0.3333 && number <= 0.6666 ){
        return 'paper';
        } else {
            return 'scissors';
        }
}






// Challenge
const challenge = () => {

// Auswahl Mensch 
const getHumanChoice = prompt('your turn: rock, paper or scissors', '' );
const computerChoice = getComputerChoice();
console.log('human = ' + getHumanChoice);
console.log('computer = ' + computerChoice); 
console.log(typeof(getHumanChoice)); 
console.log(typeof(computerChoice));
    if (getHumanChoice === computerChoice){

        return 'draw';
    } else if ((getHumanChoice === 'scissors' && computerChoice === 'paper') || (getHumanChoice === 'rock' && computerChoice === 'scissors') || (getHumanChoice === 'paper' && computerChoice === 'rock')){
        counterHuman++;
        console.log('You win!')
    } else {
        counterComputer++
        console.log('Computer wins!')
    }
    return 'Human Score ' + counterHuman + ' Computer Score '  + counterComputer;
}

console.log(challenge())
console.log('Final - Human: ' + counterHuman + ', Computer: ' + counterComputer);

