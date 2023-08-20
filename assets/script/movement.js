export const pawnMovement = (el) => {
    const row = el.id[1];
    const column = el.id[0];
    if (row == 2) {
        el.style;
        hintForPawnMove(row, column);
    }
};

const hintForPawnMove = (row, column) => {
    let newRow = Number.parseInt(row);
    for (let i = 0; i < 2; i++) {
        newRow++;
        let elementToBeHigh = document.getElementById(column + newRow);
        const span = document.createElement('span');
        span.classList.add('circle');
        elementToBeHigh.appendChild(span);
    }
};

export const pawnUnMovement = (el) => {
    const row = el.id[1];
    const column = el.id[0];
    let newRow = Number.parseInt(row);
    for (let i = 0; i < 2; i++) {
        newRow++;
        let elementToBeHigh = document.getElementById(column + newRow);
        elementToBeHigh.innerHTML = '';
    }
};
