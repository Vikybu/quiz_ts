import { quizzic, quizpotter } from "./question.js";
import { scoreDisplay, refreshAddEventListener, resetScore } from "./script.js";

let index: number = 0;

let timeoutID: number;

interface QuiznameObj {
  text: string;
  options: string[];
  correct_answer: string;
}

interface Quizname extends Array<QuiznameObj> {}

let quizname: Quizname = [{ text: "", options: [], correct_answer: "" }];

let startTimer: number = 30;

const question = document.querySelector<HTMLElement>(".question");
const divResponse = document.querySelector<HTMLElement>(".option");
const btnSuivant = document.querySelector<HTMLButtonElement>(".btn_suivant");
const body = document.querySelector<HTMLElement>("body");
const btnQuizzic = <HTMLButtonElement>document.getElementById("btn_quizzic");
const btnQuizpotter = <HTMLButtonElement>(
  document.getElementById("btn_quizpotter")
);
const divGlobale = <HTMLElement>document.getElementById("div_body");
const divNav = <HTMLElement>document.getElementById("div_nav");
const divScore = <HTMLElement>document.getElementById("score");
const divTimer = <HTMLElement>document.getElementById("timer");
const title_quizzic = <HTMLElement>document.getElementById("title_quizzic");
const title_quizpotter = <HTMLElement>(
  document.getElementById("title_quizpotter")
);
const divRegles = <HTMLElement>document.getElementById("div_regles");

/**
 * Affiche la question avec les 4 réponses. Tant que l'index est inférieur au nombre de questions + affichage
 * du compte à rebours // quand index est supérieur au nombre de questions : affichage du score et du message
 * personnalisé
 */
function content()  {
  if (index < quizname.length) {
    if (!question) return;
    question.innerText = quizname[index]?.text as string;
    clearInterval(timeoutID);
    startTimer = 30;
    timeoutID = setInterval(affichageCompteARebours, 1000);
    quizname[index]?.options.forEach((element) => {
      const btnAnswer = document.createElement("button");
      btnAnswer.innerText = element;
      btnAnswer.classList.add("btn_answer");
      btnAnswer.disabled = false;
      if (element == quizname[index]?.correct_answer)
        btnAnswer.setAttribute("data-id", "true");
      if (!divResponse) return;
      divResponse.appendChild(btnAnswer);
    });
  } else {
    scoreDisplay();
    ScoreContent();
  }

  disableCadrequestion();
}

/**
 * Affichage du compte à rebours quand index inf au nombre de questions et quand index sup aux nombres
 * de questions désactive les boutons réponses et active le bouton suivant
 */
function affichageCompteARebours() {
  const timer = <HTMLElement>document.getElementById("timer");
  timer.innerText = `Temps restant : ${startTimer}`;
  startTimer--;
  if (index >= quizname.length) {
    timer.innerText = "";
    console.log("ok");
  }
  if (startTimer < 0) {
    disabledAnswer();
    buttonActivation();
    clearInterval(timeoutID);
  }
}

/**
 * Incrémente de 1 l'index
 */
function nextQuestion() :number {
  return index++;
}

/**
 * Efface le texte de la question et supprime les réponses
 */
function clearQuestion() {
  const btnAnswer = document.querySelectorAll(".btn_answer");
  btnAnswer.forEach((element) => element.remove());
  if (!question) return;
  question.innerText = "";
}

/**
 * Rend les boutons des réponses disabled
 */
function disabledAnswer() {
  const btnAnswer = document.querySelectorAll<HTMLButtonElement>(".btn_answer");
  btnAnswer.forEach((element) => {
    element.disabled = true;
  });
}

/**
 * Rend le bouton suivant enabled
 */
function buttonActivation() {
  if (!btnSuivant) return;
  btnSuivant.disabled = false;
}

function buttonOff() {
  if (!btnSuivant) return;
  btnSuivant.disabled = true;
}

/**
 * Rend le bouton Rejouer visible seulement en fin de partie
 */
function rematch() {
  let btn_replay = document.querySelector<HTMLButtonElement>(".btn_replay");
  if (index >= quizname.length) {
    if (!btn_replay) return;
    btn_replay.style.display = "block";
    if (!btnSuivant) return;
    btnSuivant.style.display = "none";
  } else {
    if (!btn_replay) return;
    btn_replay.style.display = "none";
    if (!btnSuivant) return;
    btnSuivant.style.display = "block";
  }
}

/**
 * Permet de réinitialiser l'index à 0
 */
function resetIndex() {
  index = 0;
  (document.getElementById("progression") as HTMLFormElement).value =
    index * 25;
  content();
}

/**
 * Gère l'affichage ou pas du cadre contenant la question
 */
function disableCadrequestion() {
  if (index >= quizname.length) {
    (document.querySelector(".question") as HTMLFormElement).style.visibility =
      "hidden";
  } else {
    (
      document.querySelector<HTMLElement>(".question") as HTMLFormElement
    ).style.visibility = "visible";
  }
}

/**
 * Affichage ou non de l'encadrer de score
 */
function ScoreContent() {
  if (index < quizname.length) {
    divScore.style.display = "none";
  } else {
    divScore.style.display = "flex";
  }
}

/**
 * Affichage de la barre de progression selon l'index
 */
function progression() {
  if (index < quizname.length) {
    (
      document.getElementById("progression") as HTMLFormElement
    ).style.visibility = "visible";
    (document.getElementById("progression") as HTMLFormElement).value =
      index * 25;
  } else {
    (
      document.getElementById("progression") as HTMLFormElement
    ).style.visibility = "hidden";
  }
}

/**
 * Gère l'affichage à l'ouverture du site
 */
function accueil() {
  if (!body) return;
  body.style.visibility = "hidden";
  btnQuizzic.style.visibility = "visible";
  btnQuizpotter.style.visibility = "visible";
  divRegles.style.visibility = "visible";

  document
    .querySelectorAll(".btn_choix_quiz")
    .forEach((element) => ((element as HTMLElement).style.marginTop = "3%"));
  document
    .querySelectorAll(".btn_choix_quiz")
    .forEach((element) => ((element as HTMLElement).style.padding = "3%"));
}

/**
 * Changement de style de la barre de navigation
 */
function styleNavBar() {
  (document.getElementById("div_nav") as HTMLFormElement).style.height = "3%";
  document
    .querySelectorAll(".btn_choix_quiz")
    .forEach((element) => ((element as HTMLElement).style.marginTop = "0px"));
  document
    .querySelectorAll(".btn_choix_quiz")
    .forEach((element) => ((element as HTMLElement).style.marginLeft = "0px"));
  document
    .querySelectorAll(".btn_choix_quiz")
    .forEach((element) => ((element as HTMLElement).style.padding = "1%"));
}

/**
 * Permet d'attribuer à la variable globale quizname le quizz selon le bouton sur lequel l'user a cliqué +
 * affichage du body de l'HTML
 */
function loadGame(event: Event) {
  const target = event.target as HTMLElement;
  if (target.getAttribute("id") === "btn_quizzic") {
    quizname = quizzic;
    title_quizpotter.style.display = "none";
    title_quizzic.style.display = "flex";
    if (divGlobale.classList.contains("hp")) {
      divGlobale.classList.remove("hp");
      divNav.classList.remove("hp");
    }
    divGlobale.classList.add("musik");
    divNav.classList.add("musik");
    if (!body) return;
    body.style.background =
      "linear-gradient(0.25turn, #ED4264, #ebf8e1, #FFEDBC)";
  } else {
    quizname = quizpotter;
    title_quizpotter.style.display = "flex";
    title_quizzic.style.display = "none";
    if (divGlobale.classList.contains("musik")) {
      divGlobale.classList.remove("musik");
      divNav.classList.remove("musik");
    }
    divGlobale.classList.add("hp");
    divNav.classList.add("hp");
    if (!body) return;
    body.style.background = "linear-gradient(0.25turn,#6cb474, #abd29c)";
  }
  if (!body) return;
  body.style.visibility = "visible";
}

/**
 * Au click du choix du quiz auquel jouer, cette fonction permet de :
 *  - réinitialiser l'index à 0 si l'on clique après avoir commencé le quiz
 *  - Effacer l'affiche des questions et boutons précédents
 *  - Afficher le quiz associé au bouton cliqué
 *  - Afficher la question et les réponses
 *  - Exécuté la fonction refreshAddEventListener
 */
function quizChoice() {
  let btnChoixQuiz = document.querySelectorAll(".btn_choix_quiz");
  for (let i = 0; i < btnChoixQuiz.length; i++) {
    btnChoixQuiz[i]?.addEventListener("click", (event) => {
      if (index != 0) {
        resetIndex();
        resetScore();
      }
      clearQuestion();
      loadGame(event);
      content();
      refreshAddEventListener();
      rematch();
      progression();
      ScoreContent();
      styleNavBar();
      divScore.innerText = "";
      divRegles.style.display = "none";
    });
  }
}

export {
  content,
  nextQuestion,
  clearQuestion,
  disabledAnswer,
  buttonActivation,
  buttonOff,
  resetIndex,
  rematch,
  disableCadrequestion,
  accueil,
  quizChoice,
  progression,
  ScoreContent,
  styleNavBar,
};
