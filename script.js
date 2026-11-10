// function toggleMenu() {
//     document.getElementById("mobileMenu").classList.toggle("active");
// }
// const colors = ["#0b1020", "#102E50", ];
// const textColors = ["#f1f5f9","#4ade80",];
// let colorIndex = 0;


// const colorBtn = document.getElementById("colorBtn");

// colorBtn.addEventListener("click", () => {
//   colorIndex = (colorIndex + 1) % colors.length;
//   document.body.style.backgroundColor = colors[colorIndex];
//   document.body.style.color = textColors[colorIndex];
// });
// const navContainer = document.getElementById("navContainer");
// navContainer.addEventListener("click", () => {
//    colorIndex = (colorIndex + 1) % colors.length;
//   document.body.style.backgroundColor = colors[colorIndex];
//   document.body.style.color = textColors[colorIndex];  
// });



const themes = ["theme-1", "theme-2"];
let currentThemeIndex = 0;

const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  document.body.setAttribute("data-theme", themes[currentThemeIndex]);
});


const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const navLinks = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  if (navLinks.classList.contains("active")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

document.querySelectorAll(".nav-action a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  });
});


const observerOptions = {
  root: null,
  threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observerInstance.unobserve(entry.target);
    }
  });
}, observerOptions);
document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 200);
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});