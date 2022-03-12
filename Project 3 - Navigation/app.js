const nav = document.querySelector("nav");
const icon = document.querySelector("i");

icon.addEventListener("click", () => {
  nav.classList.toggle("display-none");
  icon.classList.toggle("animate-icon");
});
