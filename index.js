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
      AnswerA :"300 000 habitants",
      AnswerB :"500 000 habitants",
      AnswerC:"800 000 habitants",
      AnswerD:"1 million d'habitants",
    correctAnswer: 1,
  },
  {
    question: "Dans quelle région de la France se trouve Lille ?",
      AnswerA:"Île-de-France",
      AnswerB:"Bretagne",
      AnswerC:"Haut-de-France",
      AnswerD:"Occitanie",
    correctAnswer: 2,
  },
  {
    question: "Quel est le nom du fleuve qui traverse Lille ?",
    AnswerA:"La Seine",
    AnswerB:"La Loire",
    AnswerC:"La Deûle",
    AnswerD:"La Garonne",
    correctAnswer: 2,
  },
  {
    question:
      "Quel est le nom de la célèbre place de Lille, où se trouve l'Hôtel de Ville ?",
    AnswerA:"Place de la République",
    AnswerB:"Place du Général de Gaulle (Grand-Place)",
    AnswerC:"Place de la Bastille",
    AnswerD:"Place de la Concorde",
    correctAnswer: 1,
  },
  {
    question:
      "Combien de départements composent la région des Hauts-de-France, où se trouve Lille ?",
    AnswerA:"2",
    AnswerB:"3",
    AnswerC:"4",
    AnswerD:"5",
    correctAnswer: 1,
  },
  {
    question:
      "Lille est située à proximité d'une frontière d'un pays voisin lequel ?",
    AnswerA:"Belgique",
    AnswerB:"Allemagne",
    AnswerC:"Espagne",
    AnswerD:"Italie",
    correctAnswer: 0,
  },
  // Ajoutez autant de questions que vous le souhaitez
];
// si bonne réponse alors couleur verte sinon coleur rouge
if (rightAnswer) {
  transfromO
}
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