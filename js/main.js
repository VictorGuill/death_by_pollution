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

const start = new Entity(0, "start", 2, 3);
start.add();
obstacles_id_counter++;
obstacles_array.push(start);

const end = new Entity(1, "end", 12, 10);
end.add();
obstacles_id_counter++;
obstacles_array.push(end);

addObstacles(mountains_amount, "mountain", 1, 0);
addObstacles(trees_amount, "tree", 0, 0);

// functions

function addObstacles(amount, type, columnOffset, rowOffset) {
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
