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

function refreshAddEventListener() {
     const btnAnswer = document.querySelectorAll('.btn_answer')
    for (let i = 0; i < btnAnswer.length; i++) {
    btnAnswer[i].addEventListener("click", (click) => {
        answer(click)
        scoreCount(click)  
} )
    
}
}


export {answer, scoreCount, refreshAddEventListener}


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