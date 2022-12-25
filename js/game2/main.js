import * as ct from "./constants.js";
import Entity from "./Entity.js";
import Piece from "./pieces.js";
import * as f from "./functions.js";
import * as dragdrop from "./DragDropFunctions.js";

// #region SETTINGS
const trees_amount = 25;
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
if (arrTrack[ct.startRow - 1][ct.startColumn - 1] == 0) {
  arrTrack[ct.startRow - 1][ct.startColumn - 1] = 'start';
}
if (arrTrack[ct.endRow - 1][ct.endColumn - 1] == 0) {
  arrTrack[ct.endRow - 1][ct.endColumn - 1] = 'end';
}

const start = new Entity('start', "start", ct.startRow, ct.startColumn);
start.add();
obstacles_id_counter++;
obstacles_array.push(start);

const end = new Entity('end', "end", ct.endRow, ct.endColumn);
end.add();
obstacles_id_counter++;
obstacles_array.push(end);

addItems(mountains_amount, "mountain", 1, 0);
addItems(trees_amount, "tree", 0, 0);

addBlankItems(gridSize, "dropSpace", 0, 0);

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
      }
    });

    // if new object didn't collide with any existing element, we add it
    if (add_to_map) {
      new_obstacle.add();
      if (type == 'mountain') {
        arrTrack[row_start - 1][colum_start - 1] = type;
        arrTrack[row_start - 1][colum_start] = type;
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
    for (let j = 0; j < size; j++) {
      if (arrTrack[i][j] == 'mountain') {
        j++;
      } else if (arrTrack[i][j] == 0) {
        const dropSpace = new Entity(
          i + "drop" + j,
          type,
          col,
          row
        );

        dropSpace.add();
      }
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
let i = 3; //count pieces

export let numReload = 0;

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
    el.addEventListener('dragstart', dragdrop.dragStartHandler);
    el.addEventListener('dragend', dragdrop.dragEndHandler);
  });
  numReload++;
  console.log(numReload)

}

//load pieces first time
export function loadPiece() {
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
    el.addEventListener('dragstart', dragdrop.dragStartHandler);
    el.addEventListener('dragend', dragdrop.dragEndHandler);
  })
}

//DRAG AND DROP
const piecesElem = document.querySelectorAll('#piece');
const dropSpaces = document.querySelectorAll('.dropSpace');

piecesElem.forEach(el => {
  el.addEventListener('dragstart', dragdrop.dragStartHandler);
  el.addEventListener('dragend', dragdrop.dragEndHandler);
})

dropSpaces.forEach(el => {
  // el.addEventListener('dragenter', dragdrop.dragEnterHandler);
  el.addEventListener('dragover', dragdrop.dragOverHandler);
  el.addEventListener('dragleave', dragdrop.dragLeaveHandler);
  el.addEventListener('drop', dragdrop.dropHandler);
})

document.addEventListener('DOMSubtreeModified', (e) => {
  
  let dropImg = document.querySelectorAll(".dropSpace > .img0, .dropSpace > .img1, .dropSpace > .img2, .dropSpace > .img3, .dropSpace > .img4, .dropSpace > .img5, .dropSpace > .img6, .dropSpace > .img7");

  let unlock_start = false;
  let dropStart = [];
  let dropStartTop = document.getElementById("0drop1");
  console.log("ST: " + dropStartTop);
  if (dropStartTop != null) {
    dropStart.push(dropStartTop);
  }
  let dropStartLeft = document.getElementById("1drop0");
  console.log("SL: " + dropStartLeft);
  if (dropStartLeft != null) {
    dropStart.push(dropStartLeft);
  }
  let dropStartBottom = document.getElementById("2drop1");
  console.log("SB: " + dropStartBottom);
  if (dropStartBottom != null) {
    dropStart.push(dropStartBottom);
  }
  let dropStartRight = document.getElementById("1drop2");
  console.log("SR: " + dropStartRight);
  if (dropStartRight != null) {
    dropStart.push(dropStartRight);
  }
  
  console.log(dropStart);

  let startChild = 0;
  
  for (let i = 0; i < dropStart.length; i++) {
    startChild += dropStart[i].childElementCount;
    console.log("start CHILDREN:  " + startChild);
  }

  if (startChild == 1) {
    unlock_start = true;
  }

  let dropEnd = [];
  let unlock_end = false;

  let dropEndTop = document.getElementById("11drop12");
  if (dropEndTop !== null) {
    dropEnd.push(dropEndTop);
  }
  let dropEndLeft = document.getElementById("12drop11");
  console.log("EL: " + dropEndLeft);
  if (dropEndLeft !== null) {
    dropEnd.push(dropEndLeft);
  }
  let dropEndBottom = document.getElementById("13drop12");
  console.log("EB: " + dropEndBottom);
  if (dropEndBottom !== null) {
    dropEnd.push(dropEndBottom);
  }
  let dropEndRight = document.getElementById("12drop13");
  console.log("ER: " + dropEndRight);
  if (dropEndRight != null) {
    dropEnd.push(dropEndRight);
  }

  let endChild = 0;
  for (let i = 0; i < dropEnd.length; i++) {
    endChild += dropEnd[i].childElementCount;
    console.log("end CHILDREN:  " + endChild);
  }

  if (endChild == 1) {
    unlock_end = true;
  }

  if (dropImg.length >= 21 && unlock_start && unlock_end) {
    document.getElementById("buttonCheckTrack").classList.remove('blocked');
    document.getElementById("buttonCheckTrack").classList.add('no_blocked');
  }

  let no_blocked = document.querySelector("div#buttonCheckTrack.no_blocked");
  if (no_blocked != null) {
    no_blocked.addEventListener("click", f.end_game);
  }
})