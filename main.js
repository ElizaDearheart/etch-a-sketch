//container div//
let container = document.querySelector('#container');
//16X16 divs
for (x = 0; x < 256; x++) {
    let divs = document.createElement('div');
    divs.classList.add('divs');
    container.appendChild(divs);
}
