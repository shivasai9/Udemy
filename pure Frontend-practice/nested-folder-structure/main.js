const folder = [
    {
        name: 'one',
        folder: [
            {
                name: 'two'
            },
            {
                name: 'three'
            },
            {
                name: 'four'
            },
            {
                name: 'five',
                folder: [
                    {
                        name: 'six'
                    }
                ]
            },
        ]
    },
    {
        name: 'one',
        folder: [
            {
                name: 'two'
            },
            {
                name: 'three'
            },
            {
                name: 'four'
            },
            {
                name: 'five',
                folder: [
                    {
                        name: 'six'
                    }
                ]
            },
        ]
    },
    {
        name: 'one',
        folder: [
            {
                name: 'two'
            },
            {
                name: 'three'
            },
            {
                name: 'four'
            },
            {
                name: 'five',
                folder: [
                    {
                        name: 'six'
                    }
                ]
            },
        ]
    },
    {
        name: 'one',
        folder: [
            {
                name: 'two'
            },
            {
                name: 'three'
            },
            {
                name: 'four'
            },
            {
                name: 'five',
                folder: [
                    {
                        name: 'six'
                    }
                ]
            },
        ]
    },
    {
        name: 'seven'
    },
    {
        name: 'eight'
    }
];

const folderEl = document.getElementsByClassName('folder')[0];

function buildFolders(folder) {
    const ulEl = document.createElement('ul');
    
    for (let i = 0; i < folder.length; i++) {
        const liEl = document.createElement('li');
        liEl.innerHTML = `${folder[i].name}-file`;
        
        if(folder[i].folder?.length) {
            liEl.innerHTML = `${folder[i].name}-folder`;
            liEl.setAttribute('id', 'folder');
            const el = buildFolders(folder[i].folder);
            el.style.display = 'none';
            liEl.append(el);
        }

        ulEl.append(liEl);

    }
    return ulEl;
}

const els = buildFolders(folder);
folderEl.append(els);

folderEl.addEventListener('click', (event) => {
    if(event.target.attributes.id?.value === 'folder') {
        event.target.children[0].style.display = 'block';
    }
})