const lastSeenMsgEl = document.getElementById('lastseen-msg');
let lastInDate;

function out1() {
    lastInDate = new Date();
    setInterval(() => {
        setLastSeenMsg();
    }, 1000);
}

function setLastSeenMsg() {
    const now = new Date();
    const diff = (now.getTime() - lastInDate.getTime()) / 1000;
    console.log('diff', diff);
    if (diff < 60) {
        lastSeenMsgEl.innerHTML = 'last seen just now.'
    }

    if (diff > 60 && diff < (60 * 60)) {
        lastSeenMsgEl.innerHTML = 'last seen a minute ago.'
    }

    if (diff >= (60 * 60) && diff < (30 * 24 * 60 * 60)) {
        lastSeenMsgEl.innerHTML = 'last seen an hour ago.'
    }

    if (diff >= (30 * 24 * 60 * 60) && diff < (365 * 24 * 60 * 60)) {
        lastSeenMsgEl.innerHTML = 'last seen a month ago.'
    }

    if (diff >= (365 * 24 * 60 * 60)) {
        lastSeenMsgEl.innerHTML = 'last seen a year ago.'
    }
}
