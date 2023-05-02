
let scrollProgress = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  // scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  scrollProgress.style.width = `${(scrollTop * 100) / height}%`;
});