import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
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


