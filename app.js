"use strict";

// Game logic
function checkNumber(robotNumber, userInput) {
  //Check if user loses
  if (currentScore === 1) {
    document.querySelector(".robot").style.backgroundImage =
      "url(img/robot-sad.svg)";
    document.querySelector(".check").textContent = `Play again?`;
    document.querySelector(".current-score").textContent = `0`;
    document.querySelector(
      ".robot-says-heading"
    ).textContent = `Bleep blorp! You lose!`;
    return;
  }

  //Actual game
  if (userInput == robotNumber) {
    document.querySelector(
      ".robot-says-heading"
    ).textContent = `Bleep blorp! You win!`;
    document.querySelector(".robot").style.backgroundImage =
      "url(img/robot-happy.svg)";
    document.querySelector(".robot-number-field").textContent = robotNumber;
    if (currentScore > highScore) highScore = currentScore;
    document.querySelector(".high-score").textContent = highScore;
    document.querySelector(".check").textContent = `Play again?`;
  } else if (userInput >= robotNumber) {
    document.querySelector(".robot-says-heading").textContent = `Try lower!`;
    currentScore--;
    document.querySelector(".current-score").textContent = currentScore;
  } else {
    document.querySelector(".robot-says-heading").textContent = `Try higher!`;
    currentScore--;
    document.querySelector(".current-score").textContent = currentScore;
  }
}

// Reset game to play again
function resetGame() {
  //Generate new number
  robotNumber = Math.floor(Math.random() * (1 - 20) + 20);
  // Show number in console for debugging
  console.log(`The new number is ${robotNumber}. Still cheating!`);
  document.querySelector(".robot").style.backgroundImage =
    "url(img/robot-default.svg)";
  currentScore = 10;
  document.querySelector(".current-score").textContent = currentScore;
  document.querySelector(".check").textContent = `Check!`;

  document.querySelector(
    ".robot-says-heading"
  ).textContent = `What humber am I thinking of?`;
}

// Generate number
let robotNumber = Math.floor(Math.random() * (1 - 20) + 20);
// Show number in console for debugging
console.log(`The random number is ${robotNumber}. Cheater!`);

// Keeping score
let currentScore = 10;
let highScore = 0;

// Run game
let userInput;
document.querySelector(".check").addEventListener("click", function () {
  if (document.querySelector(".check").textContent === `Check!`) {
    userInput = document.querySelector(".input").value;
    checkNumber(robotNumber, userInput);
  } else {
    resetGame();
  }
});
