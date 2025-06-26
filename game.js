import { quizzic } from './question.js'
import { scoreDisplay } from './script.js'


let index = 0
const question = document.querySelector('.question')
const divResponse = document.querySelector('.option')
const button = document.querySelector(".btn_suivant")

function content() {
    console.log('content loading')
    if (index < quizzic.length) {
        question.innerText = quizzic[index].text
        quizzic[index].options.forEach(element => {
            const btnAnswer = document.createElement('button')
            btnAnswer.innerText = element
            btnAnswer.classList.add('btn_answer')
            btnAnswer.disabled = false
            if (element == quizzic[index].correct_answer)
                btnAnswer.setAttribute('data-id', 'true')
            divResponse.appendChild(btnAnswer)

        })
    } else {

        console.log('Fin du game')
        scoreDisplay()
    }

}

function nextQuestion() {
    index++;

};


function clearQuestion() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => element.remove())
    question.innerText = ''
}

function disabledAnswer() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => {
        element.disabled = true

    }
    )

}

function buttonActivation() {
    button.disabled = false


}

function buttonOff() {
    let button = document.querySelector('.btn_suivant')
    button.disabled = true


}

function rematch() {
let btn_replay = document.querySelector('.btn_replay')
if (index >= quizzic.length){
   btn_replay.style.visibility = "visible"
   button.style.visibility = "hidden"
}
}

function resetIndex() {
    index = 0
    content()
    console.log(index)
}

export { content, nextQuestion, clearQuestion, disabledAnswer, buttonActivation, buttonOff, resetIndex, rematch }





