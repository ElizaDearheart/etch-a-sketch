//16X16 divs
function createDiv() {
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