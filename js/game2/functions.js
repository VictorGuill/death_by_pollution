import { startColumn, startRow } from "./constants.js";
import EndScreen from "./screens/EndScreen.js";
import { numReload } from "./main.js";

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
            switch (position) {
                case 'top':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img4' || piece2 == 'img5') {
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
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img4' || piece2 == 'img5') {
                        isCorrect = true;
                    }
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img5') {
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
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img4' || piece2 == 'img5') {
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
            switch (position) {
                case 'top':
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img4') {
                        isCorrect = true;
                    }
                    break;
                case 'bottom':
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img5') {
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
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                case 'bottom':
                    break;
                case 'right':
                    if (piece2 == 'img2' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img5') {
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
                    if (piece2 == 'img0' || piece2 == 'img6' || piece2 == 'img1' || piece2 == 'img2') {
                        isCorrect = true;
                    }
                    break;
                case 'left':
                    if (piece2 == 'img1' || piece2 == 'img3' || piece2 == 'img7' || piece2 == 'img4') {
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

export function orderPieces(array) {
    let arrayOrdered = [];
    let size = array.length + 2;
    console.log("array length: " + array.length + "    SIZE: " + size);

    let startPosition = [startRow - 1, startColumn - 1];
    console.log(startPosition);
    if (arrayOrdered.length == 0) {
        arrayOrdered.push(startPosition);
    }

    let i = 0, i_Ordered = 0;
    let isOrdered = true;
    do {
        if (i + 1 <= array.length) {
            let intRow = parseInt(arrayOrdered[i_Ordered][0]);
            let intCol = parseInt(arrayOrdered[i_Ordered][1]);
            let intRowNext = parseInt(array[i][0]);
            let intColNext = parseInt(array[i][1]);

            if ((intColNext == intCol && (intRowNext == intRow - 1 || intRowNext == intRow + 1))
                || (intRowNext == intRow && (intColNext == intCol + 1 || intColNext == intCol - 1))) {
                arrayOrdered.push(array[i]);
                array.splice(i, 1);
                i = 0;
                i_Ordered++;
                console.log(arrayOrdered);
            } else {
                i++;
            }
            if ((intRow == 11 || intRow == 13) && (intCol == 11 || intCol == 13)) {
                isOrdered = false;
            }
        }
        if (array.length == 0 || array.length == 1) {
            isOrdered = false;
        }
    } while (isOrdered);

    return arrayOrdered;
}

export function positionPiece(array) {
    let positions = [];
    let image = [];
    for (var i = 0; i < array.length; i++) {
        if (i + 1 < array.length) {
            let intRow = parseInt(array[i][0]);
            let intCol = parseInt(array[i][1]);
            let intRowNext = parseInt(array[i + 1][0]);
            let intColNext = parseInt(array[i + 1][1]);

            if ((intRow + 1 === intRowNext) && intCol === intColNext) {
                positions.push('bottom');
            }
            else if ((intRow - 1 === intRowNext) && intCol === intCol) {
                positions.push('top');
            }
            else if (intRow === intRowNext && (intCol - 1 === intColNext)) {
                positions.push('left');
            }
            else if (intRow === intRowNext && (intCol + 1 === intColNext)) {
                positions.push('right');
            }
            let dropSpace = document.getElementById(intRowNext + "drop" + intColNext);
            image.push(dropSpace.firstChild.className);
            console.log(image);
        }
    }
    return [positions, image];
}

export function end_game() {
    const end = new EndScreen("endScreen");
    let track = [];
    let numPieces = 0;

    //pick the dropSpace elements
    let trackPieces = document.querySelectorAll(".dropSpace");
    for (let i = 0; i < trackPieces.length; i++) {
        //if the dropSpace have a child, we put it in the track array
        if (trackPieces[i].childElementCount !== 0) {
            track.push(trackPieces[i]);
            numPieces++; //counter of the number of pieces
        }
    }
    if (numPieces < 21) {
        end.GameOver();
    }
    //array with the positions of the pieces at the map
    let positionsArr = getPositions(track);
    //knowing the position of the piece and the next one
    let orderPositions = orderPieces(positionsArr);
    let positions_image = positionPiece(orderPositions);
    let positions = positions_image[0];
    let trackImgs = positions_image[1];
    console.log(trackImgs);
    //getting the img
    let trackCorrect = []; //array to check the path
    for (let k = 0; k < positions.length; k++) {
        if (k + 1 < positions.length) {
            let checkArr = checkPiece(trackImgs[k], trackImgs[k + 1], positions[k + 1]);
            trackCorrect.push(checkArr);
            console.log(checkArr);
        }
    }
    console.log(trackCorrect.every(isTrue));
    console.log(numPieces + " num reload: " + numReload);

    let score = 0, random = 0;
    if (numPieces == 21 && (numReload >= 0 && numReload <= 2)) {
        random = rand(550, 500);
    }
    if (numPieces == 21) {
        if (numReload >= 0 && numReload <= 5) {
            random = rand(500, 450);
        } else if (numReload >= 5 && numReload <= 10) {
            random = rand(450, 400);
        } else if (numReload >= 11 && numReload <= 15) {
            random = rand(400, 350);
        } else if (numReload >= 16 && numReload <= 20) {
            random = rand(350, 300);
        } else {
            random = rand(300, 250);
        }
    }
    if (numPieces >= 22 && numReload <= 23) {
        if (numReload >= 0 && numReload <= 5) {
            random = rand(400, 350);
        } else if (numReload >= 5 && numReload <= 10) {
            random = rand(350, 300);
        } else if (numReload >= 11 && numReload <= 15) {
            random = rand(300, 250);
        } else if (numReload >= 16 && numReload <= 20) {
            random = rand(250, 200);
        } else {
            random = rand(200, 150);
        }
    }
    if (numPieces >= 24) {
        if (numReload >= 0 && numReload <= 5) {
            random = rand(350, 300);
        } else if (numReload >= 5 && numReload <= 10) {
            random = rand(300, 250);
        } else if (numReload >= 11 && numReload <= 15) {
            random = rand(250, 200);
        } else if (numReload >= 16 && numReload <= 20) {
            random = rand(200, 150);
        } else {
            random = rand(150, 100);
        }
    }
    score = numPieces * random;
    console.log(random);

    if (trackCorrect.every(isTrue) && numPieces >= 21) {
        end.Winner(score);
    } else {
        end.GameOver();
    }
}

function rand(max, min) {
    return (Math.floor(Math.random() * (max + 1 - min)) + min);
}

function isTrue(el) {
    if (el === true) {
        return true;
    } else {
        return false;
    }
}