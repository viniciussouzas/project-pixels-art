window.onload = () => {
  addColorToPalette();
  if (localStorage.getItem('colorPalette')) {
    restoreRandomColors();
  }
  if (localStorage.getItem('pixelBoard')) {
    restoreDrawing();
  }
  selectColor();
  paintBoard();
}

//Captura Elementos:
const body = document.getElementById('body');
const paletteSpaces = document.getElementsByClassName('color');
const colorsOfPalette = ['black','red', 'green', 'blue'];
const buttonRandomColor = document.getElementById('button-random-color');
const pixelBoard = document.getElementById('pixel-board');
const currentSelectedColor = document.getElementsByClassName('selected');
const pixels = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board')
//Resolve Requisitos:

// - Requisito 1 - Feito direto no HTML

// - Requisito 2 e 3 - Parte feita no HTML de criação de Elementos

const addColorToPalette = () => {
   for (let index = 0; index < paletteSpaces.length; index += 1) {
      paletteSpaces[index].style.backgroundColor = colorsOfPalette[index];
    }
  }

//Requisito 4

const storeColors = ['black'];

const addRandomColor = () => {

  for (let index = 1; index < paletteSpaces.length; index += 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    paletteSpaces[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    storeColors.push(paletteSpaces[index].style.backgroundColor);
  }

  storeRandomColors();
}

buttonRandomColor.addEventListener('click', addRandomColor);

//Requisito 5

const storeRandomColors = () => {
  localStorage.setItem('colorPalette', JSON.stringify(storeColors));
};

const restoreRandomColors = () => {
  const restoreColors = JSON.parse(localStorage.getItem('colorPalette'));

  for (let index = 0; index < restoreColors.length; index += 1) {
    paletteSpaces[index].style.backgroundColor = restoreColors[index];
  }
}

//Requisito 6 e 7 - Parte feita no HTML

for (let index = 0; index < 5; index += 1) {
  const createWidthPixel = document.createElement('div');
  for (let index = 0; index < 5; index += 1) {
    const createHeightPixel = document.createElement('div');
    createHeightPixel.className = 'pixel';
    createWidthPixel.appendChild(createHeightPixel);
    }
  
    pixelBoard.appendChild(createWidthPixel);
  }

//Requisito 8 - Feito no HTML

//Requisito 9

const selectColor = () => {
  for (let index = 0; index < paletteSpaces.length; index += 1) {
    paletteSpaces[index].addEventListener('click', () => {
      currentSelectedColor[0].className = 'color';
      paletteSpaces[index].className = 'color selected';
    })
  }
}



//Requisito 10

const paintBoard = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = currentSelectedColor[0].style.backgroundColor;
      drawings.length = 0;
      storeDrawing();
    });
  }
};

//Requisito 11 - feito parte no HTML

const clearBoard = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);

//Requisito 12

const drawings = [];

const storeDrawing = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    const objects = {
      backgroundColor: pixels[index].style.backgroundColor,
      index: index,
    }
    drawings.push(objects);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(drawings));
};

const restoreDrawing = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    const restoreDrawings = JSON.parse(localStorage.getItem('pixelBoard'))[index];
    pixels[index].style.backgroundColor = restoreDrawings.backgroundColor;
  }
}
