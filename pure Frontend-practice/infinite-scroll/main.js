const apiBaseUrl = `https://api.javascripttutorial.net/v1/quotes/`;

const listEl = document.getElementById('list');
const spinnerEl = document.getElementsByClassName('spinner-background')[0];

let currentPage = 0;
let total;
const pageLimit = 15;

function showSpinner() {
    spinnerEl.classList.remove('hide');
}

function stopSpinner() {
    spinnerEl.classList.add('hide');
}

async function getQuotes() {
    showSpinner();
    currentPage++;
    const queryParams = `?page=${currentPage}&limit=${pageLimit}`;
    setTimeout(async () => {
        const res = await fetch(apiBaseUrl + queryParams);
        const quotes = await res.json();
        total = quotes.total;
        showQuotes(quotes.data);
        stopSpinner();
    }, 1000)
}

getQuotes();

function showQuotes(quotes) {
    for (let i = 0; i < quotes.length; i++) {
        const liEl = document.createElement('li');
        liEl.innerHTML = quotes[i].quote;
        listEl.append(liEl);
    }
}

document.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if ((clientHeight + scrollTop >= scrollHeight) && (currentPage * pageLimit <= total)) {
        getQuotes();
    }
})