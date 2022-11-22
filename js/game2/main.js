import Entity from "./Entity.js";
import Piece from "./pieces.js";

// #region SETTINGS
const trees_amount = 20;
const mountains_amount = 10;

const gridSize = 14;
document.documentElement.style.setProperty("--gridSize", gridSize);
const gridPx = "60px";
document.documentElement.style.setProperty("--gridPx", gridPx);
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

//calculate the number of free spaces left
const freeSpaces = gridSize * gridSize - (obstacles_id_counter + mountains_amount);
//array of free spaces
let blankSpaces = [];
addBlankItems(freeSpaces, "dropSpace", 0, 0);

// function 
function addItems(amount, type, columnOffset, rowOffset) {
  for (let i = 0; i < amount; i++) {
    // determines if we add div to map or not
    let add_to_map = true;

    // generate positions
    const colum_start = randomInt(1, gridSize - columnOffset);
    const row_start = randomInt(1, gridSize - rowOffset);

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

function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//functions to add de drop spaces around the map
function addBlankItems(size, type, col, row) {
  for (let i = 0; i < size; i++) {
    let add_to_map = true;

    const dropSpace = new Entity(
      "drop" + i,
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
    }
  }
}

//add pieces
const piece = new Piece('piece');
const piece2 = new Piece('piece');
const piece3 = new Piece('piece');

piece.addPiece();
piece2.addPiece();
piece3.addPiece();

//button to change the 3 pieces
document.getElementById("button").addEventListener("click", reloadPieces);

function reloadPieces() {
  let pieceData = document.querySelectorAll('#piece');
  console.log(pieceData); 
  pieceData.forEach(el => {
    el.remove();
    el = new Piece('piece');
    el.addPiece();
  });
  let new_pieces = document.querySelectorAll('#piece');
  new_pieces.forEach(el => {
    el.addEventListener('dragstart', dragStartHandler);
    el.addEventListener('dragend', dragEndHandler);
  })
}

//DRAG AND DROP
const piecesElem = document.querySelectorAll('#piece');
const dropSpaces = document.querySelectorAll('.dropSpace');

piecesElem.forEach(el => {
  el.addEventListener('dragstart', dragStartHandler);
  el.addEventListener('dragend', dragEndHandler);
})

dropSpaces.forEach(el => {
  el.addEventListener('dragenter', dragEnterHandler);
  el.addEventListener('dragover', dragOverHandler);
  el.addEventListener('drop', dropHandler);
})

function dragStartHandler(e) {
  let img_src = e.target.src;
  e.dataTransfer.setData('text', img_src);
  console.log("IMG SRC: " + img_src);
  e.target.style = 'opacity: 0.3;';
}
function dragEndHandler(e) {
  e.target.style = 'opacity: none;';
}

function dragEnterHandler(e) {
  // e.target.style = 'border: 2px dashed gray; background: whitesmoke';
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
  e.target.innerHTML = `<img src="` + route + `" width="60px" height="60px"/>`;
  e.target.style = "background-color: #dadada;";
}
