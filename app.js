const getComputerChoice = () => {
    const number = Math.random();
    console.log(number)
    if (number <= 0.3333) {
        return 'rock';
    }  else if (number > 0.3333 && number <= 0.6666 ){
        return 'paper';
        } else {
            return 'scissors';
        }
}



const getHumanChoice = () => prompt('Your turn: Rock, Paper or Scissor', '' );
