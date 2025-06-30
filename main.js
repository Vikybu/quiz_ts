import { content, nextQuestion, clearQuestion, buttonOff, resetIndex, rematch, disableCadrequestion } from './game.js'
import { refreshAddEventListener, resetScore } from './script.js'

export let index = 0, score = 0
import {content, nextQuestion, clearQuestion, buttonOff} from './game.js'
import {answer, scoreCount, answerStyle, refreshAddEventListener} from './script.js'

let btnSuivant = document.querySelector(".btn_suivant")
let btnRematch = document.querySelector('.btn_replay')

content()

refreshAddEventListener()

btnSuivant.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    refreshAddEventListener()
    buttonOff()
    rematch()
    disableCadrequestion()

    console.log('OK')
})



btnRematch.addEventListener('click', () => {

    resetIndex()
    resetScore()
    rematch()
    refreshAddEventListener()
})

