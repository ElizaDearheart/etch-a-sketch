let container = document.getElementById('container');
let allSquares = document.getElementsByName('square');

// Take user input for grid size
function getUserInput() {
    let userInput;
    while (userInput = prompt("Please enter the grid size you would like:")) {
        value = parseInt(userInput)
        if (value === null) {
            break;
        } else if (Number.isNaN(value)) {
            alert("Please enter a number.");
        } else if (value === Number(0)) {
            alert("Please enter a number greater than 0.");
        } else if (value > Number(200)) {
            alert("Please enter a number less than 200.")
        } else {
            return value;
        }
    }
}

function makeGrid(userInput) {
    //clear previous child nodes
    toDrawButton.addEventListener('click', function () {
        let element = document.getElementById('container');
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    });
    //create grid from user input
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