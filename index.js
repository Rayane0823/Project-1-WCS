// Chrono
const timerElement = document.getElementById("timer");
let timer = 15;

function timeDecreasing() {
  timerElement.innerText = timer;
  timer--;

  if (timer <= 0) {
    timer = 0;
  }

  if (timer === 0) {
    showCorrectAnswer()
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



// QUESTIONS RÉPONSES

const questions = [
    "Quelle est le nom de la Cathédrale de Lille ?",
    "Quel surnom est encore aujourd'hui donné à Lille ?",
    "Qui était le maire de Lille de 1973 à 2001 ?",
    "Quelle fête est traditionnellement organisée chaque année en septembre dans la ville de Lille ?",
    "Quel général français originaire de Lille a droit à son propre musée dans sa maison natale ?",
    "En quelle année la ville de Lille a-t-elle été rattachée à la France ?",
    "Quel fromage est utilisé pour réaliser un Welsh, plat traditionnel de Lille ?",
    "Parmi les rues de Lille, on peut trouver :",
    "La pâtisserie Meert, originaire de Lille, est connue pour ses :",
    "Combien de stations de métro compte le réseau de métro de Lille ?",
];

const options = [
    ["Notre Dame de la Garde", "Notre Dame de la Treille", "Notre Dame de l'Annonciation", "La Cathédrale Sainte-Cécile"],
    ["La capitale des Gaules", "La belle endormie", "La cité des Papes", "La capitale des Flandres"],
    ["Pierre Mauroy", "Martine Aubry", "Patrick Kanner", "Augustin Laurent"],
    ["Un carnaval", "Une fête des Lumières", "Une braderie géante", "Un festival de crocs"],
    ["Charles de Gaulle", "Marcel Carpentier", "Philippe Leclerc", "Louis Faidherbe"],
    ["1667", "1687", "1707", "1727"],
    ["Reblochon", "Cheddar", "Brie", "Maroilles"],
    ["La rue du Chien qui fume", "La rue des Chats bossus", "La rue de l'Oiseau boiteux", "La rue du singe bourré"],
    ["Tartes au sucre", "Crêpes", "Gaufres", "Chouquettes"],
    ["40 stations", "60 stations", "80 stations", "90 stations"],
];

const correctAnswers = ["Notre Dame de la Treille", "La capitale des Flandres", "Pierre Mauroy", "Une braderie géante", "Charles de Gaulle", "1667", "Cheddar", "La rue des Chats bossus", "Gaufres", "60 stations"];

let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options-list");
const answerButtons = document.querySelectorAll(".answer");
const scoreElement = document.getElementById("score");



// Afficher les questions / Afficher le résultat /Afficher le bouton "question suivante" uniquement après avoir répondu.

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion];

    answerButtons.forEach(function(button, index) {
      button.textContent = options[currentQuestion][index];
      button.removeEventListener("click", compareAnswer);
      button.addEventListener("click", compareAnswer);
      scoreElement.style.display = "none";
    });

    questionNumberElement.textContent = "Question " + (currentQuestion + 1) + "/10";
  } else {
    // Toutes les questions ont été répondues, afficher le score
    questionElement.textContent = "Votre score est de :" +  " 0" + score + " / 10";
    optionsElement.style.display = "none"; // Masquer les options de réponse
    scoreElement.style.display = "block"; // Afficher le score
  
  }
  nextButton.style.display = "none";
}



// Fonction bonne réponse = vert / mauvaise = rouge
function compareAnswer() {
  const userAnswer = this.textContent;
  const correctAnswer = correctAnswers[currentQuestion];
  
  if (userAnswer === correctAnswer) {
    this.style.color = "green";
    score++
  } else {
    this.style.color = "red";
    const correctAnswerIndex = options[currentQuestion].indexOf(correctAnswer);
    answerButtons[correctAnswerIndex].style.color = "green";
  }
  timerStop();
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", function() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    answerButtons.forEach(function(button) {
      button.style.color = "#5f464b";
    });
    timerReset(); 
  } else {
    timerDisappear();
   questionNumberElement.style.display = "none";
    questionElement.textContent = "Votre score est de :" +  " 0" + score + " / 10";
  optionsElement.style.display = "none";

  }
  nextButton.style.display = "none";
});

displayQuestion(); // Affiche la première question au chargement de la page


// Synchroniser chrono et réponses (quand on choisit une réponse, le chrono s'arrête)

function timerStop() {
    clearInterval(timerInterval);
  }



// Chrono disparaît pour le résultat

function timerDisappear() {
  timerElement.style.display = "none";
}


// Bonne réponse s'affiche quand le chrono arrive à 0

function showCorrectAnswer() {
  if (timer === 0) {
    const correctAnswerIndex = options[currentQuestion].indexOf(correctAnswers[currentQuestion]);
    answerButtons[correctAnswerIndex].style.color = "green";
    nextButton.style.display = "block"; 
  }
}


// Afficher le résultat à la fin du quiz

