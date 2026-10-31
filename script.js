function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}
const colors = ["#0b1020", "#102E50", ];
const textColors = ["#f1f5f9","#4ade80",];
let colorIndex = 0;


const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
  document.body.style.color = textColors[colorIndex];
});
// const navContainer = document.getElementById("navContainer");
// navContainer.addEventListener("click", () => {
//    colorIndex = (colorIndex + 1) % colors.length;
//   document.body.style.backgroundColor = colors[colorIndex];
//   document.body.style.color = textColors[colorIndex];  
// });