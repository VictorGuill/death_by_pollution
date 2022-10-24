// create empty object
let userInput = {};

export default userInput;

////////////////////////////////
/// KEYBOARD

document.onkeydown = function (e) {
  userInput[e.key] = true;
};

document.onkeyup = function (e) {
  userInput[e.key] = false;
};
