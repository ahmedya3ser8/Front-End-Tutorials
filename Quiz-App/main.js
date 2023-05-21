let countSpan = document.querySelector(".count span");
let Bullets = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");

let currentIndex = 0;

function getQuestion() {
  let myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let QuestionObject = JSON.parse(this.responseText);
      let questionCount = QuestionObject.length;
      createBullets(questionCount);
      addData(QuestionObject[currentIndex], questionCount);
    }
  }
  myRequest.open("GET", "answers.json", true);
  myRequest.send();
}

getQuestion();

function createBullets(num) {
  countSpan.innerHTML = num;
  for (let i = 0; i < num; i++) {
    let theBullet = document.createElement("span");
    if (i === 0) {
      theBullet.classList.add("active");
    }
    Bullets.appendChild(theBullet);
  }
}

function addData(obj, count) {
  let questionTitle = document.createElement("h2");
  let titleText = document.createTextNode(obj["title"]);
  questionTitle.appendChild(titleText);
  quizArea.appendChild(questionTitle);
  
  for (let i = 1; i <= 4; i++) {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("answer");

    let radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "questions";
    radioInput.id = `answer_${i}`;
    radioInput.dataset.answer = obj[`answer_${i}`];

    if (i === 1) {
      radioInput.checked = true;
    }

    let theLabel = document.createElement("label");
    theLabel.htmlFor = `answer_${i}`;
    let labelText = document.createTextNode(obj[`answer_${i}`]);
    theLabel.appendChild(labelText);

    mainDiv.append(radioInput, theLabel);
    answersArea.appendChild(mainDiv);
  }
}