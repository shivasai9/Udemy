const stars = 4;
let ratingVal = 0;
const ratingEl = document.getElementById('rating');

for (let i = 0; i <= stars; i++) {
    const starEl = document.createElement('span');
    starEl.classList.add('fa');
    starEl.classList.add('fa-star');
    starEl.setAttribute('id', `star-${i}`);
    ratingEl.appendChild(starEl);
}

ratingEl.addEventListener('click', onClickHandler);
ratingEl.addEventListener('mouseover', onMouseoverHandler);
ratingEl.addEventListener('mouseleave', onLeaveHandler);

function onMouseoverHandler(event) {
    const val = event.target.attributes.id.value.split('-')[1];

    for (let i = 0; i <= stars; i++) {
        const starEl = document.getElementById(`star-${i}`);
        if (i <= val) {
            starEl.classList.add('fa-star-active');
        } else {
            starEl.classList.remove('fa-star-active');
        }
    }
}

function onLeaveHandler() {
    for (let i = 0; i <= stars; i++) {
        const starEl = document.getElementById(`star-${i}`);
        if (i <= ratingVal - 1) {
            starEl.classList.add('fa-star-active');
        } else {
            starEl.classList.remove('fa-star-active');
        }
    }
}

function onClickHandler(event) {
    ratingVal = +event.target.attributes.id.value.split('-')[1] + 1;
    const ratingCountEl = document.getElementById('rating-count');
    ratingCountEl.textContent = ratingVal;
}

