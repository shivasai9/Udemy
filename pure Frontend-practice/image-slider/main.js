const noOfImages = 5;

const images = ['https://picsum.photos/id/1/200/300', 'https://picsum.photos/400/250?random=2', 'https://picsum.photos/400/250?random=3'];

let selectedImage = 0;

function updateImage() {
    const imageEl = document.getElementsByTagName('img')[0];
    imageEl.src = `https://picsum.photos/id/${selectedImage}/400/250`
}

function onCircleClick(imageNo) {
    selectedImage = imageNo;
    updateCircles();
    updateImage();
}

function updateCircles(state) {
    for (let i = 0; i < noOfImages; i++) {
        const circlesEl = document.getElementsByClassName('circles')[0];
        let circleEl;
        if (state === 'initial') {
            updateImage();
            circleEl = document.createElement('div');
            circleEl.addEventListener('click', () => onCircleClick(i));
        } else {
            circleEl = document.getElementsByClassName('circle')[i];
        }

        if (selectedImage === i) {
            circleEl.className = 'circle circle-active';
        } else {
            circleEl.className = 'circle'
        }

        if (state === 'initial') {
            circlesEl.appendChild(circleEl);
        }
        updatePrevious();
        updateNext();
    }
}

updateCircles('initial');

function updatePrevious() {
    const prevEl = document.getElementsByClassName('previous')[0];
    if (selectedImage === 0) {
        prevEl.style.cursor = 'none';
        prevEl.style.pointerEvents = 'none';
    } else {
        prevEl.style.cursor = 'pointer';
        prevEl.style.pointerEvents = 'auto';
    }
}

function updateNext() {
    const prevEl = document.getElementsByClassName('next')[0];
    if (selectedImage === (noOfImages - 1)) {
        prevEl.style.cursor = 'none';
        prevEl.style.pointerEvents = 'none';
    } else {
        prevEl.style.cursor = 'pointer';
        prevEl.style.pointerEvents = 'auto';
    }
}

function onPreviousClick() {
    selectedImage--;
    updateImage();
    updateCircles('update');
}

function onNextClick() {
    selectedImage++;
    updateImage();
    updateCircles('update');
}

