// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
const userColor = document.querySelector('#colorPicker');
const tblHead = document.createElement('thead');
const tblBody = document.createElement('tbody');
const tbl = document.querySelector('#pixelCanvas');
const formInput = document.querySelectorAll('input');
const thirdInput = formInput[2];
const form = document.querySelector('#sizePicker');
const y = form.elements['height'];
const x = form.elements['width'];
let yVal = y.value;
let xVal = x.value;
let numClick=0;
tbl.appendChild(tblHead);
tbl.appendChild(tblBody);
thirdInput.addEventListener('click', countClick);
function countClick(){
numClick++;
};
thirdInput.addEventListener('click', makeGrid);
function makeGrid(event) {
    if (numClick%2 !== 0) {
        event.preventDefault();
        yVal = y.value;
        xVal = x.value;
        for (let i = 1; i <= xVal; i++) {
            let column = document.createElement('tr');
            for (let j = 1; j <= yVal; j++) {
                let row = document.createElement('td');
                column.appendChild(row);
            }
            tblBody.appendChild(column);
        }
    }
    else {
        thirdInput.removeEventListener('click', makeGrid);
    }
}
tblBody.addEventListener('click', userBkground);
function userBkground(e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = userColor.value;
    }
}
