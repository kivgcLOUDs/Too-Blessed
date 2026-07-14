// import { gsap } from "gsap";
import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "../node_modules/gsap/SplitText.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

ScrollTrigger.create({
  trigger: "#menu",
  start: "top top",
  end: "bottom top",
  scrub: 8,
  // pinSpacing: true,
  pin: true,
  // markers: {
  //   startColor: "black",
  //   endColor: "black",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   indent: 20,
  // },
  onUpdate: (self) => console.log("direction:", self.direction),
});

gsap.to(".special-menu-item-img", {
  rotation: "360",
  duration: 40,
  scrub: 8,
  scrollTrigger: {
    trigger: "#menu",
    start: "top 30%",
    end: "top top",
    toggleActions: "restart none complete reverse",
  },
});
