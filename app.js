// select js-btn,js-overlay,close-btn
// listen for click events on js-btn and close-btn
// when user clicks js-btn add .open-js to js-overlay
// when user clicks close-btn remove .open-js from js-overlay

const jsBtn = document.querySelector(".js-btn");
const js = document.querySelector(".js-overlay");
const closeBtn = document.querySelector(".close-btn");

jsBtn.addEventListener("click", function () {
  js.classList.add("open-js");
});
closeBtn.addEventListener("click", function () {
  js.classList.remove("open-js");
});
