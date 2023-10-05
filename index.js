// Chrono
const timerElement = document.getElementById("timer");
let timer = 15;

function timeDecreasing() {
  timerElement.innerText = timer;
  timer--;

  if (timer <= 0) {
    timer = 0;
  }
}







// Compteur de questions
const nextButton = document.getElementById("next-question-button");

let questionNumber = 1
const questionNumberElement = document.getElementById("questionNumber");

function increaseQuestionNumber() {
  if (questionNumber < 10) {
    questionNumber++
    questionNumberElement.textContent = "Question " + questionNumber + "/10"
  }
  else {
    showResults
  }
}
nextButton.addEventListener("click", increaseQuestionNumber);

// Reset chrono à chaque fois qu'on appuie sur "Question suivante"
let timerInterval = setInterval(timeDecreasing, 1000)

function timerReset() {
  clearInterval(timerInterval);
  timer = 15;
  timerInterval = setInterval(timeDecreasing, 1000);
}
nextButton.addEventListener("click", timerReset);




// parti questionnaire .

const questions = [
  {
    question: "quelle est la population actuelle de Lille",
    options: [
      "300 000 habitants",
      "500 000 habitants",
      "800 000 habitants",
      "1 million d'habitants",
    ],
    correctAnswer: 1,
  },
  {
    question: "Dans quelle région de la France se trouve Lille ?",
    options: ["Île-de-France", "Bretagne", "Haut-de-France", "Occitanie"],
    correctAnswer: 2,
  },
  {
    question: "Quel est le nom du fleuve qui traverse Lille ?",
    options: ["La Seine", "La Loire", "La Deûle", "La Garonne"],
    correctAnswer: 2,
  },
  {
    question:
      "Quel est le nom de la célèbre place de Lille, où se trouve l'Hôtel de Ville ?",
    options: [
      "Place de la République",
      "Place du Général de Gaulle (Grand-Place)",
      "Place de la Bastille",
      "Place de la Concorde",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Combien de départements composent la région des Hauts-de-France, où se trouve Lille ?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
  },
  {
    question:
      "Lille est située à proximité d'une frontière d'un pays voisin lequel ?",
    options: ["Belgique", "Allemagne", "Espagne", "Italie"],
    correctAnswer: 0,
  },
  // Ajoutez autant de questions que vous le souhaitez
];

let currentQuestionIndex = 0;
let ,correctAnswers = 0;

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
  })
};

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
};
function showResults() {
  questionText.textContent = "Questionnaire terminé !";
  optionsList.innerHTML = "";
  nextQuestionButton.style.display = "none";
  resultsContainer.textContent = `Score : ${correctAnswers} / ${questions.length}`;
};

nextQuestionButton.addEventListener("click", checkAnswer),

// Afficher la première question au chargement de la page
displayQuestion()
