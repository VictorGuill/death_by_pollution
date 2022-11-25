// get user browser window height
let viewportHeight = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

// pages container and navbar
const container = document.getElementById("scroll-container");
const nabvar = document.getElementById("landing_nav");
const goStartBtn = document.getElementById("goStartBtn");

// set navbar background color
container.addEventListener("scroll", (e) => {
  if (container.scrollTop >= viewportHeight - viewportHeight / 3) {
    nabvar.style.backgroundColor = " var(--DARK)";
  } else {
    nabvar.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }

  if (container.scrollTop >= viewportHeight / 3) {
    // goStartBtn.style.display = "inherit";
    goStartBtn.style.opacity = "1";
  } else {
    // goStartBtn.style.display = "none";
    goStartBtn.style.opacity = "0";
  }
});

// set new browser window height value
window.addEventListener("resize", function (e) {
  viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
});

function loginPanel() {
  const login_panel = document.getElementById("loginPanel");

  login_panel.style.display = "inherit";
}

function closeLoginPanel() {
  const login_panel = document.getElementById("loginPanel");

  login_panel.style.animation = "fade-out 1s ease";
  setTimeout(() => {
    login_panel.style.display = "none";

    login_panel.style.animation = "fade-in 1s ease";
  }, 990);
}

function closeRegisterPanel() {
  const register_panel = document.getElementById("registerPanel");

  register_panel.style.animation = "fade-out 1s ease";
  setTimeout(() => {
    register_panel.style.display = "none";

    register_panel.style.animation = "fade-in 1s ease";
  }, 990);
}

function showRegisterPanel() {
  const login_panel = document.getElementById("loginPanel");
  const register_panel = document.getElementById("registerPanel");

  setTimeout(() => {
    login_panel.style.display = "none";

    login_panel.style.animation = "fade-in 1s ease";
  }, 990);

  register_panel.style.display = "inherit";
  register_panel.style.zIndex = "10";
}

function showLoginPanel() {
  const login_panel = document.getElementById("loginPanel");
  const register_panel = document.getElementById("registerPanel");

  setTimeout(() => {
    register_panel.style.display = "none";

    register_panel.style.animation = "fade-in 1s ease";
  }, 990);

  login_panel.style.display = "inherit";
  login_panel.style.zIndex = "11";
}
