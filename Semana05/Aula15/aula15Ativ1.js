
const formulario = document.getElementById('formulario');
const inputText = document.getElementById('input-text');
const pText = document.getElementById('ptext');

formulario.addEventListener('submit', (event) => 
{
    event.preventDefault();
    pText.textContent = inputText.value;
});

