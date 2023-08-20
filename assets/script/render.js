import { pawnMovement, pawnUnMovement } from '/assets/script/movement.js';

export const addPieces = (obj) => {
    const rank = obj.id[1];
    switch (rank) {
        case '2':
            obj.isPiece = '/assets/icons/white/pawn.png';
            break;
        case '7':
            obj.isPiece = '/assets/icons/black/pawn.png';
            break;
    }
    switch (obj.id) {
        case 'a1':
        case 'h1':
            obj.isPiece = '/assets/icons/white/rook.png';
            break;
        case 'b1':
        case 'g1':
            obj.isPiece = '/assets/icons/white/knight.png';
            break;
        case 'c1':
        case 'f1':
            obj.isPiece = '/assets/icons/white/bishop.png';
            break;
        case 'd1':
            obj.isPiece = '/assets/icons/white/queen.png';
            break;
        case 'e1':
            obj.isPiece = '/assets/icons/white/king.png';
            break;
        case 'a8':
        case 'h8':
            obj.isPiece = '/assets/icons/black/rook.png';
            break;
        case 'b8':
        case 'g8':
            obj.isPiece = '/assets/icons/black/knight.png';
            break;
        case 'c8':
        case 'f8':
            obj.isPiece = '/assets/icons/black/bishop.png';
            break;
        case 'd8':
            obj.isPiece = '/assets/icons/black/queen.png';
            break;
        case 'e8':
            obj.isPiece = '/assets/icons/black/king.png';
            break;
    }
};

export const renderUI = (squares) => {
    const board = document.querySelector('.board');
    let rankNumber = 8;
    squares?.forEach((element) => {
        let rank = document.createElement('div');
        rank.classList.add('rank-style');
        rank.setAttribute('id', rankNumber--);
        board.appendChild(rank);
        element.forEach((el) => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', el.id);
            square.classList.add(`color-${el.color}`);
            square.classList.add('column-' + el.id[0]);
            square.addEventListener('click', (e) => el.movement);
            if (el.isPiece) {
                const theImage = document.createElement('img');
                const pieceElement = document.createElement('div');
                theImage.setAttribute('src', el.isPiece);
                pieceElement.appendChild(theImage);
                square.appendChild(pieceElement);
                pieceElement.addEventListener('click', (e) => {
                    el.isHighlighted = !el.isHighlighted;
                    if (el.isHighlighted) {
                        square.classList.remove(`color-${el.color}`);
                        square.classList.add('color-highlight');
                        pawnMovement(el);
                    } else {
                        square.classList.remove('color-highlight');
                        square.classList.add(`color-${el.color}`);
                        pawnUnMovement(el);
                    }
                });
            }
            rank.appendChild(square);
        });
    });
};
