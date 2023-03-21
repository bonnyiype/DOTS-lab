/*
 * DOTS: Level Two
 *
 */
// level-two.js
const scoreDisplay = document.querySelector('.js-score');
const balls = document.querySelectorAll('.js-ball');
const levelWinner = document.querySelector('.level-winner');
let score = 0;

for (let ball of balls) {
  ball.addEventListener('click',() => {
    score += 10;
    scoreDisplay.innerText = `Score: ${score}`;

    if (score >= 100) {
      levelWinner.style.opacity = 1;
    }
  });
}
