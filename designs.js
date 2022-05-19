// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//var userColor= document.querySelector ('#colorPicker');
const tblHead = document.createElement('thead');
const tblBody = document.createElement('tbody');
const tbl = document.querySelector('#pixelCanvas');
const formInput = document.querySelectorAll('input');
const thirdInput = formInput[2];
const form = document.querySelector('#sizePicker');
const y = form.elements['inputWidth'];
const x = form.elements['inputHeight'];
let yVal = y.value;
let xVal = x.value;

tbl.appendChild(tblHead);
tbl.appendChild(tblBody);
thirdInput.addEventListener('click', makeGrid);
function makeGrid(event) {
    for (let i = 1; i <= xVal; i++) {
        let column = document.createElement('tr');
        for (let j = 1; j <= yVal; j++) {
            let row = document.createElement('td');
            column.appendChild(row);
        }
        tblBody.appendChild(column);
    }
}