// global variables
let markerSwitchValue = 0;
let targetValue = "X"
/*
let playerClick = function (event) {
    let target = event.target
    targetValue = (markerSwitchValue === 0) ? "X" : "O";
    console.log(targetValue);
    markerSwitchValue = (markerSwitchValue === 0) ? 1 : 0;
};
*/

let documentReady = function () {
    let gameBoard = document.getElementById("board");
    let element = gameBoard.querySelector("div");
    let iterator = 0;


    for (let square of gameBoard.children) {
        square.classList.add("square");
        square.classList.add(`${iterator}`); // setAttribute for this to be an id instead of classlist

        square.addEventListener('click', playerClick => {
            targetValue = (markerSwitchValue === 0) ? "X" : "O";
            markerSwitchValue = (markerSwitchValue === 0) ? 1 : 0;

            // determines what target is placed in a cell and changes the class
            if (targetValue === "X") {
                if (square.classList.contains("O")) {
                    square.classList.remove("O");
                }
                square.textContent = targetValue;
                square.classList.add("X");
            } else {
                if (square.classList.contains("X")) {
                    square.classList.remove("X");
                }
                square.textContent = targetValue;
                square.classList.add("O");
            }
        });
        iterator += 1;
    }

    let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    let gameEnd = false;
}
//ensures the html loads before javascript is ran
document.addEventListener('DOMContentLoaded', (event) => {
    documentReady();
});
