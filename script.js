const body = document.getElementById('body');
const paletteSpaces = document.getElementsByClassName('color');
const colorsOfPalette = ['black', 'red', 'green', 'blue'];

//Requisito 1 - Feito direto no HTML

//Requisito 2

const addPallete = () => {
  const createPallete = document.createElement('div');
  createPallete.id = 'color-palette';

  for (let index = 1; index <= 4; index += 1) {
    const createPalleteSpaces = document.createElement('div');
    createPalleteSpaces.className = 'color';

    createPallete.appendChild(createPalleteSpaces);
  }
  body.appendChild(createPallete);
}

const addColorToPalete = () => {
  for (let index = 1; index < paletteSpaces.length; index += 1) {
    for (let index = 0; index < colorsOfPalette.length; index += 1) {
      paletteSpaces[index].style.backgroundColor = colorsOfPalette[index];
    }
  }
}



window.onload = () => {
  addPallete();
  addColorToPalete();
}