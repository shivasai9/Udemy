
function generateMatrix() {
    const rowsEl = document.getElementById('rows');
    const colsEl = document.getElementById('columns');
    const rows = rowsEl.value || 0;
    const cols = colsEl.value || 0;

    const matrixContainerel = document.getElementsByClassName('flex-container')[0];
    if (!matrixContainerel) {
        let matrixContainerEl = document.createElement('div');
        matrixContainerEl.className = 'flex-container';

        for (let i = 0; i < rows; i++) {
            let rowEl = document.createElement('div');
            rowEl.style.display = 'flex';

            for (let j = 0; j < cols; j++) {
                let itemEl = document.createElement('div');
                itemEl.className = 'flex-item';
                // itemEl.innerText = `${i},${j}`;
                rowEl.appendChild(itemEl);
            }

            matrixContainerEl.appendChild(rowEl);
        }

        const bodyEl = document.getElementsByTagName('body')[0];
        bodyEl.appendChild(matrixContainerEl);
    }
}

function clearMatrix() {
    const eltoBeCleared = document.getElementsByClassName('flex-container')[0];
    console.log(eltoBeCleared)
    eltoBeCleared.remove();
    const rowsEl = document.getElementById('rows');
    const colsEl = document.getElementById('columns');
    rowsEl.value = null;
    colsEl.value = null;
}