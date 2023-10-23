document.addEventListener('DOMContentLoaded', (event) => {
    //ensures the html loads before javascript is ran

    let gameBoard = document.getElementById("board");

    for (let square of gameBoard.children) {
        square.setAttribute("class", "square");
    }

});