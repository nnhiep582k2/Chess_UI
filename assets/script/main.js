// Data
const columnDataSource = document.querySelectorAll('.column');
const columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let columnIndex = 0;

for (const columnData of columnDataSource) {
    let counter = 1;
    for (const square of columnData.children) {
        square.setAttribute('id', columnNames[columnIndex] + counter);
        counter++;
    }
    columnIndex++;
}

// Events handlers
const squareDataSource = document.querySelectorAll('.square');
const selectedSquare = [];

for (const squareData of squareDataSource) {
    squareData.addEventListener('click', (event) => {
        const theID = squareData.getAttribute('id');
        const theInside = document.getElementById(theID).innerHTML;
        if (selectedSquare.length > 0) {
            selectedSquare[0].removeAttribute('style');
            selectedSquare.length = 0;
        }
        if (theInside.includes('black') || theInside.includes('white')) {
            document.getElementById(theID).style.backgroundColor = '#dddd10';
            selectedSquare.push(squareData);
            console.log(selectedSquare);
        }
    });
}

// Rules
const pawnDataSource = [];

for (const columnName of columnNames) {
    pawnDataSource.push(document.getElementById(columnName + 2));
}

for (const columnName of columnNames) {
    pawnDataSource.push(document.getElementById(columnName + 7));
}

for (const pawnData of pawnDataSource) {
    pawnData.addEventListener('click', (event) => {
        const currentID = pawnData.getAttribute('id');
        let change = +currentID[1];
        const steps = [];
        for (let i = 0; i < 2; i++) {
            steps.push(
                document.getElementById(currentID[0] + (change + i + 1))
            );
        }
        console.log(steps);
    });
}
