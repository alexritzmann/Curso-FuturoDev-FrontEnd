const regiao = prompt('Digite o nome da região:');
const peso = Number(prompt('Digite o peso do produto:'));

const regiaoMinuscula = regiao.toLowerCase();
let frete = 0;
switch (regiaoMinuscula) {
    case 'norte':
        frete = 24.00 + (2.20 * peso);
        console.log(`Frete: R$ ${frete.toFixed(2)}`);
        break;
    case 'nordeste':
        frete = 22.00 + (2.10 * peso);
        console.log(`Frete: R$ ${frete.toFixed(2)}`);
        break;
    case 'centro-oeste':
        frete = 20.00 + (2.00 * peso);
        console.log(`Frete: R$ ${frete.toFixed(2)}`);
        break;
    case 'sudeste':
        frete = 16.00 + (1.80 * peso);
        console.log(`Frete: R$ ${frete.toFixed(2)}`);
        break;
    case 'sul':
        frete = 18.00 + (1.90 * peso);
        console.log(`Frete: R$ ${frete.toFixed(2)}`);
        break;
    default:
        console.log('Região inválida');
        break;
}
