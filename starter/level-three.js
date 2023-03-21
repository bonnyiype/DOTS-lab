/*
 * DOTS: Level Three
 *
 */
// level-three.js
const scoreDisplay = document.querySelector('.js-score');
const balls = document.querySelectorAll('.js-ball');
const levelWinner = document.querySelector('.level-winner');
let score = 0;

for (let ball of balls) {
  ball.addEventListener('click',(event) => {
 
    let increment = parseInt(event.target.getAttribute('data-increment'));
    score += increment;
    scoreDisplay.innerText = `Score: ${score}`;

    console.log(increment)

    if (score >= 100) {
      levelWinner.style.opacity = 1;
    }
  });
}

