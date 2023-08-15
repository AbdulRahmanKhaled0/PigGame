'use strict';

const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const totalScores = document.querySelectorAll('.score');
const currentScores = document.querySelectorAll('.current-score');
const players = document.querySelectorAll('.player');
let currentScoresValues = [0, 0];
let totalScoresValues = [0, 0];
for (let i = 0; i < currentScores.length; i++) {
  currentScoresValues[i] = currentScores[i].textContent;
  currentScoresValues[i] = Number(currentScoresValues[i]);
}
for (let i = 0; i < totalScores.length; i++) {
  totalScoresValues[i] = totalScores[i].textContent;
  totalScoresValues[i] = Number(totalScoresValues[i]);
}

// let counter = 2;
let playerActive = 0;
const switchPlayer = function () {
  // let playerNum = counter % 2;
  // counter ++;
  if (players[0].classList.contains('player--active')) {
    players[0].classList.remove('player--active');
    players[1].classList.add('player--active');
    playerActive = 1;
  } else if (players[1].classList.contains('player--active')) {
    players[1].classList.remove('player--active');
    players[0].classList.add('player--active');
    playerActive = 0;
  }
};
const hold = function () {
  totalScoresValues[playerActive] += currentScoresValues[playerActive];
  totalScores[playerActive].textContent = totalScoresValues[playerActive];
  currentScoresValues[playerActive] = 0;
  currentScores[playerActive].textContent = currentScoresValues[playerActive];
  switchPlayer();
};

const roll = function () {
  let diceValue = Math.trunc(Math.random() * 6 + 1);
  console.log(diceValue);
  if (diceValue === 6) {
    diceImg.setAttribute('src', 'dice-6.png');
    currentScoresValues[playerActive] += 6;
    currentScores[playerActive].textContent = currentScoresValues[playerActive];
    console.log(currentScores);
    console.log(currentScoresValues, totalScoresValues);
  } else if (diceValue === 5) {
    diceImg.setAttribute('src', 'dice-5.png');
    currentScoresValues[playerActive] += 5;
    currentScores[playerActive].textContent = currentScoresValues[playerActive];
    console.log(currentScores);
    console.log(currentScoresValues, totalScoresValues);
  } else if (diceValue === 4) {
    diceImg.setAttribute('src', 'dice-4.png');
    currentScoresValues[playerActive] += 4;
    currentScores[playerActive].textContent = currentScoresValues[playerActive];
    console.log(currentScores);
    console.log(currentScoresValues, totalScoresValues);
  } else if (diceValue === 3) {
    diceImg.setAttribute('src', 'dice-3.png');
    currentScoresValues[playerActive] += 3;
    currentScores[playerActive].textContent = currentScoresValues[playerActive];
    console.log(currentScores);
    console.log(currentScoresValues, totalScoresValues);
  } else if (diceValue === 2) {
    diceImg.setAttribute('src', 'dice-2.png');
    currentScoresValues[playerActive] += 2;
    currentScores[playerActive].textContent = currentScoresValues[playerActive];
    console.log(currentScores);
    console.log(currentScoresValues, totalScoresValues);
  } else if (diceValue === 1) {
    diceImg.setAttribute('src', 'dice-1.png');
    currentScoresValues[playerActive] = 0;
    currentScores[playerActive].textContent = currentScoresValues[playerActive];
    console.log(currentScores);
    console.log(currentScoresValues, totalScoresValues);
    switchPlayer();
  }
};

const newGame = function () {
  for (let i = 0; i < totalScores.length; i++) {
    currentScores[i].textContent = 0;
    totalScores[i].textContent = 0;
    currentScoresValues[i] = 0;
    totalScoresValues[i] = 0;

    if (players[1].classList.contains('player--active')) {
      players[1].classList.remove('player--active');
      players[0].classList.add('player--active');
      playerActive = 0;
    }
  }
};

// if (players[0].classList.contains('player--active')) {
//   players[0].classList.remove('player--active');
//   players[1].classList.add('player--active');
//   playerActive = 1;
// } else if (players[1].classList.contains('player--active')) {
//   players[1].classList.remove('player--active');
//   players[0].classList.add('player--active');
//   playerActive = 0;
// }

rollBtn.addEventListener('click', roll);
holdBtn.addEventListener('click', hold);
newGameBtn.addEventListener('click', newGame);
