import Entity from "./Entity.js";

// #region SETTINGS
const trees_amount = 20;
const mountains_amount = 10;
document.documentElement.style.setProperty("--mapSize", "85vmin");

const gridSize = 14;
document.documentElement.style.setProperty("--gridSize", gridSize);
// #endregion

let obstacles_id_counter = 0;
let obstacles_array = [];

const start = new Entity('start', "start", 2, 2);
start.add();
obstacles_id_counter++;
obstacles_array.push(start);

const end = new Entity('end', "end", 13, 13);
end.add();
obstacles_id_counter++;
obstacles_array.push(end);

addItems(mountains_amount, "mountain", 1, 0);
addItems(trees_amount, "tree", 0, 0);

let blankSpaces = [];
addBlankItems(gridSize*gridSize - obstacles_id_counter, "dropSpace", 0, 0);

// functions
function addItems(amount, type, columnOffset, rowOffset) {
  for (let i = 0; i < amount; i++) {
    // determines if we add div to map or not
    let add_to_map = true;

    // generate positions
    const colum_start = randomIntFromInterval(1, gridSize - columnOffset);
    const row_start = randomIntFromInterval(1, gridSize - rowOffset);

    // create new object
    const new_obstacle = new Entity(
      obstacles_id_counter,
      type,
      colum_start,
      row_start
    );

    obstacles_array.forEach((element) => {
      if (checkCollision(new_obstacle, element)) {
        add_to_map = false;
        i--;
      }
    });

    // if new object didn't collide with any existing element, we add it
    if (add_to_map) {
      new_obstacle.add();
      obstacles_array.push(new_obstacle);
      obstacles_id_counter++;
    }
  }
}

function checkCollision(new_elem, elem) {
  if (
    new_elem.row_start >= elem.row_start &&
    new_elem.row_end <= elem.row_end &&
    new_elem.colum_end > elem.colum_start &&
    new_elem.colum_start <= elem.colum_end
  ) {
    return true;
  }
  return false;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addBlankItems(size, type, col, row) {
  for (let i = 0; i < size; i++) {
    let add_to_map = true;

    const dropSpace = new Entity(
      obstacles_id_counter,
      type,
      col,
      row
    );

    blankSpaces.forEach((element) => {
      if (checkCollision(dropSpace, element)) {
        add_to_map = false;
        i--;
      }
    });

    if (add_to_map) {
      dropSpace.add();
      obstacles_array.push(dropSpace);
    }
  }
}


const piecesElem = document.querySelectorAll('#piece');
const dropSpaces = document.querySelectorAll('.dropSpace');
console.log(piecesElem);

piecesElem.forEach(el => {
  el.addEventListener('dragstart', dragStartHandler);
  el.addEventListener('dragend', dragEndHandler);
})

dropSpaces.forEach(el => {
  el.addEventListener('dragover', dragOverHandler);
  el.addEventListener('drop', dropHandler);
})

function dragStartHandler(e) {
  let img = e.target.querySelector('img'); 
  e.dataTransfer.setData('text', img.src);
  e.target.style = 'width: "30px"; height: "30px";';
}
function dragEndHandler(e) {
  e.target.style = '';
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  e.preventDefault();

  const sourceElemData = e.dataTransfer.getData('text');
  const indexOf = sourceElemData.indexOf("/media");
  let route = ".." + sourceElemData.substring(indexOf);
  console.log(route);
  e.target.innerHTML = `<img src="`+ route +`" width="60px" height="60px"/>`;
}