/*
 * DOTS: Level One
 *
 */

//level-one.js
const scoreDisplay = document.querySelector('.js-score');
const ball = document.querySelector('.js-ball');
const levelWinner = document.querySelector('.level-winner');
let score = 0;

ball.addEventListener('click',()=> {
  score += 10;
  scoreDisplay.innerText = `Score: ${score}`;

  if (score >= 100) {
    levelWinner.style.opacity = 1;
  }
});




