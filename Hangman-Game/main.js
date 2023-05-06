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