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

window.onload = () => {
  addTitle();
}