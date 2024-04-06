

const submitButtonEl = document.getElementById('submit-button');

const formEl = document.getElementsByName('poll')[0];

submitButtonEl.addEventListener('click', handleSubmit);

formEl.addEventListener('change', () => {
    const favTeam = document.forms['poll']['fav-team'].value;
    if(favTeam?.length) {
        submitButtonEl.disabled = false;
    } else {
        submitButtonEl.disabled = true;
    }
})

function handleSubmit(event) {
    event.preventDefault();
    const favTeam = document.forms['poll']['fav-team'].value;
    const resultsEl = document.getElementById('results');
    const questionEl = document.getElementById('question');
    
    // get data from api call

    let res= {
        RCB: 45,
        LSG: 25,
        RR: 35,
        GT: 15
    }

    res[favTeam] = res[favTeam] + 1;

    for(let [key, value] of Object.entries(res)) {
        const pEl =  document.getElementById(`${key}-p`);
        pEl.setAttribute('value', value);
    }
    questionEl.style.display = 'none';
    resultsEl.style.display = 'block';
}

