import { gsap } from "../node_modules/gsap";

// import { ScrollTrigger } from "../node_modules/gsap/gsap-core/ScrollTrigger";
// // ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from "../node_modules/gsap/gsap-core/ScrollSmoother";
// import { SplitText } from "../node_modules/gsap/gsap-core/SplitText";
// import { TextPlugin } from "../node_modules/gsap/gsap-core/TextPlugin";

gsap.to(".gallery-content", {
  backgroundColor: "blue",

  scrollTrigger: {
    trigger: ".gallery",
    markers: true,
  },
});
