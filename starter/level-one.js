/*
 * DOTS: Level One
 *
 */

// level-one.js
// const scoreDisplay = document.querySelector('.js-score');
// const ball = document.querySelector('.js-ball');
// const levelWinner = document.querySelector('.level-winner');
// let score = 0;

// ball.addEventListener('click', function() {
//   score += 10;
//   scoreDisplay.innerText = `Score: ${score}`;

//   if (score >= 100) {
//     levelWinner.style.opacity = 1;
//   }
// });


const scoreDisplay = document.querySelector('.js-score');
const ball = document.querySelector('.js-ball');
const levelWinner = document.querySelector('.level-winner');
let score = 0;
let position = 500;

// Set interval to update ball position every 10 milliseconds
let interval = setInterval(moveBall, 10);

function moveBall() {
  // Update the position of the ball
  position += 1;
  

  // Check if the player has won
  if (position >= 1000) {
    clearInterval(interval); // Stop the interval
    levelWinner.style.opacity = 1;
  }
}

ball.addEventListener('click', function() {
  score += 10;
  scoreDisplay.innerText = `Score: ${score}`;
});