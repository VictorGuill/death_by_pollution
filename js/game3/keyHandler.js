let input = [];

/* let input = {
    "up": input_code["ArrowUp"],
    "down": input_code["ArrowDown"],
    "left": input_code["ArrowLeft"],
    "right": input_code["ArrowRight"]
};
 */

export default input;
document.onkeydown = function keydown (event) {
    input[event.key] = true;
};

document.onkeyup = function keyup (event) {
    input[event.key] = false;
};