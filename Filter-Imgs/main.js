
const switcherlLis = document.querySelectorAll(".switcher li");
const imgs = Array.from(document.images);

switcherlLis.forEach((li) => {
  li.addEventListener("click", RemoveActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All li and add active Class to the Current li

function RemoveActive() {
  switcherlLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((ele) => {
    ele.style.display = "block";
  });
}