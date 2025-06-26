<<<<<<< branch_ju
import {content, nextQuestion, clearQuestion} from './game.js'
import {answer, scoreCount, answerStyle, refreshAddEventListener} from './script.js'
=======
import {content, nextQuestion, clearQuestion, buttonOff} from './game.js'
import {answer, scoreCount, refreshAddEventListener} from './script.js'
>>>>>>> main

let button = document.querySelector(".btn_suivant")

content()

refreshAddEventListener()

button.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    refreshAddEventListener()
    buttonOff()
})