// global variables
let markerSwitchValue = 0;
let targetValue = "X"

let playerClick = function () {
    targetValue = (markerSwitchValue === 0) ? "X" : "O";
    console.log(targetValue);
    markerSwitchValue = (markerSwitchValue === 0) ? 1 : 0;
};

let documentReady = function () {
    let gameBoard = document.getElementById("board");
    let element = gameBoard.querySelector("div");
    let iterator = 0;

    for (let square of gameBoard.children) {
        square.classList.add("square");
        square.classList.add(`${iterator}`);
        square.setAttribute("onclick", "playerClick()");
        iterator += 1;
    }

    let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    let gameEnd = false;
}
//ensures the html loads before javascript is ran
document.addEventListener('DOMContentLoaded', (event) => {
    documentReady();
});
