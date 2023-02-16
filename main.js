// Take user input for grid size
let container = document.getElementById('container');
let allSquares = document.getElementsByName('square');
let gridSize = prompt("Please enter the grid size you would like:");

function makeGrid(userInput) {
    container.style.setProperty('--grid-rows', userInput);
    container.style.setProperty('--grid-cols', userInput);
    for (i = 0; i < userInput * userInput; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }
    for (const square of container.children) {
        square.addEventListener("mouseenter", (event) => {
            event.target.style.color = "pink";
        })
    }

}



makeGrid(gridSize)