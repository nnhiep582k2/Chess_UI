import { dataSource } from '/assets/script/data.js';
import { Square } from '/assets/script/type.js';
import { addPieces, renderUI } from '/assets/script/render.js';

for (let i = 8; i > 0; i--) {
    const isEvenRow = i % 2 == 0;
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const isEvenSquare = j % 2 == 0;
        const columnName = String.fromCharCode(j);
        const id = columnName + i;
        const square = new Square();
        square.id = id;
        if ((!isEvenRow && !isEvenSquare) || (isEvenRow && isEvenSquare)) {
            square.color = 'dark';
        }
        if ((isEvenRow && !isEvenSquare) || (!isEvenRow && isEvenSquare)) {
            square.color = 'light';
        }
        rowArray.push(square);
    }
    dataSource.push(rowArray);
}

dataSource.forEach((row) => {
    row.forEach((square) => {
        addPieces(square);
    });
});

renderUI(dataSource);
