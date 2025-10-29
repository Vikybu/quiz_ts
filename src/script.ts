import { disabledAnswer, buttonActivation, content } from './game.js'

let score = 0

const divScore = <HTMLElement>document.getElementById('score')
const timer = <HTMLElement>document.getElementById('timer')

/*Cette fonction permet de savoir si une réponse est juste ou non. On recup nos boutons avec l'attribue "data-id"
 met des conditions if et else.*/
function answer(clickBtn: MouseEvent ) :boolean {
    const target = clickBtn.target as HTMLButtonElement | null;
    if (!target) return false;
    if (target.getAttribute("data-id") === "true") {
        return true
    } else {
        return false
    }
}


/*Cette fonction recup le btn true et ajoute 1 si cliqué*/
function scoreCount(event: MouseEvent) {
    if (answer(event)) {
        score++
    }
}


/*Cette fonction nous permet de comparer le score avec une valeur nombre pour savoir si on connait tout sur la musique ou non.
On appel notre variable "score" pour lui donner des conditions avec des "if" pour que en fonction du score obtenu au quizzik
il y ai le score qui s'affiche et un message placé dans un p de manière dynamique avec JS. */
function scoreDisplay() {
    if (score <= 1) {
        divScore.innerText = 'Ton score est de ' + score + ", Oh no 🥺"
        timer.innerText = ''
        }

    else if (score <= 3) {
        divScore.innerText = 'Ton score est de '+ score + ", Tu vas y arriver !! 🙂"
        timer.innerText = ''
        
    } else if (score == 4) {
        divScore.innerText = 'Ton score est de ' + score + ", Bravo !!! 😎"  
        timer.innerText = ''
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
function answerStyle(clickBtn: MouseEvent) {
    const target = clickBtn.target as HTMLButtonElement | null;
    if (answer(clickBtn)) {
        if (!target) return;
        target.style.border = "5px solid green"
        target.style.backgroundColor = "#E8F5E8"
    } else {
        if (!target) return;
        target.style.border = "5px solid red"
        target.style.backgroundColor = "#FFE8E8"
    }
}


/*Cette fonction permet de de refreshAddEventListener faire une boucle pour que le code ce réexecute ! 
la var btnAnswer permet de recup tout les bouton ayant la classe '.btn_answer'
la boucle for nous permet de parcourir tout les boutons
entre {} les evenements qui s'y passe. Ici on appel 5 functions qui doivent etre appliqué sur nos bouton  */
function refreshAddEventListener() {
    const btnAnswer = document.querySelectorAll<HTMLButtonElement>('.btn_answer')
    for (let i = 0; i < btnAnswer.length; i++) {
        btnAnswer[i].addEventListener("click", (event: MouseEvent) => {
            scoreCount(event)
            answerStyle(event)
            disabledAnswer()
            buttonActivation()
        })
    }
}

/*Permet de lier les données entre plusieurs page JS*/
export { answer, scoreCount, answerStyle, refreshAddEventListener, resetScore, scoreDisplay}