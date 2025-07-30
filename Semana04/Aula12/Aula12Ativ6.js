

const quadrado = (a) => {
    return a*a;
};


const numero = prompt('Digite um número:');
if(!isNaN(numero))
{
    console.log(quadrado(numero));
}

