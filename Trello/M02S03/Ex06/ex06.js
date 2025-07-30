const numeroDigitado = Number(prompt('Quantos números da sequencia de Fibonacci deseja somar?'));

if (!isNaN(numeroDigitado) && numeroDigitado>=0)
{
    if (numeroDigitado === 0)
    {
        console.log(0);
    }else if (numeroDigitado === 1)
    {
        console.log(0);
    }else if (numeroDigitado > 1)
    {
        let soma = 1;
        let somaAnterior = 0;
        let contador = 3;
        while(contador <= numeroDigitado)
        {
            const proximoNumero = soma + somaAnterior;
            somaAnterior = soma;
            soma = proximoNumero;
            contador++;
        }
        console.log('resultado:');
        console.log(soma);
    }
    console.log(soma);
}else
{
    console.log('Ops, algo deu errado');
}
