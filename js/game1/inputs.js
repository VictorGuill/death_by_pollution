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

////////////////////////////////
// GAMEPAD
////////////////////////////////

// axis
window.addEventListener("gamepadconnected", (event) => {
  const update = () => {
    const output = document.getElementById("axes");
    output.innerHTML = ""; // clear the output

    let offset = 0.2;

    for (const gamepad of navigator.getGamepads()) {
      if (!gamepad) continue;
      for (const [index, axis] of gamepad.axes.entries()) {
        switch (index) {
          case 0:
          case 2:
            // if (axis > Math.abs(offset)) {
            //   console.log("RIGHT");
            // } else if (axis < -Math.abs(offset)) {
            //   console.log("LEFT");
            // }
            break;
          case 1:
          case 5:
            // if (axis > Math.abs(offset)) {
            //   console.log("BOTTOM");
            // } else if (axis < -Math.abs(offset)) {
            //   console.log("TOP");
            // }
            break;
        }
      }
    }
    requestAnimationFrame(update);
  };
  update();
});

// buttons
// window.addEventListener("gamepadconnected", (event) => {
//   const update = () => {
//     const output = document.getElementById("buttons");
//     output.innerHTML = ""; // clear the output

//     for (const gamepad of navigator.getGamepads()) {
//       if (!gamepad) continue;
//       for (const [index, button] of gamepad.buttons.entries()) {
//         if (button.value == 1) {
//           console.log("pulsate 1");
//         }
//       }
//     }
//     requestAnimationFrame(update);
//   };
//   update();
// });
