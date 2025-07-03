
import { content, nextQuestion, clearQuestion, buttonOff, resetIndex, rematch, disableCadrequestion, accueil, 
    quizChoice, progression, ScoreContent } from './game.js'
import { refreshAddEventListener, resetScore} from './script.js'


export let index = 0, score = 0

let btnSuivant = document.querySelector(".btn_suivant")
let btnRematch = document.querySelector('.btn_replay')


accueil()
quizChoice()

btnSuivant.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    refreshAddEventListener()
    buttonOff()
    rematch()
    progression()
})


btnRematch.addEventListener('click', () => {
    resetIndex()
    resetScore()
    rematch()
    refreshAddEventListener()
    ScoreContent()
    progression()
})

