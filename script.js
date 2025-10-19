// Initial scores
let humanScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    return 'rock';
  } else if (computerChoice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// PlayRound
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return 'It is a Tie!';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    ++humanScore;

    return `Human WIN: ${humanChoice} beat ${computerChoice}`;
  } else {
    ++computerScore;

    return `Computer WIN ${computerChoice} beat ${humanChoice}`;
  }
}

const resultDiv = document.getElementById('resultDiv');
const scoreDiv = document.getElementById('score');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

rockButton.onclick = () => handleClick('rock');
paperButton.onclick = () => handleClick('paper');
scissorsButton.onclick = () => handleClick('scissors');
resetButton.onclick = () => resetGame();

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function resetGame() {
  scoreDiv.textContent = 'Human: 0 - Computer: 0';
  resultDiv.textContent = 'Make your move!';
  enableButtons();
  humanScore = 0;
  computerScore = 0;
}

function handleClick(humanChoice) {
  let computerChoice = getComputerChoice();
  let message = playRound(humanChoice, computerChoice);
  scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

  resultDiv.textContent = message;
  if (humanScore === 5) {
    resultDiv.textContent = 'Human wins the game!';
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = 'Computer wins the game!';
    disableButtons();
  }
}
