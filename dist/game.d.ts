/**
 * Affiche la question avec les 4 réponses tant que l'index est inférieur au nombre de questions + affichage
 * du compte à rebours // quand index est supérieur au nombre de questions : affichage du score et du message
 * personnalisé
 */
declare function content(): void;
/**
 * Incrémente de 1 l'index
 */
declare function nextQuestion(): number;
/**
 * Efface le texte de la question et supprime les réponses
 */
declare function clearQuestion(): void;
/**
 * Rend les boutons des réponses disabled
 */
declare function disabledAnswer(): void;
/**
 * Rend le bouton suivant enabled
 */
declare function buttonActivation(): void;
declare function buttonOff(): void;
/**
 * Rend le bouton Rejouer visible seulement en fin de partie
 */
declare function rematch(): void;
/**
 * Permet de réinitialiser l'index à 0
 */
declare function resetIndex(): void;
/**
 * Gère l'affichage ou pas du cadre contenant la question
 */
declare function disableCadrequestion(): void;
/**
 * Affichage ou non de l'encadrer de score
 */
declare function ScoreContent(): void;
/**
 * Affichage de la barre de progression selon l'index
 */
declare function progression(): void;
/**
 * Gère l'affichage à l'ouverture du site
 */
declare function accueil(): void;
/**
 * Changement de style de la barre de navigation
 */
declare function styleNavBar(): void;
/**
 * Au click du choix du quiz auquel jouer, cette fonction permet de :
 *  - réinitialiser l'index à 0 si l'on clique après avoir commencé le quiz
 *  - Effacer l'affiche des questions et boutons précédents
 *  - Afficher le quiz associé au bouton cliqué
 *  - Afficher la question et les réponses
 *  - Exécuté la fonction refreshAddEventListener
 */
declare function quizChoice(): void;
export { content, nextQuestion, clearQuestion, disabledAnswer, buttonActivation, buttonOff, resetIndex, rematch, disableCadrequestion, accueil, quizChoice, progression, ScoreContent, styleNavBar, };
//# sourceMappingURL=game.d.ts.map