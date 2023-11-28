import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

// this section works, kind of.
let skyTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    // start: "bottom bottom ",
    start: "center center",
    end: "bottom top",
    ease: "ease-in",
    // end: "+=7000",
    scrub: 3,
    pin: true,
    // markers: true,
    stagger: 1.5,
  }
})
  .from("#moon-1",  { y: innerHeight * 1.2, x: innerWidth * 0.2})
  .from("#cloud-1",  { y: innerHeight * 1.1, x: innerWidth * 0.3 })
  .from("#cloud-2",  { y: innerHeight * 1.0 ,  x: 50})
  .from("#santa-1",  { y: innerHeight * 1.3, x: -innerWidth, duration: 4})
  .from("#aoc-heading", { y: innerHeight * 1.1, duration: 2})
  .from("#aoc-heading-2",  { y: innerHeight * 1.1})
  .from("#cloud-5",  { y: innerHeight * 1.5 ,  x: -400 })
  .to({}, {duration: 2})



const tmpGroundScroll = {
  trigger: ".ground-container",
  start:"center center",
  end: "bottom top",
  ease: "ease-in",
  scrub: 2,
  pin: true,
  markers: true,
}
// Start's first value represents the part of the trigger which
// will initiate the animation once it meets the second value,
// the second value is the location in the viewport
// const groundElems = gsap.utils.toArray('.ground');
// groundElems.forEach(box => {
//   gsap.to(box, {
//     x: 300,
//     y: innerHeight * 0.2,
//     scrollTrigger: {
//       trigger: box,
//       scrub: true,
//       pin: true,
//     }
//   })
// });
let groundTL = gsap.timeline({ scrollTrigger: tmpGroundScroll })
groundTL
  .from(".left-back-tree", {y: innerHeight * 0.2, x: innerWidth * 0.15, })
  .from(".right-back-tree", { y: innerHeight * 0.2, x: -innerWidth * 0.15, }, '<')
  .from(".left-front-tree", {y: innerHeight * 0.3}, 0.1)
  .from(".right-front-tree", {y: innerHeight * 0.3}, '<')

// gsap.to("#cloud-1", {
//   y: -200,
//   x: -400,
//   ease: "ease-in",
//   scrollTrigger: {
//     trigger: ".container",
//     start: () => 'top top',
//     scrub: true,
//     markers: true,
//     end: () => "bottom bottom",
//     anticipatePin: 1,
//     onLeave: () => console.log(" cloud 1 leave"),
//     onEnter: () => console.log(" cloud 1 enter"),
//     onEnterBack: () => console.log(" cloud 1 enter back"),
//     markers: true,
//     pin: true,
//   }
// })

// gsap.to("#cloud-2", {
//   y: -300,
//   x: 100,
//   ease: "ease-in",
//   scrollTrigger: {
//     trigger: ".container",
//     start: () => 'top top',
//     markers: true,
//     scrub: true,
//     anticipatePin: 1,
//     pin: true,
//     end:() => "bottom bottom",
//     onLeave: () => console.log(" cloud 2 leave"),
//     onEnter: () => console.log(" cloud 2 enter"),
//     onEnterBack: () => console.log(" cloud 2 enter back"),
//   }
// })
// gsap.to("#cloud-3", {
//   y: -180,
//   x: -20,
//   ease: "ease-in",
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".container",
//     start: 'top top',
//     pin: true,
//     scrub: 0.5,
//     anticipatePin: 1,
//     end: "+=680",
//   }
// })
// gsap.to("#cloud-4", {
//   y: -250,
//   ease: "ease-in",
//   x: 10,
//   scrollTrigger: {
//     trigger: ".container",
//     start: 'top center',
//     scrub: true
//   }
// })
// gsap.to("#cloud-5", {
//   y: -475,
//   ease: "ease-in",
//   x: 25,
//   scrollTrigger: {
//     trigger: ".container",
//     start: 'top center',
//     markers: true,
//   }
// })
