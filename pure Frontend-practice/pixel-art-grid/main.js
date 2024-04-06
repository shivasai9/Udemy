let rows = 10;
let cols = 10;
let draw = false;
let colors = ['red', 'orange', 'blue', 'black', 'green', 'gray', 'violet', 'pink', 'cyan', 'tomato', 'purple'];
let selectedColor = 'black';

const gridEl = document.getElementById('pixel-art-grid');

for(let i=0; i<=rows; i++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('row')
    for(let j=0; j<cols; j++) {
        const boxEl = document.createElement('span');
        boxEl.classList.add('box');
        if(i === rows) {
            boxEl.style.backgroundColor = colors[j];
            boxEl.style.cursor = 'pointer';
            boxEl.id = `colorpick-${i}-${j}`;
        } else {
            boxEl.id = `row-${i}-${j}`;
        }
        rowEl.appendChild(boxEl);
    }
    gridEl.appendChild(rowEl);
}

gridEl.addEventListener('click', handleClick);
gridEl.addEventListener('mouseover', handleMouseOver);

function handleClick(event) {
    const idVal = event.target.attributes.id.value;
    const boxEl = document.getElementById(idVal);

    if(idVal.includes('color')) {
        selectedColor = event.target.style.backgroundColor;
        boxEl.style.borderColor = 'red';
    } else if(idVal.includes('row')) {
        boxEl.style.backgroundColor = selectedColor;
    }
}

function handleMouseOver(event) {
    const idVal = event.target.attributes.id.value;
    const bColor = event.target.style.backgroundColor || null;
    const boxEl = document.getElementById(idVal);
    if(idVal.includes('row')) {
        if(draw) {
            boxEl.style.backgroundColor = selectedColor;
        } else if(bColor && draw) {
            boxEl.style.backgroundColor = null;
        }
    }
}

window.addEventListener('mousedown', ()=>{
    draw = true;
})
window.addEventListener('mouseup', ()=>{
    draw = false;
})

