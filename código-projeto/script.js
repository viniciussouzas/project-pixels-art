const app = document.getElementById('app');

const addHeader = () => {
  const createHeader = document.createElement('header');
  const pageTitle = document.createElement('h1');
  pageTitle.id = 'title';
  pageTitle.innerHTML = 'Paleta de Cores';
  
  createHeader.appendChild(pageTitle);
  app.appendChild(createHeader);
}

window.onload = () => {
  addHeader();
}