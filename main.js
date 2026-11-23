import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

// ! Anime.js
import { animate, splitText, stagger } from 'animejs';
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

const section = document.querySelector('#about');          // your section
const { words } = splitText('#about ', {
  words: { wrap: 'clip' },
});

const animation = animate(words, {
  y: [
    { to: ['100%', '0%'] },
    { to: '0%', delay: 750, ease: 'in(3)' }
  ],
  duration: 550,
  ease: 'out(3)',
  delay: stagger(30),
  loop: false,
  autoplay: false,   // don't start on page load
});

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      animation.play();   // replay from the start each time you arrive
    }
  },
  { threshold: 0.4 }          // 40% of the section must be visible
);

observer.observe(section);
