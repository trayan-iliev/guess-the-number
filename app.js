"use strict";

// Game logic
function checkNumber(robotNumber, userInput) {
  if (userInput == robotNumber) {
    document.querySelector(".robot-says").textContent = `You win!`;
    if (currentScore > highScore) highScore = currentScore;
  } else if (userInput >= robotNumber) {
    document.querySelector(".robot-says").textContent = `Try lower!`;
    currentScore--;
  } else {
    document.querySelector(".robot-says").textContent = `Try higher!`;
    currentScore--;
  }
}

// Keeping score
let currentScore = 20;
let highScore = 0;

// Show number in console for debugging
const robotNumber = Math.floor(Math.random() * (1 - 20) + 20);
// Generate number
console.log(`The random number is ${robotNumber}. Cheater!`);

// Run game
let userInput;
document.querySelector(".check").addEventListener("click", function () {
  userInput = document.querySelector(".input").value;
  checkNumber(robotNumber, userInput);
  console.log(currentScore, highScore);
});