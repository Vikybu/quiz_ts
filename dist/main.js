"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = exports.index = void 0;
const game_js_1 = require("./game.js");
const script_js_1 = require("./script.js");
exports.index = 0, exports.score = 0;
let btnSuivant = document.querySelector(".btn_suivant");
let btnRematch = document.querySelector(".btn_replay");
(0, game_js_1.accueil)();
(0, game_js_1.quizChoice)();
if (btnSuivant) {
    btnSuivant.addEventListener("click", () => {
        (0, game_js_1.clearQuestion)();
        (0, game_js_1.nextQuestion)();
        (0, game_js_1.content)();
        (0, script_js_1.refreshAddEventListener)();
        (0, game_js_1.buttonOff)();
        (0, game_js_1.rematch)();
        (0, game_js_1.progression)();
    });
}
if (btnRematch) {
    btnRematch.addEventListener("click", () => {
        (0, game_js_1.resetIndex)();
        (0, script_js_1.resetScore)();
        (0, game_js_1.rematch)();
        (0, script_js_1.refreshAddEventListener)();
        (0, game_js_1.ScoreContent)();
        (0, game_js_1.progression)();
    });
}
//# sourceMappingURL=main.js.map