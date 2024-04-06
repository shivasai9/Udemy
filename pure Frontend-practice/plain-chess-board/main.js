const chessBoardEl = document.getElementById('chess-board');

for (let i = 0; i < 7; i++) {
    const rowEl = document.createElement('div');
    rowEl.style.height = '50px';

    for (let j = 0; j < 7; j++) {
        const squareEl = document.createElement('div');
        squareEl.classList.add('square');
        if (((i + j) % 2) !== 0) {
            squareEl.style.backgroundColor = 'black';
        }
        rowEl.appendChild(squareEl);
    }
    chessBoardEl.appendChild(rowEl);
}