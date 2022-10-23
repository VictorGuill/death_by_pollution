////////////////////////////////
// INPUTS
////////////////////////////////

// create assoc array
let keyboardInput = {};

export default keyboardInput;

// Detects keydown/keyup presses. If keypress type is "keydown", stores true.
document.onkeydown = document.onkeyup = function (e) {
  keyboardInput[e.key] = e.type == "keydown";
};