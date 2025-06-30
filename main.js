import { content, nextQuestion, clearQuestion, buttonOff, resetIndex, rematch, disableCadrequestion } from './game.js'
import { refreshAddEventListener, resetScore } from './script.js'

export let index = 0, score = 0

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
})



btnRematch.addEventListener('click', () => {

    resetIndex()
    resetScore()
    rematch()
    refreshAddEventListener()
})

