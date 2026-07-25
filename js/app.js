import MyVideo from "./video-audio.js";

import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "../node_modules/gsap/SplitText.js";
import { _horizontal } from "../node_modules/gsap/Observer.js";
gsap.registerPlugin(ScrollTrigger, SplitText, _horizontal);

const wrapper = document.querySelector(".gallery");
const galleryContainer = document.querySelector(".gallery-section");
const icon = document.querySelectorAll(".icon");
const navBar = document.querySelector(".narbar");

gsap.to(".gallery", {
  x: () => -(wrapper.scrollWidth - window.innerWidth),
  ease: "none",
  // stagger: 1,

  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top top",
    end: () => `+=${wrapper.scrollWidth}`,

    onEnter: () => {
      gsap.to(".navbar", {
        opacity: 0,
        overwrite: true,
      });
    },

    onLeave: () => {
      gsap.to(".navbar", {
        opacity: 1,
        overwrite: true,
      });
    },

    onEnterBack: () => {
      gsap.to(".navbar", {
        opacity: 0,
        overwrite: true,
      });
    },

    onLeaveBack: () => {
      gsap.to(".navbar", {
        opacity: 1,
        overwrite: true,
      });
    },

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

/////////////////
// GSAP INTERSECTION KIND OF OBSERVER TO ALL SECTIONS

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      // toggleActions: "play none none reverse",
      once: true,
      // markers: true,
    },
  });
});

//////////////////////////
// Hero section animation added successfully

const tl = gsap.timeline({
  defaults: {
    ease: "power4.out",
  },
});

const headingOne = new SplitText(".main-heading:first-of-type", {
  type: "words",
});

const headingTwo = new SplitText(".main-heading--dark", {
  type: "words",
});

tl.from(headingOne.words, {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
})
  .from(
    headingTwo.words,
    {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
    },
    "-=0.5",
  )
  .from(
    ".main-text",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    },
    "-=0.5",
  )
  .from(
    ".main-btn",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.4",
  )

  .from(".main-spice-palms--left", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  })
  .from(".main-spice-palms--right", {
    y: -30,
    opacity: 0,
    duration: 1,
  })

  .from(".main-spice-veg--pear", {
    opacity: 0,
    // duration: 0.8,
  })

  .from(".main-spice-veg--tomatoes", {
    opacity: 0,
  });

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    gsap.to(".navbar", {
      y: "-100%",
      duration: 0.4,
      ease: "power2.out",
    });
  } else {
    // Scrolling up
    gsap.to(".navbar", {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",

      toggleClass: {
        // targets: ".navbar",
        className: "navbar--active",
      },
    });
  }

  lastScroll = currentScroll;
});
