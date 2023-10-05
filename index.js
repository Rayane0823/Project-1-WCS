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
    question: "Quelle est la population actuelle de Lille ?",
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
    options: ["Espagne", "Allemagne", "Belgique", "Italie"],
    correctAnswer: 2,
  },
  {
    question: "Quel est le nom de la Cathédrale de Lille ?",
    options: [
      "Notre Dame de la Garde",
      "Notre Dame de la Treille",
      "Notre Dame de l'Annonaal",
      "La Cathédrale Sainte-Cécile",
    ],
    correctAnswer: 1,
  },
  {
    question: "Quel surnom est encore aujourdhui donné à Lille ?",
    options: [
      "La capitale des Gaules",
      "La belle endormie",
      "La cité des Papes",
      "La capitale des Flandres",
    ],
    correctAnswer: 3,
  },
  {
    question: "Quelle est l'adresse de la WCS Lille ?",
    options: [
      "13 rue du Général de Gaule",
      "124 avenue Montebello",
      "2 rue Victor Hugo",
      "on ne sait pas on s'est tous perdu a la rentrée",
    ],
    correctAnswer: 3,
  },
  {
    question: "Qui était le maire de Lille de 1973 à 2001 ?",
    options: [
      "Pierre Mauroy",
      "Martine Aubry",
      "Patrick Kanner",
      "Augustin Cament",
    ],
    correctAnswer: 0,
  },
  // Ajoutez autant de questions que vous le souhaitez
];

const question1 = [0];
const rightWrong1 = document.querySelectorAll(".answer");

rightWrong1[1].addEventListener("click", changeRightColor);
rightWrong1[0].addEventListener("click", changeWrongColor1);
rightWrong1[2].addEventListener("click", changeWrongColor2);
rightWrong1[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong1[1].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong1[1].style.backgroundColor = "Green";
  rightWrong1[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong1[1].style.backgroundColor = "Green";
  rightWrong1[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong1[1].style.backgroundColor = "Green";
  rightWrong1[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°2
const question2 = [1];
const rightWrong2 = document.querySelectorAll(".answer");

rightWrong2[2].addEventListener("click", changeRightColor);
rightWrong2[0].addEventListener("click", changeWrongColor1);
rightWrong2[1].addEventListener("click", changeWrongColor2);
rightWrong2[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong2[2].style.backgroundColor = "Green";
  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong2[2].style.backgroundColor = "Green";
  rightWrong2[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong2[2].style.backgroundColor = "Green";
  rightWrong2[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong2[2].style.backgroundColor = "Green";
  rightWrong2[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°3
const question3 = [2];
const rightWrong3 = document.querySelectorAll(".answer");

rightWrong3[2].addEventListener("click", changeRightColor);
rightWrong3[0].addEventListener("click", changeWrongColor1);
rightWrong3[1].addEventListener("click", changeWrongColor2);
rightWrong3[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong3[2].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong3[2].style.backgroundColor = "Green";
  rightWrong3[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong3[2].style.backgroundColor = "Green";
  rightWrong3[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong3[2].style.backgroundColor = "Green";
  rightWrong3[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°4
const question4 = [3];
const rightWrong4 = document.querySelectorAll(".answer");

rightWrong4[1].addEventListener("click", changeRightColor);
rightWrong4[0].addEventListener("click", changeWrongColor1);
rightWrong4[2].addEventListener("click", changeWrongColor2);
rightWrong4[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong4[1].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong4[1].style.backgroundColor = "Green";
  rightWrong4[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong4[1].style.backgroundColor = "Green";
  rightWrong4[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong4[1].style.backgroundColor = "Green";
  rightWrong4[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°5
const question5 = [4];
const rightWrong5 = document.querySelectorAll(".answer");

rightWrong5[1].addEventListener("click", changeRightColor);
rightWrong5[0].addEventListener("click", changeWrongColor1);
rightWrong5[2].addEventListener("click", changeWrongColor2);
rightWrong5[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong5[1].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong5[1].style.backgroundColor = "Green";
  rightWrong5[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong5[1].style.backgroundColor = "Green";
  rightWrong5[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong5[1].style.backgroundColor = "Green";
  rightWrong5[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°6
const question6 = [5];
const rightWrong6 = document.querySelectorAll(".answer");

rightWrong6[2].addEventListener("click", changeRightColor);
rightWrong6[0].addEventListener("click", changeWrongColor1);
rightWrong6[1].addEventListener("click", changeWrongColor2);
rightWrong6[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong6[2].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong6[2].style.backgroundColor = "Green";
  rightWrong6[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong6[2].style.backgroundColor = "Green";
  rightWrong6[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong6[2].style.backgroundColor = "Green";
  rightWrong6[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°7
const question7 = [6];
const rightWrong7 = document.querySelectorAll(".answer");

rightWrong7[1].addEventListener("click", changeRightColor);
rightWrong7[0].addEventListener("click", changeWrongColor1);
rightWrong7[2].addEventListener("click", changeWrongColor2);
rightWrong7[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong7[1].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong7[1].style.backgroundColor = "Green";
  rightWrong7[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong7[1].style.backgroundColor = "Green";
  rightWrong7[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong7[1].style.backgroundColor = "Green";
  rightWrong7[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°8
const question8 = [7];
const rightWrong8 = document.querySelectorAll(".answer");

rightWrong8[3].addEventListener("click", changeRightColor);
rightWrong8[0].addEventListener("click", changeWrongColor1);
rightWrong8[1].addEventListener("click", changeWrongColor2);
rightWrong8[2].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong8[3].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong8[3].style.backgroundColor = "Green";
  rightWrong8[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong8[3].style.backgroundColor = "Green";
  rightWrong8[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong8[3].style.backgroundColor = "Green";
  rightWrong8[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°9
const question9 = [8];
const rightWrong9 = document.querySelectorAll(".answer");

rightWrong9[3].addEventListener("click", changeRightColor);
rightWrong9[0].addEventListener("click", changeWrongColor1);
rightWrong9[1].addEventListener("click", changeWrongColor2);
rightWrong9[2].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong9[3].style.backgroundColor = "Green";
  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong9[3].style.backgroundColor = "Green";
  rightWrong9[0].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong9[3].style.backgroundColor = "Green";
  rightWrong9[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong9[3].style.backgroundColor = "Green";
  rightWrong9[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

// Question n°10
const question10 = [9];
const rightWrong10 = document.querySelectorAll(".answer");

rightWrong10[0].addEventListener("click", changeRightColor);
rightWrong10[1].addEventListener("click", changeWrongColor1);
rightWrong10[2].addEventListener("click", changeWrongColor2);
rightWrong10[3].addEventListener("click", changeWrongColor3);

function changeRightColor() {
  rightWrong10[0].style.backgroundColor = "Green";

  goodAnswer.play();
}

function changeWrongColor1() {
  rightWrong10[0].style.backgroundColor = "Green";
  rightWrong10[1].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor2() {
  rightWrong10[0].style.backgroundColor = "Green";
  rightWrong10[2].style.backgroundColor = "Red";
  wrongAnswer.play();
}

function changeWrongColor3() {
  rightWrong10[0].style.backgroundColor = "Green";
  rightWrong10[3].style.backgroundColor = "Red";
  wrongAnswer.play();
}



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
  optionsList.innerHTML = "";
  nextQuestionButton.style.display = "none";
  resultsContainer.textContent = `Score : ${correctAnswers} / ${questions.length}`;
};

nextQuestionButton.addEventListener("click", checkAnswer),

// Afficher la première question au chargement de la page
displayQuestion()



// Synchronisation bouton "question suivante" et afficher question d'après






// Bouton "question suivante" apparaît uniquement quand la personne a choisi une réponse

function nextQuestionAppear() {

}



// Synchroniser compteur de questions et résultat (résultat s'affiche après la 10e question)

function resultsDisplay() {

}


// Synchroniser chrono et réponses (quand on choisit une réponse, le chrono s'arrête)

function timerStop() {

}


// Chrono disparaît pour le résultat

function timerDisappear() {

}


// Bonne réponse s'affiche quand le chrono arrive à 0

function timerOut() {

}

// Personne ne peut plus répondre quand le chrono arrive à 0

function timerOutNoAnswer() {

}


// Quand on appuie sur "question suivante", les boutons ne sont plus affichés en rouge/vert.