function getComputerChoice(choice) {
  let computerChoice = Math.floor(Math.random() * choice);

  if (computerChoice == 0) {
    return 'rock';
  } else if (computerChoice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log(getComputerChoice(3));
