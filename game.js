import { quizzic } from './question.js'


let index = 0
const question = document.querySelector('.question')
const divResponse = document.querySelector('.option')

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
    } else  {

        console.log('Fin du game')
    }

}

function nextQuestion() {
    index++;

};


function clearQuestion() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => element.remove())
    console.log(btnAnswer)
}

function disabledAnswer() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => {
        element.disabled = true

    }
    )

}

function buttonActivation() {
    let button = document.querySelector(".btn_suivant")
    button.disabled = false


}

function buttonOff() {
    let button = document.querySelector('.btn_suivant')
    button.disabled = true

}

export { content, nextQuestion, clearQuestion, disabledAnswer, buttonActivation, buttonOff }




