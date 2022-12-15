window.onload = () => {
  addColorToPalette();
  //addRandomColor();
}

//Captura Elementos:
const body = document.getElementById('body');
const paletteSpaces = document.getElementsByClassName('color');
const colorsOfPalette = ['black', 'red', 'green', 'blue'];
const buttonRandomColor = document.getElementById('button-random-color');

//Resolve Requisitos:

// - Requisito 1 - Feito direto no HTML

// - Requisito 2 e 3 - Parte feita no HTML de criação de Elementos

const addColorToPalette = () => {
  for (let index = 1; index < paletteSpaces.length; index += 1) {
    for (let index = 0; index < colorsOfPalette.length; index += 1) {
      paletteSpaces[index].style.backgroundColor = colorsOfPalette[index];
    }
  }
}

//Requisito 4

const addRandomColor = () => {
  for (let index = 1; index < paletteSpaces.length; index += 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    paletteSpaces[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

buttonRandomColor.addEventListener('click', addRandomColor);