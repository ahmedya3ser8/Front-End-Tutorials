let letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainers = document.querySelector(".letters");

lettersArray.forEach(letter => {
  let span = document.createElement("span");
  let spanText = document.createTextNode(letter);
  span.appendChild(spanText);
  span.className = "letter-box";
  lettersContainers.appendChild(span);
});

const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueName);

lettersAndSpace.forEach(letter => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "has-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongTries = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    let chosenWord = Array.from(randomValueName.toLowerCase());
    chosenWord.forEach((wordLetter, indexWord) => {
      if (clickedLetter === wordLetter) {
        theStatus = true;
        guessSpans.forEach((span, spanIndex) => {
          if (indexWord === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
      });
    if (theStatus !== true) {
      wrongTries++;
      theDraw.classList.add(`wrong-${wrongTries}`);
      document.getElementById("fail").play();
      if (wrongTries === 8) {
        endGame();
        lettersContainers.classList.add("finished");
        setTimeout(() => {
          location.reload();
        },1000)
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(`Game Over, The Word is ${randomValueName}`);
  div.appendChild(divText);
  div.className = 'popup';
  document.body.appendChild(div);
}