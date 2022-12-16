// variable to know witch panel we are at
let loginState = "login";

// #region panel DOM elenents
const login_panel = document.getElementById("loginPanel");
const panel_title = document.getElementById("loginTitle");

const name_input = document.getElementById("nameInput");
const pass_input = document.getElementById("passInput");
const pass2_input = document.getElementById("pass2Input");
const submitBtn = document.getElementById("loginButton");
const switch_panel_text = document.getElementById("switchPanel");

const error_message_text = document.getElementById("errorInfoMsg");
// #endregion

// #region event listeners
name_input.addEventListener("input", function (e) {
  checkEmptyFields();
});

pass_input.addEventListener("input", function (e) {
  checkEmptyFields();
  checkPasswordsMatch();
});

pass2_input.addEventListener("input", function (e) {
  checkEmptyFields();
  checkPasswordsMatch();
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeLoginPanel();
  }
});
// #endregion

// #region show, hide, switch panel functions
function switchPanel() {
  switch (loginState) {
    case "login":
      // store current state and change panel title
      loginState = "register";
      panel_title.innerHTML = languageSelector(language, "Register", "Registro", "Registre");

      // empty and show second password field
      pass2_input.value = "";
      pass2_input.hidden = false;

      // set help text
      switch_panel_text.innerHTML = languageSelector(
        language,
        "Already have an account?",
        "¿Ya tienes cuenta?",
        "Ja tens compte?"
      );
      checkPasswordsMatch();
      break;
    case "register":
      // store current state and change panel title
      loginState = "login";
      panel_title.innerHTML = languageSelector(language, "Log in", "Iniciar sesión", "Iniciar sessió");

      // hide second password field
      pass2_input.value = "";
      pass2_input.hidden = true;

      // set help text
      switch_panel_text.innerHTML = languageSelector(language, "create an account", "crear cuenta", "crear compte");
      checkPasswordsMatch();
      break;
  }

  // set button name atributte recived on PHP controller
  submitBtn.name = loginState;

  // check if button should be enabled/disabled
  checkEmptyFields();
  name_input.focus();
}

function showLogin() {
  login_panel.style.animation = "fade-in .5s ease";
  login_panel.style.display = "inherit";
  error_message_text.innerHTML = "";
  name_input.focus();
}

function showLogin_noAnimation() {
  login_panel.style.display = "inherit";
  login_panel.style.animation = "";
  name_input.focus();
}

function closeLoginPanel() {
  login_panel.style.animation = "fade-out .5s ease";

  setTimeout(() => {
    login_panel.style.display = "none";

    // vaciamos el contenido de los inputs
    name_input.value = "";
    pass_input.value = "";
    pass2_input.value = "";

    // forzamos el state en register para que switchPanel() lo cambia a login si o si
    loginState = "register";
    switchPanel();
  }, 485);
}
// #endregion

function checkEmptyFields() {
  // remove start/end extra spaces
  name_input.value = String(name_input.value).trim();
  pass_input.value = String(pass_input.value).trim();
  pass2_input.value = String(pass2_input.value).trim();

  switch (loginState) {
    case "login":
      if (name_input.value && pass_input.value) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
      break;
    case "register":
      if (name_input.value && pass_input.value && pass2_input.value) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
      break;
  }
}

function checkPasswordsMatch() {
  if (loginState === "register") {
    if (pass_input.value !== pass2_input.value) {
      error_message_text.innerHTML = languageSelector(
        language,
        "Passwords do not match",
        "Las contraseñas deben coincidir.",
        "Les contrasenyes han de coincidir"
      );
      submitBtn.disabled = true;
    } else {
      error_message_text.innerHTML = "";
      submitBtn.disabled = false;
    }
  } else {
    error_message_text.innerHTML = "";
    submitBtn.disabled = false;
  }
}

function languageSelector(lang, en_txt, es_txt, cat_txt) {
  let final_txt;
  switch (lang) {
    case "en":
      final_txt = en_txt;
      break;
    case "es":
      final_txt = es_txt;
      break;
    case "ca":
      final_txt = cat_txt;
      break;
  }
  return final_txt;
}
