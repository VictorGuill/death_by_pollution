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
    markers: true
  },
  yPercent: 100,
  scale: 0.8,
  transformOrigin: "center bottom",
  duration: 1.2,
  ease: "power4.out"
});


gsap.set(".problem-card", {scale: 1});
const problemTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#problem",
    id: "problem-cards",
    start: "center bottom",
    toggleActions: "play none none reverse",
    markers: true
  }
})

problemTL.from(".problem-card", {
  yPercent: 100,
  duration: 1,
  ease: "power4.out",
});

problemTL.from(".problem-card", {
  scale: 1.01,
  duration: 0.5
}, "-=.2")

const servicesTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "top top",
    end: "center top",
    // anticipatePin: 2,
    // pin: true,
    scrub: true,
    markers: true
  }
})

servicesTL.to(".service-card", {
  rotationY: 180,
  ease: "none",
  duration: 2
});