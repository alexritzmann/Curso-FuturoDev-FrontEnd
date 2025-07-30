

const add = document.getElementById('adicionar');
const sub = document.getElementById('subtrair');
const zerar = document.getElementById('zerar');
const contador = document.getElementById('contador');

let count = 0;

add.addEventListener('click', () => {
  count++;
  contador.textContent = `Contador: ${count}`;
});

sub.addEventListener('click', () => {
  count--;
  contador.textContent = `Contador: ${count}`;
});

zerar.addEventListener('click', () => {
  count = 0;
  contador.textContent = `Contador: ${count}`;
});

