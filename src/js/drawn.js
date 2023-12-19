import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

const one = document.querySelector.bind(document);
const all = document.querySelectorAll.bind(document);

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

// ~*~*~*~*~*~*~*~ SKY ELEMENTS SCROLL TIMELINE ~*~*~*~*~*~*~*~

gsap
  .timeline({
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
  })
  .from("#moon-1", { y: innerHeight * 1.2, x: innerWidth * 0.2 })
  .from("#cloud-1", { y: innerHeight * 1.1, x: innerWidth * 0.3 })
  .from("#cloud-2", { y: innerHeight * 1.0, x: 50 })
  .from("#santa-1", { y: innerHeight * 1.3, x: -innerWidth, duration: 4 })
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

gsap
  .timeline({ scrollTrigger: groundScroll })
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
  .from(".present-back", { y: innerHeight * 0.25 }, 2);

// ~*~*~*~*~*~*~*~ MAIN TREE TIMELINE ~*~*~*~*~*~*~*~

let slowScroll = {
  trigger: ".ground-container",
  start: "-=500",
  end: "bottom bottom",
  normalizeScroll: true,
  ease: "ease-in",
  scrub: 3,
  anticipatePin: 1,
};

gsap
  .timeline({ scrollTrigger: slowScroll })
  .fromTo(
    ".comet",
    { y: -300, x: innerWidth * 1.1 },
    { y: innerHeight * 0.8, x: -800 },
  )
  .from(".main-tree", { y: innerHeight * 0.85 }, 0.5);

// ~*~*~*~*~*~*~*~ CARD TIMELINE ~*~*~*~*~*~*~*~

let verySlow = {
  trigger: ".ground-container",
  start: "-=1000",
  end: "bottom bottom",
  normalizeScroll: true,
  ease: "ease-in",
  scrub: 3,
  anticipatePin: 1,
};

gsap
  .timeline({ scrollTrigger: verySlow })
  .from(".card-container", { y: innerHeight * 0.85 }, 0.5);
