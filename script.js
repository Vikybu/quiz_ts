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



const btnAnswer = document.querySelectorAll('.btn_answer')

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

function clearAddEventListenr(){
    for (let i = 0; i < btnAnswer.length; i++) {
    btnAnswer[i].addEventListener("DOMContentLoaded", "click", (click) => {
        answer(click)
        scoreCount(click)
} )
    
}
}





/*<script>
   function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= 'source_file.js';
      head.appendChild(script);
   }
   load_js();
</script>*/




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