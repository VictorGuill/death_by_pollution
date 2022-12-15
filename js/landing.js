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
  if (container.scrollTop >= viewportHeight - 150) {
    nabvar.style.backgroundColor = "#000000";
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

//ANIMATIONS
//NEW GSAP
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ scroller: "#scroll-container" });

gsap.from(".about-card", {
  scrollTrigger: {
    trigger: "#about",
    start: "40% bottom",
    id: "about",
    toggleActions: "play none none reverse",
    markers: true,
  },
  yPercent: 100,
  scale: 0.8,
  transformOrigin: "center bottom",
  duration: 1.2,
  ease: "power4.out",
});

gsap.set(".problem-card", { scale: 1 });
const problemTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#problem",
    id: "problem-cards",
    start: "center bottom",
    toggleActions: "play none none reverse",

    // markers: true
  },
});

problemTL.from(".problem-card", {
  yPercent: 100,
  duration: 1,
  ease: "power4.out",
});

problemTL.from(
  ".problem-card",
  {
    scale: 1.01,
    duration: 0.5,
  },
  "-=.2"
);

let serviceCard1 = gsap
  .to("#serviceCard1", {
    rotationY: 180,
    ease: "none",
    duration: 0.8,
    onUpdate: () => {
      let rot = gsap.getProperty("#serviceCard1", "rotationY");
      const img = document.querySelector("#serviceCard1 img");
      const body = document.querySelector("#serviceCard1 .card-body");
      if (rot > 90) {
        img.src = "./media/games_menu/game1_screenshot.png";
        img.style.height = "40vh";
        img.style.transform = "scaleX(-1)";
        body.style.display = "none";
      } else if (rot < 90) {
        img.src = "./media/landing/new_ship.jpeg";
        img.style.height = "auto";
        img.style.transform = "scaleX(1)";
        body.style.display = "inherit";
      }
    },
  })
  .reverse();

let serviceCard2 = gsap
  .to("#serviceCard2", {
    rotationY: 180,
    ease: "none",
    duration: 0.8,
    onUpdate: () => {
      let rot = gsap.getProperty("#serviceCard2", "rotationY");
      const img = document.querySelector("#serviceCard2 img");
      const body = document.querySelector("#serviceCard2 .card-body");
      if (rot > 90) {
        img.src = "./media/games_menu/game2_screenshot.png";
        img.style.height = "40vh";
        img.style.transform = "scaleX(-1)";
        body.style.display = "none";
      } else if (rot < 90) {
        img.src = "./media/landing/new_train.jpeg";
        img.style.height = "auto";
        img.style.transform = "scaleX(1)";
        body.style.display = "inherit";
      }
    },
  })
  .reverse();

let serviceCard3 = gsap
  .to("#serviceCard3", {
    rotationY: 180,
    ease: "none",
    duration: 0.8,
    onUpdate: () => {
      let rot = gsap.getProperty("#serviceCard3", "rotationY");
      const img = document.querySelector("#serviceCard3 img");
      const body = document.querySelector("#serviceCard3 .card-body");
      if (rot > 90) {
        img.src = "./media/games_menu/game3_screenshot.png";
        img.style.height = "40vh";
        img.style.transform = "scaleX(-1)";
        body.style.display = "none";
      } else if (rot < 90) {
        img.src = "./media/landing/new_plane.jpeg";
        img.style.height = "auto";
        img.style.transform = "scaleX(1)";
        body.style.display = "inherit";
      }
    },
  })
  .reverse();

function rotateCard(card) {
  var cardAnim = gsap.getProperty(card, "id");
  console.log(cardAnim);
  switch (cardAnim) {
    case "serviceCard1":
      if (serviceCard1.reversed()) {
        serviceCard1.play();
      } else {
        serviceCard1.reverse();
      }
      break;
    case "serviceCard2":
      if (serviceCard2.reversed()) {
        serviceCard2.play();
      } else {
        serviceCard2.reverse();
      }
      break;
    case "serviceCard3":
      if (serviceCard3.reversed()) {
        serviceCard3.play();
      } else {
        serviceCard3.reverse();
      }
      break;
  }

  /* while(rotationState <= 90){
    console.log(rotationState);
  } */
}

/* onUpdate: () => {
  rotState = gsap.getProperty(card, "rotationY");
  console.log(rotState);
},
onComplete: () => {card.reversed = true} */
