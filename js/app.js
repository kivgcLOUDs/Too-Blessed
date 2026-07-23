// import { gsap } from "../node_modules/gsap";

import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "../node_modules/gsap/SplitText.js";
import { _horizontal } from "../node_modules/gsap/Observer.js";
gsap.registerPlugin(ScrollTrigger, SplitText, _horizontal);

gsap.to(".gallery-content", {
  pin: true,
  backgroundColor: "#421301",
  stagger: 1,

  scrollTrigger: {
    start: "top top",
    end: "bottom top",
    trigger: ".gallery",
    markers: true,
  },
});
