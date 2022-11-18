const numMounts = 6;
const numTrees = 30;
const size = 14;
let objects = 0;
let numObjects = 0;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//Mountains
var mounts = [];
for (let i = 0; i < numMounts; i++) {
    mounts.push("");
}
mounts.forEach(
    function () {
        var div = document.createElement("div");
        div.className = "mount";
        div.innerHTML = '<img src="../media/game2/mount2.png" width="120px" height="60px"/>';
        document.querySelector('#map').appendChild(div);
        randomObjects(div, true);
    }
);

//Trees
var tree = [];
for (let i = 0; i < numTrees; i++) {
    tree.push("");
}
tree.forEach(
    function () {
        var div = document.createElement("div");
        div.className = "tree";
        div.innerHTML = '<img src="../media/game2/thetree.png" width="60px" height="60px"/>';
        document.querySelector('#map').appendChild(div);
        div.style.color = 'white';
        div.style.width = '60px';
        div.style.height = '60px';
        div.style.borderRadius = '30px';
        div.style.position = 'relative';
        randomObjects(div, false);
    }
);

//Function for the random position of the objects.
function randomObjects(obj, isMount) {
    let startEl = document.querySelector('#start');
    let startPosition = getComputedStyle(startEl);
    let endEl = document.querySelector('#end');
    let endPosition = getComputedStyle(endEl);

    var i = 0;
    do {

        if (isMount) {
            obj.style.gridColumnStart = getRandom(1, size - 1); //Column position
            obj.style.gridRowStart = getRandom(2, size); //Row position
        } else {
            obj.style.gridColumnStart = getRandom(1, size); //Column position
            obj.style.gridRowStart = getRandom(1, size); //Row position
        }
        i++;
        fullPositions(obj.style.gridColumnStart, obj.style.gridRowStart, isMount);

    } while ((obj.style.gridColumnStart == startPosition.gridColumnStart
        && obj.style.gridRowStart == startPosition.gridRowStart)
        || (obj.style.gridColumnStart == endPosition.gridColumnStart
            && obj.style.gridRowStart == endPosition.gridRowStart));

    numObjects++;
}

function fullPositions(col, row, isMount) {
    let mountElems = document.querySelectorAll('.mount');
    mountElems.forEach(mount => {
        let mountStyle = getComputedStyle(mount);
        let treeElems = document.querySelectorAll('.tree');
        treeElems.forEach(tree => {
            let treeStyle = getComputedStyle(tree);

            for (let i = numObjects; i < 1; i--) {
                if (isMount && (col == mountStyle.gridColumnStart && row == mountStyle.gridRowStart) && (col == treeStyle.gridColumnStart && row == treeStyle.gridRowStart)) {
                    console.log("he entrat a que la posició és la mateixa i es MOUNT");
                    col = getRandom(1, size - 1); //Column position
                    row = getRandom(2, size); //Row position
                    i = numObjects;
                }
                if (numObjects == numMounts) {
                    if (col == treeStyle.gridColumnStart && row == treeStyle.gridRowStart) {
                        console.log("he entrat a que la posició és la mateixa");
                        col = getRandom(1, size); //Column position
                        row = getRandom(1, size); //Row position
                        i = numObjects;
                    }
                }
            }
        });
    });

}



// function fullPositions(col, row, isMount) {
//     objects = numObjects;
//     while (objects > 0) {
//         let mountElems = document.querySelectorAll('.mount');
//         mountElems.forEach(mount => {
//             var mountStyle = getComputedStyle(mount);
//             if (col == mountStyle.gridColumnStart && row == mountStyle.gridRowStart) {
//                 if (isMount) {
//                     col = getRandom(1, size - 1); //Column position
//                     row = getRandom(2, size); //Row position
//                 }
//             }

//             if (numObjects > numMounts) {
//                 let treeElems = document.querySelectorAll('.tree');
//                 treeElems.forEach(tree => {
//                     var treeStyle = getComputedStyle(tree);
//                     console.log("he entrado al for de arboles")
//                     if (col == treeStyle.gridColumnStart && row == treeStyle.gridRowStart) {
//                         col = getRandom(1, size); //Column position
//                         row = getRandom(1, size); //Row position
//                     }
//                 });
//             }
//             objects--;
//         });

//     }
// }