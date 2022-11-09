// create empty object
let userInput = {};

export default userInput;

////////////////////////////////
/// KEYBOARD

document.onkeydown = function (e) {
  userInput[e.key] = true;
  // console.log(e.key);
};

document.onkeyup = function (e) {
  userInput[e.key] = false;
};
