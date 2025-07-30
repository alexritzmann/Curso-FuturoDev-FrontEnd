
const imagem = prompt('informe uma URL de uma imagem:');

const img = document.createElement('img');
img.src = imagem;
img.alt = 'imagem fornecida pela ativ4';

document.getElementById('div').appendChild(img);
