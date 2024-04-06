
let clickCount = 0;
let noOfSeconds = 2;
let width = 0;

function onRunClickHandler() {
    clickCount++;
    if(clickCount === 1) {
        startFilling();
    }
    const buttonEl = document.getElementsByTagName('button')[0];
    buttonEl.innerText = `Run ${clickCount}`;
}

function startFilling() {
    let progressFillEl = document.getElementById('progress-fill');
    let timer = setInterval(() => {
        if (width <= 100) {
            width = width + (((10 / (noOfSeconds * 1000)) * 100));
            progressFillEl.style.width = `${width}%`;
        } else {
            clearInterval(timer);
            clickCount--;
            width = 0;
            const buttonEl = document.getElementsByTagName('button')[0];
            buttonEl.innerText = `Run ${clickCount}`
            progressFillEl.style.width = '0';
            if (clickCount > 0) {
                startFilling();
            }
        }
    }, 10)
}






