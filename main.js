// Take user input for grid size
let container = document.getElementById('container');
let allSquares = document.getElementsByName('square');

function getUserInput() {
    let userInput = prompt("Please enter the grid size you would like:");
    return userInput
    /*
    if (userInput !== Number) {
        alert("Please enter a number.");
        getUserInput();
    } else {
        return userInput
    }*/
}

function makeGrid(userInput) {
    toDrawButton.addEventListener('click', function () {
        let element = document.getElementById('container');
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    });
    toDrawButton.addEventListener('click', function () {
        userInput = getUserInput()

        container.style.setProperty('--grid-rows', userInput);
        container.style.setProperty('--grid-cols', userInput);
        for (i = 0; i < userInput * userInput; i++) {
            let square = document.createElement('div')
            square.classList.add('square')
            container.appendChild(square)
        }
        for (const square of container.children) {
            square.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "pink";
            })
        }
    });

}




makeGrid()