// set new browser window height value
window.addEventListener("resize", function (e) {
  viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
});

// #region panel elenents

// #endregion
function showLoginPanel() {
  const login_panel = document.getElementById("loginPanel");
  login_panel.style.animation = "fade-in .5s ease";

  login_panel.style.display = "inherit";
}

function showLoginPanelError() {
  const login_panel = document.getElementById("loginPanel");
  login_panel.style.animation = "";

  login_panel.style.display = "inherit";
}

function switchPanel() {
  const title = document.getElementById("loginTitle");
  const loginButton = document.getElementById("loginButton");
  const switchPanelTxt = document.getElementById("switchPanel");

  const elementsPanel = document.getElementById("elementsPanel");

  const registerInputDiv = document.createElement("div");

  // create new register input
  const registerInput = document.createElement("input");
  registerInput.setAttribute("id", "newRegisterInput");
  registerInput.setAttribute("type", "password");
  registerInput.name = "password2";
  registerInput.setAttribute("placeholder", "contraseña");
  registerInputDiv.appendChild(registerInput);

  // create accept button and switch panel text
  const acceptBtn = document.createElement("button");
  acceptBtn.setAttribute("id", "loginButton");
  acceptBtn.setAttribute("class", "btn btn-primary btn-lg btn-block mt-4");
  acceptBtn.setAttribute("type", "submit");
  acceptBtn.innerHTML = "ACEPTAR";

  const newSwitchPanelTxt = document.createElement("h5");
  newSwitchPanelTxt.setAttribute("id", "switchPanel");
  newSwitchPanelTxt.setAttribute("class", "mt-5 mb-0");
  newSwitchPanelTxt.setAttribute("onclick", "switchPanel()");

  if (title.innerHTML === "Log in") {
    newSwitchPanelTxt.innerHTML = "¿Ya tienes cuenta?";
    title.innerHTML = "Registrarse";
    loginButton.remove();
    switchPanelTxt.remove();
    elementsPanel.appendChild(registerInputDiv);
    acceptBtn.name = "register";
    elementsPanel.appendChild(acceptBtn);
    elementsPanel.appendChild(newSwitchPanelTxt);
  } else {
    const newRegisterInput = document.getElementById("newRegisterInput");
    newSwitchPanelTxt.innerHTML = "crear cuenta";
    title.innerHTML = "Log in";
    loginButton.remove();
    switchPanelTxt.remove();
    newRegisterInput.remove();
    acceptBtn.name = "login";
    elementsPanel.appendChild(acceptBtn);
    elementsPanel.appendChild(newSwitchPanelTxt);
  }
}

function closeLoginPanel() {
  const login_panel = document.getElementById("loginPanel");

  login_panel.style.animation = "fade-out .5s ease";
  setTimeout(() => {
    login_panel.style.display = "none";

    login_panel.style.animation = "fade-in .5s ease";
  }, 490);
}

// function closeRegisterPanel() {
//   const register_panel = document.getElementById("registerPanel");

//   register_panel.style.animation = "fade-out 1s ease";
//   setTimeout(() => {
//     register_panel.style.display = "none";

//     register_panel.style.animation = "fade-in 1s ease";
//   }, 990);
// }

// function showRegisterPanel() {
//   const login_panel = document.getElementById("loginPanel");
//   const register_panel = document.getElementById("registerPanel");

//   setTimeout(() => {
//     login_panel.style.display = "none";

//     login_panel.style.animation = "fade-in 1s ease";
//   }, 990);

//   register_panel.style.display = "inherit";
//   register_panel.style.zIndex = "10";
// }

// function showLoginPanel() {
//   const login_panel = document.getElementById("loginPanel");
//   const register_panel = document.getElementById("registerPanel");

//   setTimeout(() => {
//     register_panel.style.display = "none";

//     register_panel.style.animation = "fade-in 1s ease";
//   }, 990);

//   login_panel.style.display = "inherit";
//   login_panel.style.zIndex = "11";
// }
