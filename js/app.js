// import { gsap } from "../node_modules/gsap";

import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "../node_modules/gsap/SplitText.js";
import { _horizontal } from "../node_modules/gsap/Observer.js";
gsap.registerPlugin(ScrollTrigger, SplitText, _horizontal);

const wrapper = document.querySelector(".gallery");
const galleryContainer = document.querySelector(".gallery-section");

gsap.to(".gallery", {
  x: () => -(wrapper.scrollWidth - window.innerWidth),
  ease: "none",
  // stagger: 1,

  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top top",
    end: () => `+=${wrapper.scrollWidth}`,

    // onEnterBack: () => (galleryContainer.style.backgroundColor = "#ff6b35"),
    // onLeaveBack: () => (galleryContainer.style.backgroundColor = "#eee"),
    // onEnter: () => (galleryContainer.style.backgroundColor = "#000"),

    toggleClass: {
      targets: ".gallery-section",
      className: "active",
    },

    pin: true,
    scrub: 1,
    markers: false,
    invalidateOnRefresh: true,
  },
});

gsap.from(".flexy", {
  toggleClass: {
    targets: ".gallery-section",
    // opacity: 1,
    // className: "gallery-section--active",
  },

  // y: "30%",
  scrollTrigger: {
    trigger: ".gallery-section",
    onEnter: () => galleryContainer.classList.add("gallery-section--active"),
    start: "top 50%",
    end: "bottom top",
    // scrub: 1,
    // once: true,
    // markers: true,
  },
});
