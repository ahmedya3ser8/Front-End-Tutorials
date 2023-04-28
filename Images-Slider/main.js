let imgsSlider = Array.from(document.querySelectorAll(".slider-container img"));
let imgsCount = imgsSlider.length;
let currentSlider = 1;
let slideNumber = document.querySelector(".slide-number");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

let paginationUl = document.createElement("ul");
paginationUl.setAttribute("id", "pagination-ul");

for (let i = 1; i <= imgsCount; i++) {
  let paginationLi = document.createElement("li");
  paginationLi.setAttribute("data-index", i);
  paginationLi.appendChild(document.createTextNode(i));
  paginationUl.appendChild(paginationLi);
}

document.getElementById("paginations").appendChild(paginationUl);

let paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < paginationsBullets.length; i++ ) {
  paginationsBullets[i].onclick = function() {
    currentSlider = this.dataset.index;
    theCheker();
  }
}

theCheker();

nextButton.onclick = function next() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlider++;
    theCheker();
  }
}

prevButton.onclick = function prev() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlider--;
    theCheker();
  }
}

function theCheker() {
  slideNumber.textContent = `Slide # ${currentSlider} of ${imgsCount}`;
  imgsSlider.forEach(img => {
    img.classList.remove("active");
  });
  paginationsBullets.forEach(bullet => {
    bullet.classList.remove("active");
  });
  imgsSlider[currentSlider - 1].classList.add("active");
  paginationUl.children[currentSlider - 1].classList.add("active");
  if (currentSlider == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlider == imgsCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}