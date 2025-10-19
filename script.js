// // Initial scores
// let humanScore = 0;
// let computerScore = 0;

// // Computer choice
// function getComputerChoice(choice) {
//   let computerChoice = Math.floor(Math.random() * choice);

//   if (computerChoice == 0) {
//     return 'rock';
//   } else if (computerChoice == 1) {
//     return 'paper';
//   } else {
//     return 'scissors';
//   }
// }

// // Human choice
// function getHumanChoice() {
//   let humanChoice = prompt("Please enter 'rock', 'paper', 'scissors': ");
//   return humanChoice.toLowerCase();
// }

// // PlayRound
// function playRound(humanChoice, computerChoice) {
//   if (humanChoice == computerChoice) {
//     console.log('It is a Tie!');
//   } else if (
//     (humanChoice === 'rock' && computerChoice === 'scissors') ||
//     (humanChoice === 'scissors' && computerChoice === 'paper') ||
//     (humanChoice === 'paper' && computerChoice === 'rock')
//   ) {
//     console.log(`Human WIN: ${humanChoice} beat ${computerChoice}`);
//     ++humanScore;
//   } else {
//     console.log(`Computer WIN ${computerChoice} beat ${humanChoice}`);
//     ++computerScore;
//   }
// }

// // Play Game

// function playGame() {
//   let roundsLeft = 5;

//   while (roundsLeft > 0) {
//     let computerChoice = getComputerChoice(3);
//     let humanChoice = getHumanChoice();
//     console.log(
//       `Human choose ${humanChoice} & Computer choose ${computerChoice}`
//     );
//     playRound(humanChoice, computerChoice);
//     console.log(`Human: ${humanScore} and Computer: ${computerScore}`);

//     roundsLeft--;
//   }

//   console.log('Game over!');
//   if (humanScore == computerScore) {
//     console.log('It is a tie');
//   } else if (humanScore > computerScore) {
//     console.log('Human Win the five round game');
//   } else {
//     console.log('Computer win the five round game');
//   }
// }

// playGame();
