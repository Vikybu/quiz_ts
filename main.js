import { content, nextQuestion, clearQuestion, buttonOff, resetIndex } from './game.js'
import { refreshAddEventListener, resetScore } from './script.js'

export let index = 0, score = 0

let btnSuivant = document.querySelector(".btn_suivant")
let rematch = document.querySelector('.rematch')

content()

refreshAddEventListener()

btnSuivant.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    refreshAddEventListener()
    buttonOff()

})

rematch.addEventListener('click', () => {
    resetIndex()
    resetScore()
})
