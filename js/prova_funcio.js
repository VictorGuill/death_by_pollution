function selectedTrack(piece) {
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
}