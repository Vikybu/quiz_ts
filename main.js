
import { content, nextQuestion, clearQuestion, buttonOff, resetIndex, rematch, disableCadrequestion, accueil, 
    quizChoice, progression} from './game.js'
import { refreshAddEventListener, resetScore, clearScoreContent } from './script.js'


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
    disableCadrequestion()
    console.log('OK')
    progression()
})


btnRematch.addEventListener('click', () => {
    resetIndex()
    resetScore()
    rematch()
    refreshAddEventListener()
    clearScoreContent()
    disableCadrequestion()
    progression()
})

