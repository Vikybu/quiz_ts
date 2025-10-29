"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = content;
exports.nextQuestion = nextQuestion;
exports.clearQuestion = clearQuestion;
exports.disabledAnswer = disabledAnswer;
exports.buttonActivation = buttonActivation;
exports.buttonOff = buttonOff;
exports.resetIndex = resetIndex;
exports.rematch = rematch;
exports.disableCadrequestion = disableCadrequestion;
exports.accueil = accueil;
exports.quizChoice = quizChoice;
exports.progression = progression;
exports.ScoreContent = ScoreContent;
exports.styleNavBar = styleNavBar;
const question_js_1 = require("./question.js");
const script_js_1 = require("./script.js");
let index = 0;
let timeoutID;
let quizname = [{ text: "", options: [], correct_answer: "" }];
let startTimer = 30;
const question = document.querySelector(".question");
const divResponse = document.querySelector(".option");
const btnSuivant = document.querySelector(".btn_suivant");
const body = document.querySelector("body");
const btnQuizzic = document.getElementById("btn_quizzic");
const btnQuizpotter = (document.getElementById("btn_quizpotter"));
const divGlobale = document.getElementById("div_body");
const divNav = document.getElementById("div_nav");
const divScore = document.getElementById("score");
const divTimer = document.getElementById("timer");
const title_quizzic = document.getElementById("title_quizzic");
const title_quizpotter = (document.getElementById("title_quizpotter"));
const divRegles = document.getElementById("div_regles");
/**
 * Affiche la question avec les 4 réponses tant que l'index est inférieur au nombre de questions + affichage
 * du compte à rebours // quand index est supérieur au nombre de questions : affichage du score et du message
 * personnalisé
 */
function content() {
    if (index < quizname.length) {
        if (!question)
            return;
        question.innerText = quizname[index].text;
        clearInterval(timeoutID);
        startTimer = 30;
        timeoutID = setInterval(affichageCompteARebours, 1000);
        quizname[index].options.forEach((element) => {
            const btnAnswer = document.createElement("button");
            btnAnswer.innerText = element;
            btnAnswer.classList.add("btn_answer");
            btnAnswer.disabled = false;
            if (element == quizname[index].correct_answer)
                btnAnswer.setAttribute("data-id", "true");
            if (!divResponse)
                return;
            divResponse.appendChild(btnAnswer);
        });
    }
    else {
        (0, script_js_1.scoreDisplay)();
        ScoreContent();
    }
    disableCadrequestion();
}
/**
 * Affichage du compte à rebours quand index inf au nombre de questions et quand index sup aux nombres
 * de questions désactive les boutons réponses et active le bouton suivant
 */
function affichageCompteARebours() {
    const timer = document.getElementById("timer");
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
function nextQuestion() {
    return index++;
}
/**
 * Efface le texte de la question et supprime les réponses
 */
function clearQuestion() {
    const btnAnswer = document.querySelectorAll(".btn_answer");
    btnAnswer.forEach((element) => element.remove());
    if (!question)
        return;
    question.innerText = "";
}
/**
 * Rend les boutons des réponses disabled
 */
function disabledAnswer() {
    const btnAnswer = document.querySelectorAll(".btn_answer");
    btnAnswer.forEach((element) => {
        element.disabled = true;
    });
}
/**
 * Rend le bouton suivant enabled
 */
function buttonActivation() {
    if (!btnSuivant)
        return;
    btnSuivant.disabled = false;
}
function buttonOff() {
    if (!btnSuivant)
        return;
    btnSuivant.disabled = true;
}
/**
 * Rend le bouton Rejouer visible seulement en fin de partie
 */
function rematch() {
    let btn_replay = document.querySelector(".btn_replay");
    if (index >= quizname.length) {
        if (!btn_replay)
            return;
        btn_replay.style.display = "block";
        if (!btnSuivant)
            return;
        btnSuivant.style.display = "none";
    }
    else {
        if (!btn_replay)
            return;
        btn_replay.style.display = "none";
        if (!btnSuivant)
            return;
        btnSuivant.style.display = "block";
    }
}
/**
 * Permet de réinitialiser l'index à 0
 */
function resetIndex() {
    index = 0;
    document.getElementById("progression").value =
        index * 25;
    content();
}
/**
 * Gère l'affichage ou pas du cadre contenant la question
 */
function disableCadrequestion() {
    if (index >= quizname.length) {
        document.querySelector(".question").style.visibility =
            "hidden";
    }
    else {
        document.querySelector(".question").style.visibility = "visible";
    }
}
/**
 * Affichage ou non de l'encadrer de score
 */
function ScoreContent() {
    if (index < quizname.length) {
        divScore.style.display = "none";
    }
    else {
        divScore.style.display = "flex";
    }
}
/**
 * Affichage de la barre de progression selon l'index
 */
function progression() {
    if (index < quizname.length) {
        document.getElementById("progression").style.visibility = "visible";
        document.getElementById("progression").value =
            index * 25;
    }
    else {
        document.getElementById("progression").style.visibility = "hidden";
    }
}
/**
 * Gère l'affichage à l'ouverture du site
 */
function accueil() {
    if (!body)
        return;
    body.style.visibility = "hidden";
    btnQuizzic.style.visibility = "visible";
    btnQuizpotter.style.visibility = "visible";
    divRegles.style.visibility = "visible";
    document
        .querySelectorAll(".btn_choix_quiz")
        .forEach((element) => (element.style.marginTop = "3%"));
    document
        .querySelectorAll(".btn_choix_quiz")
        .forEach((element) => (element.style.padding = "3%"));
}
/**
 * Changement de style de la barre de navigation
 */
function styleNavBar() {
    document.getElementById("div_nav").style.height = "3%";
    document
        .querySelectorAll(".btn_choix_quiz")
        .forEach((element) => (element.style.marginTop = "0px"));
    document
        .querySelectorAll(".btn_choix_quiz")
        .forEach((element) => (element.style.marginLeft = "0px"));
    document
        .querySelectorAll(".btn_choix_quiz")
        .forEach((element) => (element.style.padding = "1%"));
}
/**
 * Permet d'attribuer à la variable globale quizname le quizz selon le bouton sur lequel l'user a cliqué +
 * affichage du body de l'HTML
 */
function loadGame(event) {
    const target = event.target;
    if (target.getAttribute("id") === "btn_quizzic") {
        quizname = question_js_1.quizzic;
        title_quizpotter.style.display = "none";
        title_quizzic.style.display = "flex";
        if (divGlobale.classList.contains("hp")) {
            divGlobale.classList.remove("hp");
            divNav.classList.remove("hp");
        }
        divGlobale.classList.add("musik");
        divNav.classList.add("musik");
        if (!body)
            return;
        body.style.background =
            "linear-gradient(0.25turn, #ED4264, #ebf8e1, #FFEDBC)";
    }
    else {
        quizname = question_js_1.quizpotter;
        title_quizpotter.style.display = "flex";
        title_quizzic.style.display = "none";
        if (divGlobale.classList.contains("musik")) {
            divGlobale.classList.remove("musik");
            divNav.classList.remove("musik");
        }
        divGlobale.classList.add("hp");
        divNav.classList.add("hp");
        if (!body)
            return;
        body.style.background = "linear-gradient(0.25turn,#6cb474, #abd29c)";
    }
    if (!body)
        return;
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
        btnChoixQuiz[i].addEventListener("click", (event) => {
            if (index != 0) {
                resetIndex();
                (0, script_js_1.resetScore)();
            }
            clearQuestion();
            loadGame(event);
            content();
            (0, script_js_1.refreshAddEventListener)();
            rematch();
            progression();
            ScoreContent();
            styleNavBar();
            divScore.innerText = "";
            divRegles.style.display = "none";
        });
    }
}
//# sourceMappingURL=game.js.map