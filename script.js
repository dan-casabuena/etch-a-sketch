
// Initialize DOM variables
let grid = document.querySelector('#gridbox');
let title = document.querySelector('h1');
let reset = document.querySelector('#button1');
let body = document.querySelector('body');

// Adding background color
body.style.background = 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(208,178,212,1) 12%, rgba(198,179,215,1) 35%, rgba(187,181,219,1) 50%, rgba(169,184,226,1) 65%, rgba(159,185,229,1) 88%, rgba(148,187,233,1) 100%)';

// Initializing style attributes of title and grid
title.style.textAlign = 'center';

grid.style.display = 'grid';
grid.style.gridAutoFlow = 'row';
grid.style.overflowWrap = 'normal';

grid.style.width = '35vw';
grid.style.height = '35vw';

grid.style.backgroundColor = '#E3E3E3';
grid.style.padding = '5px';

grid.style.position = 'relative';
grid.style.left = '50%';
grid.style.transform = 'translateX(-50%)';

// Initializing Button style attributes
reset.style.backgroundColor = 'green';
reset.style.border = '1px solid black';
reset.style.color = 'white';
reset.style.padding = '15px 32px';
reset.style.textAlign = 'center';
reset.style.fontSize = '16px';
reset.style.position = 'relative';
reset.style.left = '50%';
reset.style.transform = 'translateX(-50%)';
reset.style.margin = '5px';

// Button onclick event listener
reset.addEventListener('click', function() {
    let rows = parseInt(prompt('Please enter the amount of rows between 1 to 200: '));
    while (isNaN(rows)) {
        rows = prompt('Please enter a valid number: ');
    };
    let columns = parseInt(prompt('Please enter the amount of columns between 1 to 200: '));
    while (isNaN(columns)) {
        columns = prompt('Please enter a valid number: ');
    };
    createNewGrid(rows, columns);    
});

// function that changes color of a specific square
function changeColor(square) {
    if (square.style.backgroundColor != 'black') {
        square.style.backgroundColor = 'black';
    } else {
        square.style.backgroundColor = 'white';
    };
};

// generate string of '1fr's dependent on the amount of rows or columns inputted.
function generateAutos(count) {
    var autos = '';
    for (i = 0; i < count; i++) {
        autos += '1fr ';
    };
    return autos
};

// Creates a new grid dependant on the rows and columns inputted.
function createNewGrid(rows, columns) {
    while (grid.children.length != 0) {
        grid.removeChild(grid.firstChild);
    };

    grid.style.gridTemplateRows = generateAutos(rows);
    grid.style.gridTemplateColumns = generateAutos(columns);
    
    for (i=0; i<(rows * columns); i++) {
        var div = document.createElement('rect' + i);
        div.id = 'square' + i;
        div.style.width = '1fr';
        div.style.height = '1fr';
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'white';
        div.addEventListener("mouseover", function() {
            changeColor(this);
        });
        grid.appendChild(div);
    };
};

