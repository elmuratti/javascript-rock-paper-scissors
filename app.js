// Computer Choice
const getComputerChoice = () => {
    const number = Math.random();
    if (number <= 0.3333) {
        return 'rock';
    }  else if (number <= 0.6666 ){
        return 'paper';
        } else {
            return 'scissors';
        }
}

// Score start

let humanScore = 0;
let computerScore = 0;

// playRound
const playRound = () => {
    const computerChoice = getComputerChoice();
    const getHumanChoice = prompt('your turn: rock, paper or scissors', '' ).trim().toLowerCase();

    if (getHumanChoice === computerChoice){
        console.log('Draw! ' + getHumanChoice + ' vs ' + computerChoice);
    } else if (
        (getHumanChoice === 'scissors' && computerChoice === 'paper') || 
        (getHumanChoice === 'rock' && computerChoice === 'scissors') || 
        (getHumanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        console.log('You win! ' + getHumanChoice + ' beats ' + computerChoice);
    } else {
        computerScore++
        console.log('Computer wins!'  + computerChoice + ' beats ' + getHumanChoice)
    }
    console.log('New Score: ' + 'Human Score ' + humanScore + ' Computer Score '  + computerScore);
}


const playGame = () => {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore === computerScore) {
        console.log ('No One wins. Your choices was 5 x Draw! Try Again!');
    } else if (humanScore > computerScore){
        console.log('You win ' + humanScore + ' : ' + computerScore);
    } else {
        console.log('You loose '+ humanScore + ' : ' + computerScore);
    }
}

console.log(playGame());