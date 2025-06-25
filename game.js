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
            btnAnswer.setAttribute('id', 'true')
        divResponse.appendChild (btnAnswer)
    })
}

content()

const btn = document.querySelectorAll('.btn_answer')

function answer(event) {

    
     /*  btn.forEach(element => {
        console.log(btn.innerText)
        if(element === quizzic[index].correct_answer)
        {
            console.log("true")
            return true
        }
    })*/
   if(event.target.getAttribute("data-id") === "correct_answer"){
        
         console.log("true")
        return true
       
    }
    else{
        return false
    }
   
    }



 



answer()


for(let i=0; i < btn.length; i++)
{
    btn[i].addEventListener("click", answer)
}




function score(params) {
    
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

function reset (params) {
    
}