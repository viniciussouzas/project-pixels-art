window.onload = () => {
  addColorToPalette();
  if (localStorage.length > 0) {
    restoreRandomColors();
  }
  selectColor();
}

//Captura Elementos:
const body = document.getElementById('body');
const paletteSpaces = document.getElementsByClassName('color');
const blackPaletteSpace = document.getElementsByClassName('color')[0];
const colorsOfPalette = ['red', 'green', 'blue'];
const buttonRandomColor = document.getElementById('button-random-color');
const pixelBoard = document.getElementById('pixel-board');
const currentSelectedColor = document.getElementsByClassName('selected');

//Resolve Requisitos:

// - Requisito 1 - Feito direto no HTML

// - Requisito 2 e 3 - Parte feita no HTML de criação de Elementos

const addColorToPalette = () => {
  blackPaletteSpace.style.backgroundColor = 'black';
  for (let index = 1; index < paletteSpaces.length; index += 1) {
    for (let i = 0; i < colorsOfPalette.length; i += 1) {
      paletteSpaces[index].style.backgroundColor = colorsOfPalette[i];
    }
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


