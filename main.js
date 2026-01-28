let color = 'black';
let click = true;

const populateBoard = (size) => {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement('beforeend', square);
    }
};

const changeSize = (input) => {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
        console.log('Too many squares');
    }
};

const changeColor = (choice) => {   
    color = choice;
};

const colorSquare = (e) => {
    if (click) {
        if (color == 'random') {
            e.currentTarget.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        } else {
            e.currentTarget.style.backgroundColor = color; 
        }
    } 
};

const reset = () => {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = '#48e');
};

document.querySelector('body').addEventListener('pointerdown', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'MODE: Coloring';
        } else {
            document.querySelector('.mode').textContent = 'MODE: Not coloring';
        }
    }
});

populateBoard(16);