const timerElement = document.getElementById("timer");
let timer = 15;

function timeDecreasing() {
  timerElement.innerText = timer;
  timer--;

  if (timer <= 0) {
    timer = 0;
  }
}

setInterval(timeDecreasing, 1000);

// parti questionnaire .
// Ajoutez autant de questions que vous le souhaitez
// si bonne réponse alors couleur verte sinon coleur rouge

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("answers-buttons");
const nextQuestionButton = document.getElementById("next-question-button");
const resultsContainer = document.getElementById("results-container");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsList.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const listItem = document.createElement("li");
    const optionRadio = document.createElement("input");
    optionRadio.type = "radio";
    optionRadio.name = "answer";
    optionRadio.value = index;
    optionRadio.id = `option${index}`;

    const optionLabel = document.createElement("label");
    optionLabel.textContent = option;
    optionLabel.setAttribute("for", `option${index}`);

    listItem.appendChild(optionRadio);
    listItem.appendChild(optionLabel);
    optionsList.appendChild(listItem);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (!selectedOption) {
    alert("Veuillez sélectionner une réponse.");
    return;
  }

  const userAnswer = parseInt(selectedOption.value);
  const currentQuestion = questions[currentQuestionIndex];

  if (userAnswer === currentQuestion.correctAnswer) {
    correctAnswers++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionText.textContent = "Questionnaire terminé !";
  optionsList.innerHTML = "";
  nextQuestionButton.style.display = "none";
  resultsContainer.textContent = `Score : ${correctAnswers} / ${questions.length}`;
}

nextQuestionButton.addEventListener("click", checkAnswer);

// Afficher la première question au chargement de la page
displayQuestion();

import { questionsToQuiz } from "./Question.js";

const answers = document.querySelector(".answers");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answserD = document.querySelector(".answerD");
const instructions = document.querySelector("#instructions");
const goodAnswer = document.getElementById("goodAnswer");
const wrongAnswer = document.getElementById("wrongAnswer");

const rightWrong = document.querySelectorAll(".answer");

rightWrong[0].addEventListener("click", changeRightColor);
rightWrong[1].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[0].style.backgroundColor = "Green";
  marker1.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker1.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker1.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker1.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

const rightWrong = document.querySelectorAll(".answer");

rightWrong[0].addEventListener("click", changeRightColor);
rightWrong[1].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[0].style.backgroundColor = "Green";
  marker2.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker2.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker2.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker2.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

const rightWrong = document.querySelectorAll(".answer");

rightWrong[1].addEventListener("click", changeRightColor);
rightWrong[0].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[1].style.backgroundColor = "Green";
  marker3.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker3.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker3.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker3.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[1].addEventListener("click", changeRightColor);
rightWrong[0].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[1].style.backgroundColor = "Green";
  marker4.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker4.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker4.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker4.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[2].addEventListener("click", changeRightColor);
rightWrong[0].addEventListener("click", changeWrongColor1);
rightWrong[1].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[2].style.backgroundColor = "Green";
  marker5.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker5.remove();
  rightWrong[2].style.backgroundColor = "Green";
  rightWrong[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker5.remove();
  rightWrong[2].style.backgroundColor = "Green";
  rightWrong[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker5.remove();
  rightWrong[2].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[1].addEventListener("click", changeRightColor);
rightWrong[0].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[1].style.backgroundColor = "Green";
  marker6.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker6.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker6.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker6.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[0].addEventListener("click", changeRightColor);
rightWrong[1].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[0].style.backgroundColor = "Green";
  marker7.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker7.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker7.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker7.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[1].addEventListener("click", changeRightColor);
rightWrong[0].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[1].style.backgroundColor = "Green";
  marker8.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker8.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker8.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker8.remove();
  rightWrong[1].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[0].addEventListener("click", changeRightColor);
rightWrong[1].addEventListener("click", changeWrongColor1);
rightWrong[2].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[0].style.backgroundColor = "Green";
  marker9.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker9.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker9.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker9.remove();
  rightWrong[0].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
const rightWrong = document.querySelectorAll(".answer");

rightWrong[2].addEventListener("click", changeRightColor);
rightWrong[0].addEventListener("click", changeWrongColor1);
rightWrong[1].addEventListener("click", changeWrongColor2);
rightWrong[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong[2].style.backgroundColor = "Green";
  marker10.remove();
  goodAnswer.play();
}

function changeWrongColor1() {
  marker10.remove();
  rightWrong[2].style.backgroundColor = "Green";
  rightWrong[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  marker10.remove();
  rightWrong[2].style.backgroundColor = "Green";
  rightWrong[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  marker10.remove();
  rightWrong[2].style.backgroundColor = "Green";
  rightWrong[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}
