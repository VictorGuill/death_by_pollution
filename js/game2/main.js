import Entity from "./Entity.js";
import Piece from "./pieces.js";

// #region SETTINGS
const trees_amount = 30;
const mountains_amount = 10;

const gridSize = 14;
document.documentElement.style.setProperty("--gridSize", gridSize);
const gridPx = "60px";
document.documentElement.style.setProperty("--gridPx", gridPx);
// #endregion

let obstacles_id_counter = 0;
let obstacles_array = [];

let arrTrack = new Array(gridSize);
for (let i = 0; i < gridSize; i++) {
  arrTrack[i] = new Array(gridSize);
  arrTrack[i].fill(0);
}

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
      if (type == 'mountain') {
        arrTrack[row_start - 1][colum_start - 1] = type;
        arrTrack[row_start-1][colum_start] = type;
      } else {
        arrTrack[row_start - 1][colum_start - 1] = type;
      }
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

piece.addPiece(0);
piece2.addPiece(1);
piece3.addPiece(2);
let i = 3; //counter for the id of the pieces

//button to change the 3 pieces
document.getElementById("button").addEventListener("click", reloadPieces);

//function to reload the 3 pieces
function reloadPieces() {
  let pieceData = document.querySelectorAll('#piece');;
  pieceData.forEach(el => {
    el.remove();
    el = new Piece('piece');
    el.addPiece(i);
    i++;
  });
  let new_pieces = document.querySelectorAll('#piece');
  new_pieces.forEach(el => {
    el.addEventListener('dragstart', dragStartHandler);
    el.addEventListener('dragend', dragEndHandler);
  })
}

function loadPiece() {
  let pieceData = document.querySelectorAll('#piece');

  pieceData.forEach(el => {
    if (el.firstChild == null) {
      el.remove();
      let new_piece = new Piece('piece');
      new_piece.addPiece(i);
      i++;
    }
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
  // el.addEventListener('dragenter', dragEnterHandler);
  el.addEventListener('dragover', dragOverHandler);
  el.addEventListener('dragleave', dragLeaveHandler);
  el.addEventListener('drop', dropHandler);
})

function dragStartHandler(e) {
  e.dataTransfer.setData('data', e.target.id);
  e.target.style = 'opacity: 0.3;';
}

function dragEndHandler(e) {
  e.target.style = 'opacity: none;';
  e.target.style = 'border: none';
}

// function dragEnterHandler(e) {
// }

function dragOverHandler(e) {
  e.preventDefault();
  e.target.style = 'border: 2px dashed gray; background: whitesmoke';
}

function dragLeaveHandler(e) {
  e.target.style = 'border: none; background: rgb(228, 227, 227)';
}

function dropHandler(e) {
  e.preventDefault();
  dragLeaveHandler(e);
  e.preventDefault();

  let sourceElemData = e.dataTransfer.getData('data');
  let sourceElemId = document.getElementById(sourceElemData);
  this.appendChild(sourceElemId);
  sourceElemId.style = 'opacity: none;';
  sourceElemId.style = 'background-color: #dadada;';

  loadPiece();
}

//check train track
document.getElementById("button2").addEventListener("click", finish);

function finish() {
  let track = [];
  let arrTrack = new Array(2);
  arrTrack[0] = new Array(gridSize);
  arrTrack[1] = new Array(gridSize);
  let numPieces = 0;
  let trackPieces = document.querySelectorAll(".dropSpace");
  for (let i = 0; i < freeSpaces; i++) {
    // if (trackPieces[i].childElementCount !== 0) {
    //   trackPieces[i].setProperty('set position:',i);
    //   track.push(trackPieces[i]);
    //   console.log("TRACK piece:" + trackPieces[i]);
    //   numPieces++;
    // }
  }
  console.log("num pieces: " + numPieces);
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      // if () {
      //   console.log(row + " - - - - - " + col)
      //   arrTrack[row][col] = true;
      //   console.log(arrTrack[0][col])
      // }
      // else {
      //   arrTrack[row][col] = false;
      // }
    }
  }

}
