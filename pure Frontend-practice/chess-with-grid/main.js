const chessBoardEl = document.getElementById('chess-board');

function drawChessBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const boxEl = document.createElement('div');
            boxEl.classList.add('box')
            boxEl.setAttribute('id', `item-${i}-${j}`)
            // if ((i + j) % 2 === 0) {
            //     boxEl.style.background = 'black';
            // }
            chessBoardEl.appendChild(boxEl);
        }
    }
}

drawChessBoard();

// function resetBoard() {
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 8; j++) {
//             const boxEl = document.getElementById(`item-${i}-${j}`);
//             if ((i + j) % 2 === 0) {
//                 boxEl.style.background = 'black';
//             } else {
//                 boxEl.style.background = 'white';
//             }
//         }
//     }
// }

// chessBoardEl.addEventListener('click', clickHandler);

// function clickHandler(event) {
//     resetBoard();
//     const rowNo = event.target.attributes.id.value.split('-')[1];
//     const colNo = event.target.attributes.id.value.split('-')[2];
//     updateLeftTopBoxes(rowNo, colNo);
//     updateLeftBottomBoxes(rowNo, colNo);
//     updateRightTopBoxes(rowNo, colNo);
//     updateRightBottomBoxes(rowNo, colNo);
// }

// function updateLeftTopBoxes(r, c) {
//     while(r >= 0 && c >= 0) {
//         updateBox(`item-${r}-${c}`);
//         r--;
//         c--;
//     }
// }
// function updateLeftBottomBoxes(r, c) {
//     while(r <= 7 && c >= 0) {
//         updateBox(`item-${r}-${c}`);
//         r++;
//         c--;
//     }
// }
// function updateRightTopBoxes(r, c) {
//     while(r >= 0 && c <= 7) {
//         updateBox(`item-${r}-${c}`);
//         r--;
//         c++;
//     }
// }
// function updateRightBottomBoxes(r, c) {
//     while(r <= 7 && c <= 7) {
//         updateBox(`item-${r}-${c}`);
//         r++;
//         c++;
//     }
// }

// function updateBox(id) {
//     const el = document.getElementById(id);
//     el.style.background = 'red';
// }