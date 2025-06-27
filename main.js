import { content, nextQuestion, clearQuestion, buttonOff, resetIndex, rematch } from './game.js'
import { refreshAddEventListener, resetScore } from './script.js'


export let index = 0, score = 0
import {content, nextQuestion, clearQuestion, buttonOff} from './game.js'
import {answer, scoreCount, answerStyle, refreshAddEventListener} from './script.js'


let button = document.querySelector(".btn_suivant")
let rematch = document.querySelector('.rematch')
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



rematch.addEventListener('click', () => {
    resetIndex()
    resetScore()
})

