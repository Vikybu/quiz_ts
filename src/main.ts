import {
  content,
  nextQuestion,
  clearQuestion,
  buttonOff,
  resetIndex,
  rematch,
  disableCadrequestion,
  accueil,
  quizChoice,
  progression,
  ScoreContent,
} from "./game.js";
import { refreshAddEventListener, resetScore } from "./script.js";

export let index = 0,
  score = 0;

let btnSuivant = document.querySelector<HTMLButtonElement>(".btn_suivant");
let btnRematch = document.querySelector<HTMLButtonElement>(".btn_replay");

accueil();
quizChoice();
if (btnSuivant) {
  btnSuivant.addEventListener("click", () => {
    clearQuestion();
    nextQuestion();
    content();
    refreshAddEventListener();
    buttonOff();
    rematch();
    progression();
  });
}

if (btnRematch) {
  btnRematch.addEventListener("click", () => {
    resetIndex();
    resetScore();
    rematch();
    refreshAddEventListener();
    ScoreContent();
    progression();
  });
}
