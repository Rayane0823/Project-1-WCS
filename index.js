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

const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Londres", "Berlin"],
    correctAnswer: 0,
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    options: ["Océan Atlantique", "Océan Indien", "Océan Pacifique"],
    correctAnswer: 2,
  },
  // Ajoutez autant de questions que vous le souhaitez
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
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
