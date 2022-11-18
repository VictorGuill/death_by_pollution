const numMounts = 6;
const numTrees = 50;
const size = 14;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//Mountains
var mounts = [];
for (let i = 0; i < numMounts; i++) {
    mounts.push("");
}
mounts.forEach(
    function () {
        let div = document.createElement("div");
        div.className = "mount";
        div.innerHTML = '<img src="../media/game2/mount2.png" width="60px" height="60px"/>';
        document.querySelector('#map').appendChild(div);
        randomPosition(div, true);
    }
);

//Trees
var tree = [];
for (let i = 0; i < numTrees; i++) {
    tree.push("");
}
tree.forEach(
    function () {
        let div = document.createElement("div");
        div.className = "tree";
        div.innerHTML = '<img src="../media/game2/thetree.png" width="60px" height="60px"/>';
        document.querySelector('#map').appendChild(div);
        
        randomPosition(div, false);
    }
);

//Function for the random position of the objects.
function randomPosition(obj, isMount) {
    let x = 0;
    let full = false;
    do{
        if (isMount) {
            obj.style.gridColumnStart = getRandom(1, size - 1); //Column position
        } else {
            obj.style.gridColumnStart = getRandom(1, size); //Column position
        }
        obj.style.gridRowStart = getRandom(1, size); //Row position

        full = fullPosition(obj.style.gridColumnStart, obj.style.gridRowStart);
        x++;
    } while (full && x < 10);
}

//FUNCTION TO KNOW THE FULL POSITIONS.
function fullPosition(col, row) {
    let divElems = document.querySelectorAll('#map div');
    let i = 0, fullPosition = false;

    while (i < divElems.length-1 && !fullPosition) {
        let divStyle = getComputedStyle(divElems[i]);
        if (col == divStyle.gridColumnStart && row == divStyle.gridRowStart) {
            fullPosition = true;
        } else {
            i++;
        }
    }
    return fullPosition;
}