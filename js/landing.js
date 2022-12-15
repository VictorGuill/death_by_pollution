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

const card1Img = document.querySelector("#serviceCard1 img");
const card1Body = document.querySelector("#serviceCard1 .card-body");
const card1Link = document.querySelector("#serviceCard1 a");
let serviceCard1 = gsap
  .to("#serviceCard1", {
    rotationY: 180,
    ease: "none",
    duration: 0.8,
    onUpdate: () => {
      let rot = gsap.getProperty("#serviceCard1", "rotationY");
      if (rot > 90) {
        card1Img.src = "./media/games_menu/game1_screenshot.png";
        card1Img.style.height = "530px";
        card1Img.style.transform = "scaleX(-1)";
        card1Body.style.display = "none";
      } else if (rot < 90) {
        card1Img.src = "./media/landing/new_ship.jpeg";
        card1Img.style.height = "auto";
        card1Img.style.transform = "scaleX(1)";
        card1Body.style.display = "inherit";
        card1Link.style.display = "none";
      }
    },
    onComplete: ()=>{
      card1Link.style.display = "inherit";
      card1Link.style.transform = "scaleX(-1)";
    }
  })
  .reverse();
  card1Link.addEventListener("click", ()=>{serviceCard1.kill()});

const card2Img = document.querySelector("#serviceCard2 img");
const card2Body = document.querySelector("#serviceCard2 .card-body");
const card2Link = document.querySelector("#serviceCard2 a");
let serviceCard2 = gsap
  .to("#serviceCard2", {
    rotationY: 180,
    ease: "none",
    duration: 0.8,
    onUpdate: () => {
      let rot = gsap.getProperty("#serviceCard2", "rotationY");
      
      if (rot > 90) {
        card2Img.src = "./media/games_menu/game2_screenshot.png";
        card2Img.style.height = "530px";
        card2Img.style.transform = "scaleX(-1)";
        card2Body.style.display = "none";
      } else if (rot < 90) {
        card2Img.src = "./media/landing/new_train.jpeg";
        card2Img.style.height = "auto";
        card2Img.style.transform = "scaleX(1)";
        card2Body.style.display = "inherit";
        card2Link.style.display = "none";
      }
    },
    onComplete: ()=>{
      card2Link.style.display = "inherit";
      card2Link.style.transform = "scaleX(-1)";
    }
  })
  .reverse();
  card2Link.addEventListener("click", ()=>{serviceCard2.kill()});

const card3 = document.getElementById("serviceCard3");
const card3Img = document.querySelector("#serviceCard3 img");
const card3Body = document.querySelector("#serviceCard3 .card-body");
const card3Link = document.querySelector("#serviceCard3 a");
let serviceCard3 = gsap
  .to("#serviceCard3", {
    rotationY: 180,
    ease: "none",
    duration: 0.8,
    onUpdate: () => {
      let rot = gsap.getProperty("#serviceCard3", "rotationY");
      if (rot >= 90) {
        card3Img.src = "./media/games_menu/game3_screenshot.png";
        card3Img.style.height = "530px";
        card3Img.style.transform = "scaleX(-1)";
        card3Body.style.display = "none";
      } else if (rot <= 90) {
        card3Img.src = "./media/landing/new_plane.jpeg";
        card3Img.style.height = "auto";
        card3Img.style.transform = "scaleX(1)";
        card3Body.style.display = "inherit";
        card3Link.style.display = "none";
      }
    },
    onComplete: ()=>{
      card3Link.style.display = "inherit";
      card3Link.style.transform = "scaleX(-1)";
    }
  })
  .reverse();
card3Link.addEventListener("click", ()=>{serviceCard3.kill()});

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
