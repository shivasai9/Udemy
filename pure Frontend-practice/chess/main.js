const chessBoardEl = document.getElementsByClassName('chess-board')[0];

function createRow(i) {
    const rowEl = document.getElementById(`row-${i}`);
    if (!rowEl) {
        const rowEl = document.createElement('div');
        rowEl.style.height = '62px';
        rowEl.setAttribute('id', `row-${i}`);
        chessBoardEl.appendChild(rowEl);
    }
}

function createBox(i, j) {
    const boxEl = document.getElementById(`${i}+${j}`);
    if (!boxEl) {
        const box = document.createElement('div');
        if ((i + j) % 2 == 0) {
            box.style.background = 'white';
        } else {
            box.style.background = 'black';
        }
        box.style.height = '60px';
        box.style.width = '60px';
        box.style.border = '1px solid black';
        box.style.display = 'inline-block';
        box.style.cursor = 'pointer';
        box.setAttribute('id', `${i}+${j}`);
        const rowEl = document.getElementById(`row-${i}`);
        rowEl.appendChild(box)
    } else {
        if ((i + j) % 2 == 0) {
            boxEl.style.background = 'white';
        } else {
            boxEl.style.background = 'black';
        }
        boxEl.style.borderColor = 'black';
    }
}

function createChessBoard() {
    for (let i = 0; i < 8; i++) {
        createRow(i);
        for (let j = 0; j < 8; j++) {
            createBox(i, j)
        }
    }
}

createChessBoard();

chessBoardEl.addEventListener('click', handleClickOnChessBoard);

function handleClickOnChessBoard(event) {
    const id = event.target.id;
    if (id.includes('+')) {
        createChessBoard()
        const rowNo = id.split('+')[0];
        const colNo = id.split('+')[1];
        paintTopLeftDiagonals(rowNo, colNo);
        paintTopRightDiagonals(rowNo, colNo);
        paintBottomLeftDiagonals(rowNo, colNo);
        paintBottomRightDiagonals(rowNo, colNo);
    }
}

function paintTopLeftDiagonals(row, col) {
    while (row >= 0 && col >= 0) {
        changeBoxColor(row, col);
        row--;
        col--;
    }
}

function paintTopRightDiagonals(row, col) {
    while (row >= 0 && col <= 7) {
        changeBoxColor(row, col);
        row--;
        col++;
    }
}

function paintBottomLeftDiagonals(row, col) {
    while (row <= 7 && col >= 0) {
        changeBoxColor(row, col);
        row++;
        col--;
    }
}

function paintBottomRightDiagonals(row, col) {
    while (row <= 7 && col <= 7) {
        changeBoxColor(row, col);
        row++;
        col++;
    }
}

function changeBoxColor(row, col) {
    const id = `${row}+${col}`;
    const boxEl = document.getElementById(id);
    boxEl.style.background = 'red';
    boxEl.style.borderColor = 'red';
}

function resetHandler() {
    createChessBoard();
}