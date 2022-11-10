const numMount = 4;
const numTrees = 7;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//Trees
var tree = [];
for (let i=0; i < numTrees; i++) {
  tree.push("");
}
tree.forEach(
    function (el) {
        var div = document.createElement("div");
        div.className = "tree";
        div.innerHTML = el;
        document.querySelector('#map').appendChild(div);
        div.style.background = 'green';
        div.style.color = 'white';
        div.style.width = '60px';
        div.style.height = '60px';
        div.style.borderRadius = '30px';
        div.style.position = 'relative';
        randomObjects(div);
    }
);

//Mountains
var mount = [];
for (let i=0; i < numMount; i++) {
  mount.push("");
}
mount.forEach(
    function (el) {
        var div = document.createElement("div");
        div.className = "tree";
        div.innerHTML = el;
        document.querySelector('#map').appendChild(div);
        div.style.width = '60px';
        div.style.height = '0px';
        div.style.borderRight = '30px solid transparent';
        div.style.borderLeft = '30px solid transparent';
        div.style.borderBottom = '60px solid brown';
        randomObjects(div);
    }
);

//Function for the random position of the objects.
function randomObjects(obj) {

    if (obj == document.getElementById("mountain") || obj == document.getElementById("mountain2")) {
        obj.style.gridColumnStart = getRandom(2, 13); //Column position
        obj.style.gridRowStart = getRandom(2, 10);
    } else {
        obj.style.gridColumnStart = getRandom(2, 13); //Column position
        obj.style.gridRowStart = getRandom(2, 13); //Row position
    }

    var i = 0;
    while (obj.style.gridColumnStart == 2
        || obj.style.gridRowStart == 2
        || obj.style.gridColumnStart == 13
        || obj.style.gridRowStart == 13) {
        if (obj == document.getElementById("mountain") || obj == document.getElementById("mountain2")) {
            obj.style.gridColumnStart = getRandom(1, 13); //Column position
            obj.style.gridRowStart = getRandom(1, 10);
        } else {
            obj.style.gridColumnStart = getRandom(2, 13); //Column position
            obj.style.gridRowStart = getRandom(2, 13); //Row position
        }

        i++;
    }
}

let currentDroppable = null;

piece.onmousedown = function (event) {

    let shiftX = event.clientX - piece.getBoundingClientRect().left;
    let shiftY = event.clientY - piece.getBoundingClientRect().top;

    piece.style.position = 'absolute';
    piece.style.zIndex = 1000;
    document.body.append(piece);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        piece.style.left = pageX - shiftX + 'px';
        piece.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        piece.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        piece.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    piece.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        piece.onmouseup = null;
    };

};


function leaveDroppable(elem) {
    elem.style.background = '';
}

piece.ondragstart = function () {
    return false;
};

piece2.onmousedown = function (event) {

    let shiftX = event.clientX - piece2.getBoundingClientRect().left;
    let shiftY = event.clientY - piece2.getBoundingClientRect().top;

    piece2.style.position = 'absolute';
    piece2.style.zIndex = 1000;
    document.body.append(piece);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        piece2.style.left = pageX - shiftX + 'px';
        piece2.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        piece2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        piece2.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    piece2.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        piece2.onmouseup = null;
    };

};

piece2.ondragstart = function () {
    return false;
};

piece3.onmousedown = function (event) {

    let shiftX = event.clientX - piece3.getBoundingClientRect().left;
    let shiftY = event.clientY - piece3.getBoundingClientRect().top;

    piece3.style.position = 'absolute';
    piece3.style.zIndex = 1000;
    document.body.append(piece);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        piece3.style.left = pageX - shiftX + 'px';
        piece3.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        piece3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        piece3.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    piece3.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        piece3.onmouseup = null;
    };

};

piece3.ondragstart = function () {
    return false;
};