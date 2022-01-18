let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const pScore = document.querySelector(".p-score");
const cScore = document.querySelector(".c-score");
const result = document.querySelector(".result");
const options = document.querySelectorAll(".button");
let playerChoice;
let computerChoice;


function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const computerPlay = Math.floor(Math.random() * choices.length);

  return choices[computerPlay];
}


options.forEach(option => option.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
} ))


function playRound(playerSelection, computerSelection) {
  rounds++;
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    result.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    result.innerText = `Draw! ${playerSelection} === ${computerSelection}.`;
  } else {
    computerScore++;
    result.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  updateScore();
  playGame();
}


function updateScore() {
  pScore.innerText = playerScore;
  cScore.innerText = computerScore;
}


function playGame() {

  const optionsDisplay = document.querySelector(".options");
  if (playerScore === 5) {
    result.innerText = `Congrats! You win the game in ${rounds} rounds!`;
    optionsDisplay.style.display = "none";
  } else if (computerScore === 5) {
    result.innerText = `Too bad! You lose in ${rounds} rounds!`;
    optionsDisplay.style.display = "none";
  }
}

document.querySelector(".new-game").addEventListener('click', () => {
  location.reload();
})

