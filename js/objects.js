const numMounts = 90;
const numTrees = 100;
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
        div.style.color = 'white';
        div.style.width = '60px';
        div.style.height = '60px';
        div.style.borderRadius = '30px';
        div.style.position = 'relative';
        randomPosition(div, false);
    }
);

//Function for the random position of the objects.
function randomPosition(obj, isMount) {
    let startEl = document.querySelector('#start');
    let startPosition = getComputedStyle(startEl);
    let endEl = document.querySelector('#end');
    let endPosition = getComputedStyle(endEl);

    do {

        if (isMount) {
            obj.style.gridColumnStart = getRandom(1, size - 1); //Column position
            obj.style.gridRowStart = getRandom(1, size); //Row position
        } else {
            obj.style.gridColumnStart = getRandom(1, size); //Column position
            obj.style.gridRowStart = getRandom(1, size); //Row position
        }

        if (fullPosition(obj.style.gridColumnStart, obj.style.gridRowStart)) {
            if (isMount) {
                obj.style.gridColumnStart = getRandom(1, size - 1); //Column position
                obj.style.gridRowStart = getRandom(1, size); //Row position
            } else {
                obj.style.gridColumnStart = getRandom(1, size); //Column position
                obj.style.gridRowStart = getRandom(1, size); //Row position
            }
        }

    } while ((obj.style.gridColumnStart == startPosition.gridColumnStart
        && obj.style.gridRowStart == startPosition.gridRowStart)
        || (obj.style.gridColumnStart == endPosition.gridColumnStart
            && obj.style.gridRowStart == endPosition.gridRowStart));

}

/* FUNCTION TO KNOW THE FULL POSITIONS.
 * 
 */
function fullPosition(col, row) {
    let mountElems = document.querySelectorAll('.mount');
    let i = 0;
    let fullPosition = false;

    while (i < mountElems.length && !fullPosition) {
        let mountStyle = getComputedStyle(mountElems[i]);
        if (col == mountStyle.gridColumnStart && row == mountStyle.gridRowStart) {
            fullPosition = true;
        }
        else {
            i++;
        }
    }

    return fullPosition;
}