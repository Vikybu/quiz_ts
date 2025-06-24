

const allAnswers = document.querySelectorAll('.option');

let score = 0;


allAnswers.forEach(button => {
  button.addEventListener('click', function () {
    const isCorrect = button.getAttribute('correct_answer'); 

    if (isCorrect === "true") {
      score++;
        
    }
  });
});
console.log(score)