import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

// ~*~*~*~*~*~*~*~ SKY ELEMENTS SCROLL TIMELINE ~*~*~*~*~*~*~*~

let skyTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".cloud-container",
    start: "center center",
    end: "bottom top",
    ease: "ease-in",
    scrub: 3,
    pin: true,
    // markers: true,
    stagger: 1.5,
  },
});
skyTL
  .from("#moon-1", { y: innerHeight * 1.2, x: innerWidth * 0.2 })
  .from("#cloud-1", { y: innerHeight * 1.1, x: innerWidth * 0.3 })
  .from("#cloud-2", { y: innerHeight * 1.0, x: 50 })
  .from("#santa-1", { y: innerHeight * 1.3, x: -innerWidth, duration: 4 })
  .from("#aoc-heading", { y: innerHeight * 1.1, duration: 2 })
  .from("#aoc-heading-2", { y: innerHeight * 1.1 })
  .to({}, { duration: 2 });

// ~*~*~*~*~*~*~*~ GROUND ELEMENTS SCROLL TIMELINE ~*~*~*~*~*~*~*~

const groundScroll = {
  trigger: ".ground-container",
  start: "center center",
  end: "bottom bottom",
  normalizeScroll: true,
  ease: "ease-in",
  scrub: 3,
  anticipatePin: 1,
  // pin: true,
  pinType: "fixed",
};
let groundTL = gsap.timeline({ scrollTrigger: groundScroll });
groundTL
  .from(".stars", { y: innerHeight * 0.2 })
  .from(".left-front-tree", { y: innerHeight * 0.3 }, 0.1)
  .from(".right-front-tree", { y: innerHeight * 0.3 }, "<")
  .from(".left-back-tree", { y: innerHeight * 0.2, x: 50 }, 0.1)
  .from(".right-back-tree", { y: innerHeight * 0.2, x: -50 }, "<")
  .from(".left-back-tree2", { y: innerHeight * 0.2, x: 150 }, 0.2)
  .from(".right-back-tree2", { y: innerHeight * 0.2, x: -150 }, "<")
  .from(".mtns", { y: innerHeight * 0.3 }, 0.1)
  .from(".lt-bkground", { y: innerHeight * 0.3 }, 0.2)
  .from(".left-foreground", { y: innerHeight * 0.2 }, 0.1)
  .from(".right-foreground", { y: innerHeight * 0.2 }, "<")
  .from(".present-back", { y: innerHeight * 0.25 }, 2)
  .from(".present-primary", { y: innerHeight * 0.5 }, "<");

// ~*~*~*~*~*~*~*~ SLOWER SCROLL TIMELINE ~*~*~*~*~*~*~*~

let slowScroll = {
  trigger: ".ground-container",
  start: "-=500",
  end: "bottom bottom",
  normalizeScroll: true,
  ease: "ease-in",
  scrub: 3,
  anticipatePin: 1,
};
let slowTL = gsap.timeline({ scrollTrigger: slowScroll });
slowTL
  .fromTo(
    ".comet",
    { y: -300, x: innerWidth * 1.1 },
    { y: innerHeight * 0.8, x: -800 },
  )
  .from(".main-tree", { y: innerHeight * 0.85 }, 0.5);

// ~*~*~*~*~*~*~*~ NON SCROLL ANIMATIONS ~*~*~*~*~*~*~*~

let primaryPresentWiggle = gsap.to(".present-primary", {
  repeat: -1,
  duration: 2,
  ease: "bounce.out",
  yoyo: true,
  rotate: 2,
  transformOrigin: "60% 90%",
  scale: 0.95,
});
let leftForegroundAnim = gsap.fromTo(
  ".left-foreground",
  {
    x: 5,
    yoyo: true,
    repeat: -1,
    duration: 2,
  },
  {
    x: -5,
    yoyo: true,
    repeat: -1,
    duration: 2.1,
  },
);
let rightForegroundAnim = gsap.fromTo(
  ".right-foreground",
  {
    x: -5,
    yoyo: true,
    repeat: -1,
    duration: 2,
  },
  {
    x: 5,
    yoyo: true,
    repeat: -1,
    duration: 2,
  },
);
let lights = gsap.utils.toArray(".lights");
lights.forEach((light) => {
  gsap.to(light, {
    opacity: 1,
    duration: gsap.utils.random(1, 4),
    repeat: -1,
    yoyo: true,
  });
});
let present = gsap
  .to(".present-primary", {
    duration: 1,
    ease: "ease-in",
    rotate: 4,
    transformOrigin: "60% 90%",
    scale: 1.55,
  })
  .reverse();
let card = gsap
  .to(".card-container", {
    duration: 1,
    delay: 1,
    ease: "ease-in",
    opacity: 1,
  })
  .reverse();

//  ~*~*~*~*~*~*~*~ SCROLL EVENT LISTENERS ~*~*~*~*~*~*~*~

function pauseAnimations() {
  primaryPresentWiggle.pause();
  leftForegroundAnim.pause();
  rightForegroundAnim.pause();
}
function resumeAnimations() {
  primaryPresentWiggle.resume(true);
  leftForegroundAnim.resume(true);
  rightForegroundAnim.resume(true);
  card.reverse();
  present.reverse();
}
ScrollTrigger.addEventListener("scrollStart", () => pauseAnimations());
ScrollTrigger.addEventListener("scrollEnd", () => resumeAnimations());

// ~*~*~*~*~*~*~*~ CLICK ANIMATIONS ~*~*~*~*~*~*~*~

const primaryPresent = document.querySelector(".present-primary");
primaryPresent.addEventListener("click", function (e) {
  pauseAnimations();
  if (present.reversed() && card.reversed()) {
    present.play();
    card.play();
  } else {
    present.reverse();
    card.reverse();
    resumeAnimations();
  }
});
