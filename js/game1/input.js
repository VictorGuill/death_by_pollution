// create empty object
export let input = {};

////////////////////////////////
/// KEYBOARD

document.onkeydown = function (e) {
  input[e.key] = true;
  // console.log("Key " + e.key + " presed.");
};

document.onkeyup = function (e) {
  input[e.key] = false;
};
