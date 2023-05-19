let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

window.onload = () => {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
}

window.addEventListener("online", () => {
  onLine();
});

window.addEventListener("offline", () => {
  offLine();
});

function onLine() {
  title.innerHTML = "Online Now";
  title.style.color = "#008000";
  ul.style.display = "none";
  reload.style.display = "none";
}

function offLine() {
  title.innerHTML = "Offline Now";
  title.style.color = "#666";
  ul.style.display = "block";
  reload.style.display = "block";
}

reload.onclick = () => {
  window.location.reload();
}