
const downIcon = '&#9660;';
const upIcon = '&#9650;';
const list = [
    {
        question: 'What about refund policy??',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam minima vel. Omnis nam eius adipisci nemo ducimus. Voluptatem accusantium harum unde ipsa, quaerat nostrum eos asperiores? Id, harum expedita.'
    },
    {
        question: 'What about refund policy??',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam minima vel. Omnis nam eius adipisci nemo ducimus. Voluptatem accusantium harum unde ipsa, quaerat nostrum eos asperiores? Id, harum expedita.'
    },
    {
        question: 'What about refund policy??',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam minima vel. Omnis nam eius adipisci nemo ducimus. Voluptatem accusantium harum unde ipsa, quaerat nostrum eos asperiores? Id, harum expedita.'
    },
    {
        question: 'What about refund policy??',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam minima vel. Omnis nam eius adipisci nemo ducimus. Voluptatem accusantium harum unde ipsa, quaerat nostrum eos asperiores? Id, harum expedita.'
    },
    {
        question: 'What about refund policy??',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam minima vel. Omnis nam eius adipisci nemo ducimus. Voluptatem accusantium harum unde ipsa, quaerat nostrum eos asperiores? Id, harum expedita.'
    },
]
const accordianEl = document.getElementById('accordion');
const itemEl = document.getElementsByClassName('item')[0];
accordianEl.addEventListener('click', openContent);

function openContent(event) {
    const item = +event.target?.attributes?.id?.value.split('-')[1] - 1;

    if (item >= 0) {
        const itemEl = accordianEl.children[item];
        const contentEl = itemEl?.children[1];
        const iconEl = itemEl.children[0].children[1];

        if (contentEl.classList.value.includes('hide')) {
            contentEl.classList.replace('hide', 'show');
            iconEl.innerHTML = upIcon;
        } else {
            contentEl.classList.replace('show', 'hide');
            iconEl.innerHTML = downIcon;
        }
    }
}

function addItems() {
    for (let i = 0; i < list.length; i++) {
        const clonedItemEl = itemEl.cloneNode(true);
        clonedItemEl.style.display = 'block';
        
        const headingEl = clonedItemEl.children[0];
        const questionEl = headingEl.children[0];
        const iconEl = headingEl.children[1];
        const contentEl = clonedItemEl.children[1];

        questionEl.innerHTML = list[i]['question'];
        contentEl.innerHTML = list[i]['answer'];
        iconEl.setAttribute('id', `item-${i + 1}`);
        accordianEl.appendChild(clonedItemEl);
    }
}

addItems();