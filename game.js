import { quizzic } from './question.js'
import { scoreDisplay } from './script.js'


let index = 0
const question = document.querySelector('.question')
const divResponse = document.querySelector('.option')
const btnSuivant = document.querySelector(".btn_suivant")

/**
 * Affiche la question avec les 4 réponses tant que l'index est inférieur au nombre de questions
 */
function content() {
    if (index < quizzic.length) {
        question.innerText = quizzic[index].text
        quizzic[index].options.forEach(element => {
            const btnAnswer = document.createElement('button')
            btnAnswer.innerText = element
            btnAnswer.classList.add('btn_answer')
            btnAnswer.disabled = false
            if (element == quizzic[index].correct_answer)
                btnAnswer.setAttribute('data-id', 'true')
            divResponse.appendChild(btnAnswer)
        })
    } else {
        scoreDisplay()
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
    if (index >= quizzic.length){
        btn_replay.style.visibility = "visible"
        btnSuivant.style.visibility = "hidden"
    } else {
        btn_replay.style.visibility = "hidden"
        btnSuivant.style.visibility = "visible"
    }
}

function resetIndex() {
    index = 0
    content()
}

export { content, nextQuestion, clearQuestion, disabledAnswer, buttonActivation, buttonOff, resetIndex, rematch }