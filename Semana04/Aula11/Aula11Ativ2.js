
const precos = [12.5, 30, 99.99, 5] ;
const resultados = [];

precos.forEach(valor => {
    resultados.push('R$ ' + valor.toFixed(2))
});

console.log(resultados);

precos.forEach(valor => console.log('R$ ' + valor.toFixed(2)));

precos.forEach((valor, index) => console.log(index, 'R$ ' + valor.toFixed(2)));
