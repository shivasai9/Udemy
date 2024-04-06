const popOverEl = document.getElementById('pop-over');

function openPopOver() {
    popOverEl.style.display = 'block';
}

function closePopOver() {
    popOverEl.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == popOverEl) {
        popOverEl.style.display = 'none';
    }
}