// import { gsap } from "gsap";
import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "../node_modules/gsap/SplitText.js";
import { _horizontal } from "../node_modules/gsap/Observer.js";

const wrapper = document.querySelector(".event-container");
const aboutContent = document.querySelector(".about");

gsap.registerPlugin(ScrollTrigger, SplitText, _horizontal);

ScrollTrigger.create({
  trigger: "#menu",
  start: "top top",
  end: "bottom top",
  scrub: 8,
  pinSpacing: true,
  invalidateOnRefresh: true,
  pin: true,
  // markers: {
  //   startColor: "black",
  //   endColor: "black",
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   indent: 20,
  // },
  // onUpdate: (self) => console.log("direction:", self.direction),
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

gsap.to(".event-container", {
  x: () => -(wrapper.scrollWidth - window.innerWidth),
  ease: "none",
  markers: {
    startColor: "black",
    endColor: "black",
    fontSize: "18px",
    fontWeight: "bold",
    indent: 20,
  },

  scrollTrigger: {
    trigger: ".event",
    start: "top top",
    end: () => `+=${wrapper.scrollWidth}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
  },
});

gsap.to(".event-imgs", {});

gsap.from(".about", {
  y: "30%",
  duration: "1.5",
  scrub: 2,
  start: "top, 50%",
  end: "top bottom",

  scrollTrigger: {
    trigger: ".about-left .about-right",
  },
});

function aboutSectionFn(entry, check) {}

const observer = new IntersectionObserver(aboutSectionFn, {
  threshold: 0.3,
});

aboutContent.observer();
