const cells = document.querySelectorAll('td');
let activeCell = 0;
let nextCell = 0;

function getRandomCell(arr) {
  return Math.floor(Math.random() * arr.length);
}

function hideGoblin(index) {
  cells[index].innerHTML = '';
}

function showGoblin(index) {
  cells[index].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png" alt="goblin">';
}

setInterval(() => {
  hideGoblin(activeCell);

  while (nextCell === activeCell) {
    nextCell = getRandomCell(cells);
  }

  showGoblin(nextCell);

  activeCell = nextCell;
}, 1000);
