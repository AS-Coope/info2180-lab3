let documentReady = function () {
    let gameBoard = document.getElementById("board");
    let element = gameBoard.querySelector("div");
    let htmlGameBoardArray = [];

    for (let square of gameBoard.children) {
        square.classList.add("square");
        square.setAttribute("onclick", "playerClick(target, elem)");
        htmlGameBoardArray.push(square);
    }

    console.log(htmlGameBoardArray);

    let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    let gameEnd = false;
    let markerSwitchValue = 0;
    let targetValue = "X";

    let playerClick = function (target, elem) {
        elem.textContent = target;
    };

    while (gameEnd !== true) {
        targetValue = (markerSwitchValue === 0) ? "X" : "O";


        playerClick(targetValue, element);
        // ensures target switches to opposite target than what was just used
        markerSwitchValue = (markerSwitchValue === 0) ? 1 : 0;
        gameEnd = true; // here to prevent browser crashing from while loop running infinitely
    }
}

//ensures the html loads before javascript is ran
document.addEventListener('DOMContentLoaded', (event) => {
    documentReady();
});
