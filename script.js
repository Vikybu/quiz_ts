import { disabledAnswer, buttonActivation, content } from './game.js'

let score = 0

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
    if (clickBtn.target.getAttribute("data-id") === "true") {
        score++
        console.log(score)
    }
}

function scoreDisplay() {
    
if (score <= 1){
    const messageScore = document.createElement('p')
    messageScore.innerText = "oh no"
    document.body.appendChild(messageScore)
      console.log('Essai encore')
    return "oh no"
} if (score <= 3) {
    const messageScore = document.createElement('p')
    messageScore.innerText = "Tu vas y arriver !!!"
    document.body.appendChild(messageScore)
    console.log("Presque")
    return "Tu vas y arriver !!!"
} else if (score == 4) {
    const messageScore = document.createElement('p')
    messageScore.innerText = "Bravo !!!"
    document.body.appendChild(messageScore)
    console.log("Good job")
    return "Bravo !!!"
}
}


function resetScore() {
    score = 0
}


function answerStyle(clickBtn) {
    if (clickBtn.target.getAttribute("data-id") === "true") {

        clickBtn.target.style.border = "2px solid green"
        clickBtn.target.style.backgroundColor = "#E8F5E8"
    } else {

        clickBtn.target.style.border = "2px solid red"
        clickBtn.target.style.backgroundColor = "#FFE8E8"
    }
}


function refreshAddEventListener() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    for (let i = 0; i < btnAnswer.length; i++) {
        btnAnswer[i].addEventListener("click", (click) => {
            answer(click)
            scoreCount(click)
            answerStyle(click)
            disabledAnswer()
            buttonActivation()
           
        })
    }
}

export { answer, scoreCount, answerStyle, refreshAddEventListener, resetScore, scoreDisplay }
