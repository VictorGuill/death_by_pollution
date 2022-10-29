let input = {};

export default input;

document.onkeydown = function keydown (event) {
    input[event.key] = true;
    console.log("key down: "+event.key);
};

document.onkeyup = function keyup (event) {
    input[event.key] = false;
    console.log("key up: "+event.key);
};