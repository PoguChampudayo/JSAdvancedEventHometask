import Game from '../game';

const game = new Game();

document.addEventListener('DOMContentLoaded', game.initiate());

// function getRandomInt(max, min, outNumber) {
//     let result = Math.floor(Math.random() * (max - min) + min);
//     if (result == outNumber) {
//       return getRandomInt(max, min, outNumber);
//     } else {
//       return result;
//     }
//   }
// const button = document.querySelector('.beginButton')
// const score = document.querySelector('.score')
// button.addEventListener('click', () => {
//     button.classList.add('hidden')
//     score.classList.remove('hidden')
//     const goblin = document.createElement("img");
//     goblin.className = "goblin";
//     goblin.addEventListener("click", () => {

//     })
//     const table = document.querySelectorAll(".cellTable")
//     table[Math.round(Math.random() * 15)].appendChild(goblin);
//     setInterval(() => {
//         let currentPlace = Number(goblin.parentNode.id);
//         let newPlace = getRandomInt(15, 0, currentPlace);
//         goblin.remove();
//         table[newPlace].appendChild(goblin);
//       }, 1000);

// })
