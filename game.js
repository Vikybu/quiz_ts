import { quizzic, quizpotter } from './question.js'
import { scoreDisplay, refreshAddEventListener, resetScore } from './script.js'


let index = 0
let timeoutID
let quizname = []
let startTimer = 5

const question = document.querySelector('.question')
const divResponse = document.querySelector('.option')
const btnSuivant = document.querySelector(".btn_suivant")
const body = document.querySelector("body")
const btnQuizzic = document.getElementById('btn_quizzic')
const btnQuizpotter = document.getElementById('btn_quizpotter')
const divGlobale = document.getElementById('div_body')
const divNav = document.getElementById('div_nav')
const divTimer = document.getElementById('timer')
const title_quizzic = document.getElementById('title_quizzic')
const title_quizpotter = document.getElementById('title_quizpotter')


/**
 * Affiche la question avec les 4 réponses tant que l'index est inférieur au nombre de questions
 */
function content() {
    if (index < quizname.length) {

        question.innerText = quizname[index].text
        clearInterval(timeoutID)
        startTimer = 5
        timeoutID = setInterval(affichageCompteARebours, 1000)

        /*
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            disabledAnswer()
            buttonActivation()
            console.log(timeoutID)
        }, 5000);

        const time = document.createElement('button')
        time.innerText = timeoutID
        divTimer.appendChild(time)
        */

        quizname[index].options.forEach(element => {
            const btnAnswer = document.createElement('button')
            btnAnswer.innerText = element
            btnAnswer.classList.add('btn_answer')
            btnAnswer.disabled = false
            if (element == quizname[index].correct_answer)
                btnAnswer.setAttribute('data-id', 'true')
            divResponse.appendChild(btnAnswer)
        })
    } else {
        scoreDisplay()

    }
}

function affichageCompteARebours() {
    const timer = document.getElementById('timer')
    timer.innerText = `Temps restant : ${startTimer}`
    startTimer--
    if (index >= quizname.length) {
        timer.innerText = ''
    }
    if (startTimer < 0) {
        disabledAnswer()
        buttonActivation()
        clearInterval(timeoutID)
    }
}


/**
 * Incrémente de 1 l'index
 */
function nextQuestion() {
    index++
}


/**
 * Efface le texte de la question et supprime les réponses
 */
function clearQuestion() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => element.remove())
    question.innerText = ''

}

/**
 * Rend les boutons des réponses disabled
 */
function disabledAnswer() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => {
        element.disabled = true
    }
    )
}


/**
 * Rend le bouton suivant enabled
 */
function buttonActivation() {
    btnSuivant.disabled = false
}

function buttonOff() {
    btnSuivant.disabled = true
}
/**
 * Rend le bouton Rejouer visible seulement en fin de partie
 */
function rematch() {
    let btn_replay = document.querySelector('.btn_replay')
    if (index >= quizname.length) {
        btn_replay.style.visibility = "visible"
        btnSuivant.style.visibility = "hidden"
    } else {
        btn_replay.style.visibility = "hidden"
        btnSuivant.style.visibility = "visible"
    }
}

/**
 * Permet de réinitialiser l'index à 0
 */
function resetIndex() {
    index = 0

    content()
}


/**
 * Gère l'affichage ou pas du cadre contenant la question
 */
function disableCadrequestion() {
    if (index >= quizname.length) {
        document.querySelector(".question").style.visibility = "hidden";

    }
    else {

        document.querySelector(".question").style.visibility = "visible"

    }

}

function progression() {

    if (index < quizname.length) {
        document.getElementById('progression').style.visibility = 'visible'
        document.getElementById('progression').value = index * 25


    }
    else {
        document.getElementById('progression').style.visibility = 'hidden'
    }
}



/**
 * Gère l'affichage à l'ouverture du site
 */
function accueil() {
    body.style.visibility = "hidden"
    btnQuizzic.style.visibility = "visible"
    btnQuizpotter.style.visibility = "visible"
}


/**
 * Permet d'attribuer à la variable globale quizname le quizz selon le bouton sur lequel l'user a cliqué + 
 * affichage du body de l'HTML  
 */
function loadGame(event) {
    if (event.target.getAttribute("id") === "btn_quizzic") {
        quizname = quizzic
        title_quizpotter.style.visibility = "hidden"
        title_quizzic.style.visibility = "visible"
        if
            (divGlobale.classList.contains("hp")) {
            divGlobale.classList.remove("hp")
            divNav.classList.remove('hp')

        }
        divGlobale.classList.add('musik')
        divNav.classList.add('musik')
    } else {
        quizname = quizpotter
        title_quizpotter.style.visibility = "visible"
        title_quizzic.style.visibility = "hidden"
        if (divGlobale.classList.contains("musik")) {
            divGlobale.classList.remove("musik")
            divNav.classList.remove('musik')
        }
        divGlobale.classList.add('hp')
        divNav.classList.add('hp')
    }
    body.style.visibility = "visible"
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
    let btnChoixQuiz = document.querySelectorAll('.btn_choix_quiz')
    for (let i = 0; i < btnChoixQuiz.length; i++) {
        btnChoixQuiz[i].addEventListener('click', (event) => {
            if (index != 0) {
                resetIndex()
                resetScore()
            }
            clearQuestion()
            loadGame(event)
            content()
            refreshAddEventListener()
        })
    }
}


export {
    content, nextQuestion, clearQuestion, disabledAnswer, buttonActivation, buttonOff, resetIndex, rematch,
    disableCadrequestion, accueil, quizChoice, progression, title_quizpotter, title_quizzic
}





