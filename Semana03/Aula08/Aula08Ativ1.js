const a = prompt('Digite primeiro número (a):');
const b = prompt('Digite segundo número: (b)');

if (Number(a) > Number(b)) {
    console.log('a maior que b');
}else if (Number(a) < Number(b)) {
    console.log('a menor que b');
}else if (Number(a) === Number(b)) {
    console.log('a igual b');
}else {
    console.log('ops, algo deu errado');
}
