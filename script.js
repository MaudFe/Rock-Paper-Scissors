const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let userScore = 0;
let computerScore = 0;
let tieRounds = 0;
let numberRounds = 1;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * choices.length);

  return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  numberRounds++;
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    ++userScore;
    updateScore();
    if (playGame()) {
      userScore = computerScore = tieRounds = 0;
      updateScore();
    }
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    ++tieRounds;
    updateScore();
    if (playGame()) {
      userScore = computerScore = tieRounds = 0;
      updateScore();
    }
    return `Tie! ${playerSelection} <=> ${computerSelection}.`;
  } else {
    ++computerScore;
    updateScore();
    if (playGame()) {
      userScore = computerScore = tieRounds = 0;
      updateScore();
    }
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function clickListener(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

rockBtn.addEventListener('click', clickListener);
paperBtn.addEventListener('click', clickListener);
scissorsBtn.addEventListener('click', clickListener);

function updateScore() {
  document.getElementById('player-score').textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("tie-score").textContent = tieRounds;
}

function playGame() {
  const results = document.querySelector("#results");
  const div = document.createElement('div');
  div.setAttribute('id', 'res');

  if (userScore === 5) {
    div.textContent = `Congrats! You win the game in ${numberRounds - 1} rounds!`;
    results.appendChild(div);
    return true;
  } else if (computerScore === 5) {
    div.textContent = `Too bad! You lose in ${numberRounds - 1} rounds!`;
    results.appendChild(div);
    return true;
  }
  if (document.body.contains(document.getElementById("res"))) {
    document.getElementById("res").remove();
  }
  return false;
}

if (playGame()) {
  userScore = computerScore = tieRounds = 0;
  updateScore();
}
