const nota01 = Number(prompt('Nota da primeira prova:'));
const nota02 = Number(prompt('Nota da segunda prova:'));
const nota03 = Number(prompt('Nota da terceira prova:'));
const media = (nota01 + nota02 + nota03) / 3;
console.log(media);

const nota04 = prompt('Nota da quarta prova:');
const nota05 = prompt('Nota da quinta prova:');
const nota06 = prompt('Nota da sexta prova:');
const media2 = (parseFloat(nota04) + parseInt(nota05) + +nota06) / 3;
console.log(media2);

const numeroUsuario = prompt('Qual o número vamos somar 10?');

console.log(10 + Number(numeroUsuario));

const arredondaNumero = prompt('Qual o número vamos arredondar?');
console.log(Math.round(arredondaNumero));

