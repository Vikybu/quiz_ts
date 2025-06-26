<<<<<<< HEAD
import {content, nextQuestion, clearQuestion,buttonOff} from './game.js'
=======
import {content, nextQuestion, clearQuestion, buttonOff} from './game.js'
>>>>>>> 3126e856108a42906befb9e6ae5110ca6ed33799
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
})