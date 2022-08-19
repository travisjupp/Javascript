let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  let randomInt = Math.floor(Math.random() * 9 + 1);
  return randomInt
};

function compareGuesses(human, comp, target) {
  target = generateTarget();
  let hResult = Math.abs(human - target);
  let cResult = Math.abs(comp - target); 
  if (hResult < cResult || hResult === cResult) {
    return true;
  } else {
    return false;
  }
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore = humanScore + 1;
  } else if (winner === 'computer') {
    computerScore = computerScore + 1;
  }
};

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
};

// console.log(`compareGuesses func: ${compareGuesses(5, 4)}`);
// updateScore('computer');
// advanceRound();
compareGuesses(5, 4)
console.log(`human score: ${humanScore}`);
console.log(`comp score: ${computerScore}`);
console.log(`current round: ${currentRoundNumber}`)

// console.log(generateTarget());