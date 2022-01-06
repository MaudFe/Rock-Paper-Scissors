console.log("Hello, World!");

let userScore = 0;
let computerScore = 0;
let numberRounds = 1;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * choices.length);

  return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  const insensitivePlayerSel = playerSelection.toLowerCase();
  numberRounds++;
  if (
    (insensitivePlayerSel === "rock" && computerSelection === "scissors") ||
    (insensitivePlayerSel === "scissors" && computerSelection === "paper") ||
    (insensitivePlayerSel === "paper" && computerSelection === "rock")
  ) {
    userScore++;
    return `You win! ${insensitivePlayerSel} beats ${computerSelection}.`;
  } else if (insensitivePlayerSel === computerSelection) {
    return `Tie! ${insensitivePlayerSel} <=> ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${insensitivePlayerSel}.`;
  }
}

function playGame() {

  while (userScore < 5 && computerScore < 5) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = computerPlay();
    console.log(`Round number ${numberRounds}:`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Score: User ${userScore} - ${computerScore} Computer`)
  }

  if (userScore === 5) {
    return `Congrats! You win the game in ${numberRounds - 1} rounds!`;
  } else if (computerScore === 5) {
    return `Too bad! You lose in ${numberRounds - 1} rounds!`;
  }
}

console.log(playGame());