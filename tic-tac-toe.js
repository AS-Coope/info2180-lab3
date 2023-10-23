// global variables
let markerSwitchValue = 0;
let targetValue = "X"
let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
let gameWinCheck = "";
let iterator = 0;
let currentId = "";
/*
let playerClick = function (event) {
    let target = event.target
    targetValue = (markerSwitchValue === 0) ? "X" : "O";
    console.log(targetValue);
    markerSwitchValue = (markerSwitchValue === 0) ? 1 : 0;
};
*/

let gameCheck = function () {
    // row checks
    if (gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2] && gameBoardArray[2] !== "") {
        return gameBoardArray[0];
    } else if (gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5] && gameBoardArray[5] !== "") {
        return gameBoardArray[3];
    } else if (gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8] && gameBoardArray[8] !== "") {
        return gameBoardArray[6];
    }
    // column checks
    else if (gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6] && gameBoardArray[6] !== "") {
        return gameBoardArray[0];
    } else if (gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7] && gameBoardArray[7] !== "") {
        return gameBoardArray[1];
    } else if (gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8] && gameBoardArray[8] !== "") {
        return gameBoardArray[2];
    }
    // diagonal checks
    else if (gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8] && gameBoardArray[8] !== "") {
        return gameBoardArray[0];
    } else if (gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6] && gameBoardArray[6] !== "") {
        return gameBoardArray[2];
    } else {
        return "continue";
    }
}

let documentReady = function () {
    let gameBoard = document.getElementById("board");
    let status = document.getElementById("status");

    for (let square of gameBoard.children) {
        square.classList.add("square");
        square.setAttribute("id", `${iterator}`); // setAttribute for this to be an id instead of classlist

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
                currentId = square.getAttribute("id");
                gameBoardArray[`${Number(currentId)}`] = targetValue;
            } else {
                if (square.classList.contains("X")) {
                    square.classList.remove("X");
                }
                square.textContent = targetValue;
                square.classList.add("O");
                currentId = square.getAttribute("id");
                gameBoardArray[`${Number(currentId)}`] = targetValue;
            }
            console.log(gameBoardArray);
            gameWinCheck = gameCheck();
            if (gameWinCheck !== "continue") {
                status.textContent = `Congratulations! ${gameWinCheck} is the Winner!`;
                status.classList.add("you-won");
            }
            console.log(status.textContent);

        });
        iterator += 1;

        // functionality to change style of a cell when hovered over
        square.addEventListener('mouseover', (event) => {
            square.classList.add("hover");
        });
        square.addEventListener('mouseout', (event) => {
            square.classList.remove("hover");
        });
    }

}
//ensures the html loads before javascript is ran
document.addEventListener('DOMContentLoaded', (event) => {
    documentReady();
});
