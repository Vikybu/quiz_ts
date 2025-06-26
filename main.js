import {content, nextQuestion, clearQuestion} from './game.js'
import {answer, scoreCount, refreshAddEventListener} from './script.js'

let button = document.querySelector(".btn_suivant")

content()

refreshAddEventListener()

button.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    refreshAddEventListener()
})