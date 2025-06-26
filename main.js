import {content, nextQuestion, clearQuestion,buttonOff} from './game.js'
import {refreshAddEventListener,reset} from './script.js'

export let index=0, score=0

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
    
})

rematch.addEventListener('click',reset)
