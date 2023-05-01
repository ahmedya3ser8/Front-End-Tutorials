
let startGame = document.querySelector(".control-buttons span");

startGame.onclick = function() {
  let yourName = prompt("What is Your Name?");
  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove();
}

let duration = 1000;

let memoryGames = document.querySelector(".memory-game");

let blocks = Array.from(memoryGames.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", function() {
    flipped(block);
  })
});

function shuffle(array) {
  let current = array.length;
  let temp;
  let random;
  while(current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}

function flipped(selectBlock) {
  selectBlock.classList.add("flipped");
  let allFlipped = blocks.filter((flippedBlock) => flippedBlock.classList.contains("flipped"));
  if (allFlipped.length == 2) {
    stopClicking();
    checkMatchedBlocks(allFlipped[0], allFlipped[1]);
  }
}

function stopClicking() {
  memoryGames.classList.add("no-click");
  setTimeout(() => {
    memoryGames.classList.remove("no-click");
  }, duration);
}

function checkMatchedBlocks(first, second) {
  let triesElement = document.querySelector(".tries span");
  if (first.dataset.technology === second.dataset.technology) {
    first.classList.remove("flipped");
    second.classList.remove("flipped");

    first.classList.add("matched");
    second.classList.add("matched");

    document.getElementById("success").play();
  } else {
    triesElement.innerHTML++;
    setTimeout(() => {
      first.classList.remove("flipped");
      second.classList.remove("flipped");
    }, duration);
    
    document.getElementById("fail").play();
  }
}