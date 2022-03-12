const keyInfo = document.querySelector(".key-info");
const startMessage = document.querySelector("h1");
const code = document.querySelector(".code");
const key = document.querySelector(".key");

window.addEventListener("keyup", (e) => {
  startMessage.classList.add("display-none");
  keyInfo.classList.remove("display-none");
  code.innerText = e.code;
  key.innerText = e.key;
});
