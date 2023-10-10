export function getRandomInt(max, min, outNumber) {
  const result = Math.floor(Math.random() * (max - min) + min);
  if (result === outNumber) {
    return getRandomInt(max, min, outNumber);
  }
  return result;
}

export default class Game {
  constructor() {
    this.goblin = document.createElement('img');
    this.goblin.className = 'goblin';
    this.table = document.querySelectorAll('.cellTable');
    this.button = document.querySelector('.beginButton');
    this.score = document.querySelector('.score');
    this.winScore = this.score.querySelector('.winScore');
    this.loseScore = this.score.querySelector('.loseScore');
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.spawnGoblin = this.spawnGoblin.bind(this);
    this.fieldOnClick = this.fieldOnClick.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  initiate() {
    this.button.addEventListener('click', this.buttonOnClick);
  }

  spawnGoblin(outNumber = -1) {
    this.table[getRandomInt(15, 0, outNumber)].appendChild(this.goblin);
  }

  endGame() {
    this.button.classList.remove('hidden');
    this.score.classList.add('hidden');
    if (this.loseScore.textContent === '5') {
      alert('Вы проиграли!');
    } else if (this.winScore.textContent === '5') {
      alert('Вы выиграли!');
    }
    this.goblin.remove();
    this.winScore.textContent = 0;
    this.loseScore.textContent = 0;
    clearInterval(this.goblins);
    this.table.forEach((element) => {
      element.removeEventListener('click', this.fieldOnClick);
    });
  }

  buttonOnClick() {
    this.button.classList.add('hidden');
    this.score.classList.remove('hidden');
    this.spawnGoblin();
    this.goblins = setInterval(() => {
      if (this.goblin.parentNode) {
        const currentPlace = Number(this.goblin.parentNode.id);
        this.goblin.remove();
        this.spawnGoblin(currentPlace);
        this.loseScore.textContent = Number(this.loseScore.textContent) + 1;
        if (this.loseScore.textContent === '5') { this.endGame(); }
      } else {
        this.spawnGoblin();
      }
    }, 1000);
    this.table.forEach((element) => {
      element.addEventListener('click', this.fieldOnClick);
    });
  }

  fieldOnClick(event) {
    if (event.target === this.goblin) {
      this.winScore.textContent = Number(this.winScore.textContent) + 1;
      this.goblin.remove();
    }

    if (this.winScore.textContent === '5') {
      this.endGame();
    }
  }
}
