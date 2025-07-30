
const a = prompt('Digite uma letra aleatoria:');

if(a.length > 1 || !isNaN(a)) {
    console.log('Reinicie e digite apenas uma letra');
    process.exit();
}

switch (a.toLocaleLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vogal');
        break;
    default:
        console.log('Consoante');
        break;
}
