import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#cloud-1", {
  y: 20,
  x: 0,
  ease: "ease-in",
  duration: 5,
  scrollTrigger: {
    trigger: "#cloud-1",
    pin: true,
    end: "+=0",
    start: 'top top',
    onUpdate: (self) => console.log("progress1:", self.progress),
  }
})

// gsap.to("#cloud-2", {
//   y: -50,
//   x: 20,
//   ease: "ease-in",
//   scrollTrigger: {
//     trigger: ".container",
//     start: 'top center',
//     onUpdate: (self) => console.log("progress2:", self.progress),
//   }
// })
// gsap.to("#cloud-3", {
//   y: -180,
//   x: -20,
//   ease: "ease-in",
//   scrollTrigger: {
//     trigger: ".container",
//     start: 'top center',
//     scrub: true
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
