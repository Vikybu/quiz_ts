import { quizzic } from './question.js'

let index = 0
const question = document.querySelector('.question')
const divResponse = document.querySelector('.option')
function content() {
    console.log('content loading')
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

let button = document.querySelector(".btn_suivant")
function nextQuestion() {

    index++;
    console.log(index)
};



function clearQuestion() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    btnAnswer.forEach((element) => element.remove())
    console.log(btnAnswer)
}

button.addEventListener('click', () => {
    clearQuestion()
    nextQuestion()
    content()
    
})





