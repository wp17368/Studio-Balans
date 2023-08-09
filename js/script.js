"use strict";
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menuBtn");
const facebookBtn = document.querySelector("#facebook-btn");
const sendEmailBtn = document.querySelector("#send-email-btn");

function toggleMenu() {
  navbar.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("scroll", navbar.classList.remove("active"));

