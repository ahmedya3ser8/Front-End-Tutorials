const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

const lvls = {
  "Easy": 6,
  "Normal": 4,
  "Hard": 2
}

let defaultLvl = "Normal";
let defaultSeconds = lvls[defaultLvl];

let messageLvl = document.querySelector(".message .lvl");
let messageSeconds = document.querySelector(".message .seconds");
let startGame = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finish = document.querySelector(".finish");

messageLvl.innerHTML = defaultLvl;
messageSeconds.innerHTML = defaultSeconds;
timeSpan.innerHTML = defaultSeconds;
scoreTotal.innerHTML = words.length;

input.onpaste = function() {
  return false;
}

startGame.onclick = function() {
  this.remove();
  input.focus();
  generateWord();
}

function generateWord() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  theWord.innerHTML = randomWord;
  upcomingWords.innerHTML = '';
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let divText = document.createTextNode(words[i]);
    div.appendChild(divText);
    upcomingWords.appendChild(div);
  }
  startPlay();
}

function startPlay() {
  timeSpan.innerHTML = defaultSeconds;
  let start = setInterval(() => {
    timeSpan.innerHTML--;
    if (timeSpan.innerHTML === "0") {
      clearInterval(start);
      if (theWord.innerHTML.toLowerCase() == input.value.toLowerCase()) {
        input.value = '';
        scoreGot.innerHTML++;
        if (words.length > 0) {
          generateWord();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spanText = document.createTextNode("Congratulations");
          span.appendChild(spanText);
          finish.appendChild(span);
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finish.appendChild(span);
      }
    }
  }, 1000);
};