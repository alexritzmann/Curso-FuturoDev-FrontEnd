const a = prompt('Digite uma frase:');
const b = prompt('Digite uma palavra que deseja procurar na frase:');

const aa = a.toLowerCase();
const bb = b.toLowerCase();

aa.includes(bb) ? console.log(`A palavra ${b} foi encontrada na frase`) : console.log(`A palavra ${b} nao foi encontrada na frase`);
