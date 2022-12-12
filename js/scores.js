import { setCookie, getCookie, eraseCookie } from "../js/cookiesFunctions.js";

const dropdown = document.querySelector(".form-select");

dropdown.addEventListener("change", (e) => {
  setCookie("dropdownGame", dropdown.value - 1, 1);
  // console.log(dropdown.value - 1);
  location.reload();
});
