export let input = {};

function keydown (event) {
    input[event.key] = true;
    console.log("key down: "+event.key);
}

function keyup (event) {
    input[event.key] = false;
    console.log("key up: "+event.key);
}


window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);


// --- VICTOR ---
/* document.onkeydown = function keydown (event) {
    input[event.key] = true;
}

document.onkeyup = function keyup (event) {
    input[event.key] = false;
} */