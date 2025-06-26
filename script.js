let score = 0
const btnAnswer = document.querySelectorAll('.btn_answer')

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


function answerStyle(clickBtn) {
   
    if (clickBtn.target.getAttribute("data-id") === "true") { 
        
        clickBtn.target.style.border = "2px solid green"
        clickBtn.target.style.backgroundColor = "#e8f5e8"
    } else {
        
        clickBtn.target.style.border = "2px solid red"
        clickBtn.target.style.backgroundColor = "#ffe8e8"
    }
}





function refreshAddEventListener() {
     const btnAnswer = document.querySelectorAll('.btn_answer')
    for (let i = 0; i < btnAnswer.length; i++) {
    btnAnswer[i].addEventListener("click", (click) => {
        answer(click)
        scoreCount(click) 
        answerStyle(click) 
        
} )
    
}
}


export {answer, scoreCount, answerStyle, refreshAddEventListener}





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