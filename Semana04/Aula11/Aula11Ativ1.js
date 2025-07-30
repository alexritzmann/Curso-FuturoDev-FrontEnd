
const precos = [12.5, 30, 99.99, 5, 10];
const lista = ['Macarrao', 'Feijao', 'Arroz', 'Batata', 'Alface'];

const precosEmReais = precos.map(valor => 'R$ ' + valor.toFixed(2));
const listaMercadoOrdenada = lista.map(item => item + ' - ordenado');

console.log(listaMercadoOrdenada.sort());
console.log(precosEmReais);
