const a = prompt('Digite primeiro número (a):');
const b = prompt('Digite segundo número: (b)');


+a > +b ? console.log('a maior que b') : +a < +b ? console.log('a menor que b') : +a === +b ? console.log('a igual b') : console.log('ops, algo deu errado');
