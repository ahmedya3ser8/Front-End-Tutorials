
let div = document.querySelector("div");
let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function() {
  count.innerHTML = maxLength - this.value.length;
  // Add Or Remove Class Zero To Count
  count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
  // Set The Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};