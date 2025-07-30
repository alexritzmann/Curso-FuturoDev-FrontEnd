const a = prompt('Digite um número:');

if (Number(a) % 2 === 0) {
    console.log('Par');
}else if (Number(a) % 2 === 1) {
    console.log('Impar');
}else {
    console.log('ops, algo deu errado');
}
