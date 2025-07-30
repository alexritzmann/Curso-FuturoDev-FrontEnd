const numero = Number(prompt('Insira um número:'));
let numeroTemporario = numero;

while (numeroTemporario > 0)
{
    let numeroFormado = '';
    for (let i = numero; i >= 1; i--)
    {
        if (i === numeroTemporario)
        {
            numeroFormado += '1';
        }else
        {
            numeroFormado += '0';
        }
    }
    numeroTemporario--;
    console.log(numeroFormado);
}

