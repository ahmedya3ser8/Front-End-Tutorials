let countSpan = document.querySelector(".count span");
let Bullets = document.querySelector(".bullets");
let BulletsSpans = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let results = document.querySelector(".results");

let currentIndex = 0;
let rightAnswer = 0;

function getQuestion() {
  let myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let QuestionObject = JSON.parse(this.responseText);
      let questionCount = QuestionObject.length;
      createBullets(questionCount);
      addData(QuestionObject[currentIndex], questionCount);
      submitButton.onclick = () => {
        let theRightAnswer = QuestionObject[currentIndex].right_answer;
        currentIndex++;
        checkAnswer(theRightAnswer, questionCount);
        quizArea.innerHTML = "";
        answersArea.innerHTML = "";
        addData(QuestionObject[currentIndex], questionCount);
        handeleBullets();
        showResults(questionCount);
      }
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
    BulletsSpans.appendChild(theBullet);
  }
}

function addData(obj, count) {
  if (currentIndex < count) {
    let questionTitle = document.createElement("h2");
    let titleText = document.createTextNode(obj["title"]);
    questionTitle.appendChild(titleText);
    quizArea.appendChild(questionTitle);
    
    for (let i = 1; i <= 4; i++) {
      let mainDiv = document.createElement("div");
      mainDiv.classList.add("answer");
  
      let radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "question";
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
}

function checkAnswer(rAnswer, count) {
  let answers = document.getElementsByName("question");
  let choosenAnswer;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      choosenAnswer = answers[i].dataset.answer;
    }
  }
  if (rAnswer === choosenAnswer) {
    rightAnswer++;
  }
}

function handeleBullets() {
  let bulletsSpans = document.querySelectorAll(".bullets .spans span");
  let bulletsArray = Array.from(bulletsSpans);
  bulletsArray.forEach((span, index) => {
    if (currentIndex === index) {
      span.classList.add("active");
    }
  });
}

function showResults(count) {
  let theResults;
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    Bullets.remove();
    if (rightAnswer > (count / 2) && rightAnswer < count) {
      theResults = `<span class ="good">Good</span>, ${rightAnswer} From ${count}`;
    } else if (rightAnswer === count) {
      theResults = `<span class ="perfect">Perfect</span>, All Answers Is Good`;
    } else {
      theResults = `<span class ="bad">Bad</span>, ${rightAnswer} From ${count}`;
    }
    results.innerHTML = theResults;
    results.style.padding = "10px";
    results.style.backgroundColor = "#fff";
    results.style.marginTop = "10px";
  }
}