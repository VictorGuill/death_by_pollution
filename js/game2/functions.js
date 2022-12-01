export function getPositions(track) {
    let positionArr = [];
    for (let j = 0; j < track.length; j++) {
        let elementId = track[j].id;
        let position = elementId.split('drop');
        positionArr.push(position);
    }
    console.log(positionArr);
    return positionArr;
}

export function checkPiece(piece1, piece2, position) {
    let isCorrect = false;
    switch (piece1) {
        case 'img0':
        case 'img6':
        case 'img8':
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img8' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img8' ||  piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case 'right':
                    break;

                default:
                    break;
            }
            break;

        case 'img1':
            switch (position) {
                case 'top':
                case 'left':
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img8' || piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img9' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'img2':
            switch (position) {
                case 'top':
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img9' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img8' || piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case 'right':
                    break;

                default:
                    break;
            }
            break;

        case 'img3':
        case 'img7':
        case 'img9':
            switch (position) {
                case 'top':
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img9' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img9' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'img4':
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img8' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                case 'bottom':
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img9' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;

                default:
                    break;
            }
            break;

        case 'img5':
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img8' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img9' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                case 'right':
                    break;

                default:
                    break;
            }
            break;

        default:
            console.log("error");
            break;
    }
    return isCorrect;
}

export function comparePieces(array) {
    let positions = [];
    for (var i = 0; i < array.length; i++) {
        if (i + 1 < array.length) {
            if (parseInt(array[i][0]) + 1 === parseInt(array[i + 1][0]) && array[i][1] === array[i + 1][1]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('bottom');
            }
            else if (parseInt(array[i][0]) - 1 === parseInt(array[i + 1][0]) && array[i][1] === array[i + 1][1]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('left');
            }
            else if (parseInt(array[i + 1][1]) + 1 === parseInt(array[i + 1][1]) && array[i][0] === array[i + 1][0]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('top');
            }
            else if (parseInt(array[i + 1][1]) - 1 === parseInt(array[i][1]) && array[i][0] === array[i + 1][0]) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
                positions.push('right');
            }
        }
    }
    return positions;
}

export function finish() {
    let track = [];
    let numPieces = 0;

    let trackPieces = document.querySelectorAll(".dropSpace");
    for (let i = 0; i < trackPieces.length; i++) {
        if (trackPieces[i].childElementCount !== 0) {
            track.push(trackPieces[i]);
            numPieces++;
        }
    }
    let positionsArr = getPositions(track);
    let positions = comparePieces(positionsArr);
    let trackImgs = document.querySelectorAll(".dropSpace img");
    let trackCorrect = [];
    let checkArr;
    for (let k = 0; k < positions.length; k++) {
        if (k + 1 <= positions.length) {
            checkArr = checkPiece(trackImgs[k].className, trackImgs[k + 1].className, positions[k]);
            trackCorrect.push(checkArr);
            console.log(trackCorrect);
        }
    }
    function isTrue(el) {
        if(el === true){
            return true;
        } else {
            return false;
        }
      }
      console.log(trackCorrect.every(isTrue));
    if (trackCorrect.every(isTrue) && numPieces >= 21) {
        Winner();
    } else {
        GameOver();
    }
}

export function Winner() {
    alert('YOU WIN!');
    clearInterval(timeoutHandle);
}

export function GameOver() {
    alert('YOU LOSE!');
    clearInterval(timeoutHandle);
}