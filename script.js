import { quizzic } from './question.js';

let index = 0
const question = document.querySelector('.question')
const divResponse = document.querySelector('.option')
function content() {
    question.innerText = quizzic[index].text
    quizzic[index].options.forEach(element => {
        const btnAnswer = document.createElement('button')
        btnAnswer.innerText = element
        btnAnswer.classList.add('btn_answer')
        if (element == quizzic[index].correct_answer)
            btnAnswer.setAttribute('data-id', 'true')
        divResponse.appendChild(btnAnswer)
    })
}

content()

const btn = document.querySelectorAll('.btn_answer')

function answer(clickBtn) {

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
    let score = 0
    if (clickBtn.target.getAttribute("data-id") === "true") {
        score++
        console.log(score)
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (click) => {
        answer(click)
        scoreCount(click)
} )
}






function answerStyle(params) {

}

function disabledAnswer(params) {

}

function buttonActivation(params) {

}

function nextQuestion(params) {

}

function scoreDisplay(params) {

}

function rematch(params) {

}

function reset(params) {

}