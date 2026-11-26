import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

//!GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ! Anime.js
import { animate, splitText, stagger } from "animejs";
//!For typed js
//for bellow the Name
new Typed("#typednako", {
  strings: ["Beginner Web Developer", "Uses Ai as a Tool", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 1500,
  loop: true,
});

new Typed("#footerTyped", {
  strings: ["Let's Connect", "Let's Collaborate", "Let's Build Together"],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 1500,
  loop: true,
});

// Dropdown menu
const dropdown = document.querySelector(".dropdown");
const toggle = dropdown?.querySelector(".dropdown-toggle");

toggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = dropdown.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.addEventListener("click", () => {
  dropdown?.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dropdown?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.blur();
  }
});

//! Animate on scroll

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

// recalculate positions after iframes and images finish loading
window.addEventListener("load", () => AOS.refresh());

//! text animation -> anime.js

const section = document.querySelector("#about"); // your section
const { words } = splitText("#about ", {
  words: { wrap: "clip" },
});

const animation = animate(words, {
  y: [{ to: ["100%", "0%"] }, { to: "0%", delay: 750, ease: "in(3)" }],
  duration: 1000,
  ease: "out(3)",
  delay: stagger(30),
  loop: false,
  autoplay: false, // don't start on page load
});

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      animation.play(); // replay from the start each time you arrive
    }
  },
  { threshold: 0.4 }, // 40% of the section must be visible
);

observer.observe(section);

//!GSAP animation
gsap.registerPlugin(ScrollTrigger);

// Animate only if the user hasn't asked for reduced motion
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  // Stop the logos' CSS transition from fighting with GSAP
  gsap.set("#stack .tool-logos img", { transition: "none" });

  const tl = gsap.timeline({
    // clearProps hands control back to your CSS, so hover effects still work
    defaults: { duration: 0.6, ease: "power3.out", clearProps: "all" },
    scrollTrigger: {
      trigger: "#stack",
      start: "top 70%",
      once: true,
    },
  });

  // 1. Heading slides in from the left
  tl.from("#stack .section-head > *", {
    x: -60,
    autoAlpha: 0,
    stagger: 0.1,
  })
    // 2. Cards drop into place
    .from(
      "#stack .stack-item",
      {
        y: 80,
        rotation: -4,
        autoAlpha: 0,
        stagger: 0.15,
        ease: "back.out(1.5)",
      },
      "-=0.3",
    )
    // 3. Logos pop in
    .from(
      "#stack .tool-logos img",
      {
        scale: 0,
        rotation: -90,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "back.out(2)",
      },
      "-=0.5",
    )
    // 4. Labels fade up
    .from(
      "#stack .stack-item p",
      {
        y: 15,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.1,
      },
      "-=0.4",
    );
});

