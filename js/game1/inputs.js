// create assoc array
let userInput = {};

export default userInput;

////////////////////////////////
// KEYBOARD
////////////////////////////////

// detects keydown/keyup presses. If keypress type is "keydown", stores true.
document.onkeydown = document.onkeyup = function (e) {
  userInput[e.key] = e.type == "keydown";
};
