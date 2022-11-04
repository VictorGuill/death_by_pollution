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


piece4.onmousedown = function (event) {

    let shiftX = event.clientX - piece4.getBoundingClientRect().left;
    let shiftY = event.clientY - piece4.getBoundingClientRect().top;

    piece4.style.position = 'absolute';
    piece4.style.zIndex = 1000;
    document.body.append(piece);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        piece4.style.left = pageX - shiftX + 'px';
        piece4.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        piece4.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        piece4.hidden = false;

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

    piece4.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        piece4.onmouseup = null;
    };

};

piece4.ondragstart = function () {
    return false;
};

piece5.onmousedown = function (event) {

    let shiftX = event.clientX - piece5.getBoundingClientRect().left;
    let shiftY = event.clientY - piece5.getBoundingClientRect().top;

    piece5.style.position = 'absolute';
    piece5.style.zIndex = 1000;
    document.body.append(piece);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        piece5.style.left = pageX - shiftX + 'px';
        piece5.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        piece5.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        piece5.hidden = false;

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

    piece5.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        piece5.onmouseup = null;
    };

};

piece5.ondragstart = function () {
    return false;
};