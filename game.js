import { /*nom de la variable de vivi*/ } from './questions.js' // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const question = document.getElementById('.question');
const option = document.getElementById('.option');

// Récupérer la première question
const firstQuestion = quiz_fatoumata_kebe.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
question.innerText = ;

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.options.forEach(option => {
  const option_btn = document.createElement('button');
  option_btn.innerText = option;
  option.classList.add('Je sais pas');
  __________.appendChild(__________);
});