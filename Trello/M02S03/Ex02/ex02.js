const capitalInicial = Number(prompt('Insira o valor de capital inicial:'));

const periodo = Number(prompt('Insira o período em meses para o calculo de juros compostos:'));

const CapitalComposto = (capitalInicial * Math.pow(1.05, periodo));

console.log(CapitalComposto.toFixed(2));