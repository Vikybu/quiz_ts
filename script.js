import { disabledAnswer, buttonActivation, content } from './game.js'

let score = 0
const divScore = document.getElementById('score')

/*Cette fonction permet de savoir si une réponse est juste ou non. On recup nos boutons avec l'attribue "data-id"
 met des conditions if et else. Simple efficace ! bim bam boomk*/
function answer(clickBtn) {
    if (clickBtn.target.getAttribute("data-id") === "true") {
        return true
    }
    else {
        return false
    }
}


/*Cette fonction recup le btn true et ajoute 1 si cliqué*/
function scoreCount(clickBtn) {
    if (answer(clickBtn)) {
        score++
    }
}


/*Cette fonction nous permet de comparer le score avec une valeur nombre pour savoir si on connait tout sur la musique ou non.
On appel notre variable "score" pour lui donner des conditions avec des "if" pour que en fonction du score obtenu au quizzik
il y ai le score qui s'affiche et un message placé dans un p de manière dynamique avec JS. */
function scoreDisplay() {
    if (score <= 1){
        divScore.innerText = 'Ton score est de ' + score + ", oh no..."
        }

    else if (score <= 3) {
        divScore.innerText = 'Ton score est de '+ score + ", tu vas y arriver !!"
        
    } else if (score == 4) {
        divScore.innerText = 'Ton score est de ' + score + ", Bravo !!!"  
    }

}


/*Cette fonction permet de reset le score a zero simple efficace ya quoi! */
function resetScore() {
    score = 0
}


/*Cette fonction permet d'inplanter du CSS de manière dynamique avec en condition
clickBtn(APPEL PARAMETRE).target(CIBLE ICI UN BOUTON).getAttribute("data-id")(RECUPERE L'ATTRIBUE ICI "data-id") === "true") 
et ce qui se passe dans les accolade donc 
clickBtn(APPEL PARAMETRE).target(CIBLE BOUTON).style(IMPLEMANTE DU CSS).border(VALEUR CSS) = "2px solid green" */
function answerStyle(clickBtn) {
    if (answer(clickBtn)) {

        clickBtn.target.style.border = "5px solid green"
        clickBtn.target.style.backgroundColor = "#E8F5E8"
    } else {

        clickBtn.target.style.border = "5px solid red"
        clickBtn.target.style.backgroundColor = "#FFE8E8"
    }
}


/*Cette fonction permet de de refreshAddEventListener faire une boucle pour que le code ce réexecute ! 
la var btnAnswer permet de recup tout les bouton ayant la classe '.btn_answer'
la boucle for nous permet de parcourir tout les boutons
entre {} les evenements qui s'y passe. Ici on appel 5 functions qui doivent etre appliqué sur nos bouton  */
function refreshAddEventListener() {
    const btnAnswer = document.querySelectorAll('.btn_answer')
    for (let i = 0; i < btnAnswer.length; i++) {
        btnAnswer[i].addEventListener("click", (click) => {
            scoreCount(click)
            answerStyle(click)
            disabledAnswer()
            buttonActivation()

        })
    }
}

/*Permet de lier les données entre plusieurs page JS*/
export { answer, scoreCount, answerStyle, refreshAddEventListener, resetScore, scoreDisplay}