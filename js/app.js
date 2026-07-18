// import { gsap } from "gsap";
import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "../node_modules/gsap/SplitText.js";
import { _horizontal } from "../node_modules/gsap/Observer.js";
gsap.registerPlugin(ScrollTrigger, SplitText, _horizontal);

("mycolor.space, fontpair.co");

const wrapper = document.querySelector(".event-container");
const aboutContent = document.querySelector(".about");

////////////////////
// TO SPLIT HERO TEXT
SplitText.create(".main-left-heading--secondary", {
  type: "chars",
  autoSplit: true,
  onSplit: (self) => {
    console.log(self);
    return gsap.from(self.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
    });
  },
});

/////////////////
//TO BRING BTN FROM THE BOTTOM
gsap.from(".main-left-btn", {
  y: 100,
  opacity: 0,
  delay: 1.2,
  stagger: 1,
});

/////////////////
// TO FLEX IMAGE FROM THE RIGHT
gsap.from(".main-right", {
  x: 100,
  opacity: 0,
  delay: 1.5,
  stagger: 1,
});

/////////////
// ICONS OPACITY
gsap.from(".icon", {
  opacity: 0,
  delay: 1.5,
  stagger: 0.2,
  transition: 0.2,
});

/////////////
// TO SPLIT BY WORDS IN SUB HERO TEXT
SplitText.create(".main-left-heading--tertiary", {
  type: "lines",
  autoSplit: true,
  onSplit: (self) => {
    console.log(self);
    return gsap.from(self.lines, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      delay: 1.5,
    });
  },
});

requestAnimationFrame(() => {
  ScrollTrigger.refresh();
});

ScrollTrigger.create({
  trigger: "#menu",
  start: "top top",
  end: "bottom top",
  scrub: 1,
  // invalidateOnRefresh: true,
  pin: true,
  pinSpacing: true,
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

// gsap.to(".event-imgs", {});

gsap.from(".about", {
  y: "30%",
  duration: "1",

  scrollTrigger: {
    trigger: ".about-container",
    start: "top, 70%",
    end: "bottom bottom",
    // markers: {
    //   startColor: "green",
    //   endColor: "black",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20,
    // },
  },
});
