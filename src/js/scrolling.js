import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);


// this section works, kind of.
gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    // start: "bottom bottom ",
    start: "center center",
    end: "bottom top",
    ease: "ease-in",
    // end: "+=2000",
    scrub: 3,
    pin: true,
    markers: true,
    stagger: 1,
  }
})
  .from("#cloud-1",  { y: innerHeight * 1.2, x: innerWidth * 0.2})
  .from("#cloud-4",  { y: innerHeight * 1.1})
  .from("#cloud-2",  { y: innerHeight * 1.1, x: innerWidth * 0.3 })
  .from("#cloud-3",  { y: innerHeight * 1.0 ,  x: 50})
  .from("#cloud-5",  { y: innerHeight * 1.5 ,  x: -400 })
  .to({}, {duration: 2})




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
