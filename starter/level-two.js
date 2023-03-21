/*
 * DOTS: Level Two
 *
 */
// level-two.js
const scoreDisplay = document.querySelector('.js-score');
const balls = document.querySelectorAll('.js-ball');
const levelWinner = document.querySelector('.level-winner');
let score = 0;

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener('click', function() {
    score += 10;
    scoreDisplay.innerText = `Score: ${score}`;

    if (score >= 100) {
      levelWinner.style.opacity = 1;
    }
  });
}
