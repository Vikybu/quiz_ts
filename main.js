import {content, nextQuestion, clearQuestion, buttonOff, rematch} from './game.js'
import {answer, scoreCount, answerStyle, refreshAddEventListener} from './script.js'



let button = document.querySelector(".btn_suivant")

content()

refreshAddEventListener()

button.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    refreshAddEventListener()
    buttonOff()
    rematch()
})