import {disabledAnswer,buttonActivation} from './game.js'

let score = 0
const btnAnswer = document.querySelectorAll('.btn_answer')
let button = document.querySelector(".btn_suivant")


function answer(clickBtn) {
const btnAnswer = document.querySelectorAll('.btn_answer')
    if (clickBtn.target.getAttribute("data-id") === "true") {
        console.log("true")
        return true
    }
    else {
        console.log('false')
        return false
    }
}

function scoreCount(clickBtn) {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    if (clickBtn.target.getAttribute("data-id") === "true") {
        score++
        console.log(score)
    }
}


function refreshAddEventListener() {
     const btnAnswer = document.querySelectorAll('.btn_answer')
    for (let i = 0; i < btnAnswer.length; i++) {
    btnAnswer[i].addEventListener("click", (click) => {
        answer(click)
        scoreCount(click)  
        disabledAnswer()
        buttonActivation()
} )
}
}

export {answer, scoreCount, refreshAddEventListener}



function answerStyle(params) {

}





function scoreDisplay(params) {

}

function rematch(params) {

}

function reset(params) {

}