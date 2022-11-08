function rand(n) {
    // creamos un numero al azar entre la cantidad de imágenes
    return (Math.floor(Math.random() * n + 1));
}
//guardas las imagenes en el array
var rand_img = new Array();
rand_img[0] = "../media/br.jpg";
rand_img[1] = "../media/lb.jpg";
rand_img[2] = "../media/lr.jpg";
rand_img[3] = "../media/lt.jpg";
rand_img[4] = "../media/tb.jpg";
rand_img[5] = "../media/tr.jpg";

function randomPiece() {
    document.getElementById("piece").src = rand_img[rand(rand_img.length) - 1];
    document.getElementById("piece2").src = rand_img[rand(rand_img.length) - 1];
    document.getElementById("piece3").src = rand_img[rand(rand_img.length) - 1];
}

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const square = document.getElementById("tree")
square.style.gridColumnStart = getRandom(0, 14); // 👈🏼 Horizontally
square.style.gridRowStart    = getRandom(0, 14); // 👈🏼 Vertically

const square2 = document.getElementById("tree2")
square2.style.gridColumnStart = getRandom(0, 14); // 👈🏼 Horizontally
square2.style.gridRowStart    = getRandom(0, 14); // 👈🏼 Vertically

const square3 = document.getElementById("tree3")
square3.style.gridColumnStart = getRandom(0, 14); // 👈🏼 Horizontally
square3.style.gridRowStart    = getRandom(0, 14); // 👈🏼 Vertically

const square4 = document.getElementById("tree4")
square4.style.gridColumnStart = getRandom(0, 14); // 👈🏼 Horizontally
square4.style.gridRowStart    = getRandom(0, 14); // 👈🏼 Vertically

const mount = document.getElementById("mountain")
mount.style.gridColumnStart = getRandom(0, 14); // 👈🏼 Horizontally
mount.style.gridRowStart    = getRandom(0, 14); // 👈🏼 Vertically

const mount2 = document.getElementById("mountain2")
mount2.style.gridColumnStart = getRandom(0, 14); // 👈🏼 Horizontally
mount2.style.gridRowStart    = getRandom(0, 14); // 👈🏼 Vertically

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

function enterDroppable(elem) {
    elem.style.background = 'pink';
}

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