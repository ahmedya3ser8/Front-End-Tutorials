let tabs = document.querySelectorAll(".tabs li");
// let tabsArray = Array.from(tabs);
let content = document.querySelectorAll(".content > div");
// let contentArray = Array.from(content);

// tabs.forEach((li) => {
//   li.addEventListener("click", removeActive);
//   li.addEventListener("click", manageContent);
// })

// function removeActive() {
//   tabs.forEach((li) => {
//     li.classList.remove("active");
//     this.classList.add("active");
//   });
// }

// function manageContent() {
//   content.forEach((ele) => {
//     ele.style.display = "none";
//   });
//   document.querySelectorAll(this.dataset.cont).forEach((li) => {
//     li.style.display = "block";
//   });
// }


tabs.forEach((li) => {
  li.addEventListener("click", function() {
    tabs.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
    content.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cont).forEach((li) => {
      li.style.display = "block";
    });
  });
});
