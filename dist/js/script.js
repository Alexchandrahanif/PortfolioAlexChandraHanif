// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const top = document.querySelector("#top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbarfixed");
    top.classList.remove("hidden");
    header.classList.remove("navbarbiasa");
  } else {
    header.classList.add("navbarbiasa");
    top.classList.add("hidden");
    header.classList.remove("navbarfixed");
  }
};

// ini untuk bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//  Dark Mode Toggle

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  darkToggle.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
});
