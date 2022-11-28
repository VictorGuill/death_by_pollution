// get user browser window height
let viewportHeight = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

// pages container and navbar
const container = document.getElementById("scroll-container");
const nabvar = document.getElementById("landing_nav");
const goStartBtn = document.getElementById("goStartBtn");

/* const startSlide = document.getElementById("start");
const aboutSlide = document.getElementById("about");


function gradientAbout(){
  let t = 0;
  aboutSlide.style.setProperty("--transition", t+"%");
  let s = setInterval(function(){
        t += 10;
        aboutSlide.style.setProperty("--transition", t+"%");
        if (t >= 200){
          clearInterval(s);
        }
      }, 50)
}
container.addEventListener("scroll", gradientAbout); */

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