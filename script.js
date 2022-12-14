const body = document.getElementById('body');

//Requisito 1

const addTitle = () => {
  const createHeader = document.createElement('header');
  const createTitle = document.createElement('h1')
  createTitle.id = 'title';
  createTitle.innerHTML = 'Paleta de Cores';

  createHeader.appendChild(createTitle);
  body.appendChild(createHeader);
}

//Requisito 2

const addPallete = () => {
  const createPallete = document.createElement('div');
  createPallete.id = 'color-palette';
  createPallete.style.display = 'flex';

  for (let index = 1; index <= 4; index += 1) {
    const palleteSpaces = document.createElement('div');
    palleteSpaces.className = 'color';
    palleteSpaces.style.border = '1px solid black';
    palleteSpaces.style.width = '20px';
    palleteSpaces.style.height = '20px';
    palleteSpaces.style.margin = '2px';

    createPallete.appendChild(palleteSpaces);
  }
  body.appendChild(createPallete);
}

window.onload = () => {
  addTitle();
  addPallete();
}