const container = document.getElementById('container');
const pen = document.getElementById('pen');
const colorPicker = document.getElementById('picker');
const reset = document.getElementById('reset');
let gridNumber = 16;
let isEraser = 0;
let defaultColor;
for (let i = 0; i < gridNumber * gridNumber; i++) {
    let smallGrids = document.createElement('div');
    smallGrids.style.backgroundColor = 'white';
    smallGrids.addEventListener('mouseover', () => {
        if (isEraser == 0) {
            defaultColor = document.getElementById('picker').value;
            smallGrids.style.backgroundColor = `${defaultColor}`;
        } else {
            smallGrids.style.backgroundColor = 'white';
        }
    })
    container.append(smallGrids);
}
container.style.gridTemplateColumns = `repeat(${gridNumber}, calc(28em/${gridNumber}))`;

function createGrid() {
    isEraser = 0;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    let askGridNumber = prompt('When enough is enough?', 16);
    if (askGridNumber == null) {
        gridNumber = 16;
    } else { gridNumber = Number(askGridNumber); }

    if (gridNumber <= 100) {
        for (let i = 0; i < gridNumber * gridNumber; i++) {
            let smallGrids = document.createElement('div');
            smallGrids.style.backgroundColor = 'white';
            smallGrids.addEventListener('mouseover', () => {
                if (isEraser == 0) {
                    defaultColor = document.getElementById('picker').value;
                    smallGrids.style.backgroundColor = `${defaultColor}`;
                } else {
                    smallGrids.style.backgroundColor = 'white';
                }
            })
            container.append(smallGrids);
        }
        container.style.gridTemplateColumns = `repeat(${gridNumber}, calc(28em/${gridNumber}))`;
    } else {
        alert('Asked too many grids!');
        gridNumber=16;
        for (let i = 0; i < gridNumber * gridNumber; i++) {
            let smallGrids = document.createElement('div');
            smallGrids.style.backgroundColor = 'white';
            smallGrids.addEventListener('mouseover', () => {
                if (isEraser == 0) {
                    defaultColor = document.getElementById('picker').value;
                    smallGrids.style.backgroundColor = `${defaultColor}`;
                } else {
                    smallGrids.style.backgroundColor = 'white';
                }
            })
            container.append(smallGrids);
        }
    }
}
const resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', createGrid);
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => { isEraser = 1; })
pen.addEventListener('click', () => { isEraser = 0; })
reset.addEventListener('click', resetAll);
colorPicker.addEventListener('click', () => { isEraser = 0; })
function resetAll() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    };
    gridNumber = 16;
    isEraser = 0;
    for (let i = 0; i < gridNumber * gridNumber; i++) {
        let smallGrids = document.createElement('div');
        smallGrids.style.backgroundColor = 'white';
        smallGrids.addEventListener('mouseover', () => {
            if (isEraser == 0) {
                defaultColor = document.getElementById('picker').value;
                smallGrids.style.backgroundColor = `${defaultColor}`;
            } else {
                smallGrids.style.backgroundColor = 'white';
            }
        })
        container.append(smallGrids);
    }
    container.style.gridTemplateColumns = `repeat(${gridNumber}, calc(28em/${gridNumber}))`;
}


