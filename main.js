//16X16 divs
/*function createDiv() {
    let divBoard = document.createElement('new-div');

    divBoard.className = "new-div";
    divBoard.textContent = "x";

    return divBoard;
}

function createAndModifyDivs() {
    let container = document.getElementById("container"),
        myDivs = [],
        i = 0,
        numOfDivs = 256;

    for (i; i < numOfDivs; i += 1) {

        myDivs.push(createDiv());
        container.appendChild(myDivs[i]);
    }


}
createAndModifyDivs();
*/
let container = document.getElementById('container');
let gridSize = prompt("Please enter the grid size you would like:");

function makeGrid(userInput) {
    container.style.setProperty('--grid-rows', userInput);
    container.style.setProperty('--grid-cols', userInput);
    for (i = 0; i < userInput * userInput; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }
}

makeGrid(gridSize)