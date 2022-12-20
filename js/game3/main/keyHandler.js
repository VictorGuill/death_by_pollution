let input_codes = [];


export default input_codes;
document.onkeydown = function keydown (event) {
    input_codes[event.key] = true;
};


document.onkeyup = function keyup (event) {
    input_codes[event.key] = false;
};