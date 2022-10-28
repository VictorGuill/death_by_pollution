const nav = document.getElementById('navbar');
const navHeight = getComputedStyle(nav).height;

window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 200 ) {
        /* nav.classList.add("navbar-bg");
        nav.classList.remove("navbar-no-bg"); */
        nav.style.height = "70px";
    } 
    else {
        /* nav.classList.add("navbar-no-bg");
        nav.classList.remove("navbar-bg"); */
        nav.style.height = navHeight;
    }
};