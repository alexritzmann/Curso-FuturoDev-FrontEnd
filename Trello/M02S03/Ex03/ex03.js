const data = Number(prompt('Insira a data:'));
const mes = Number(prompt('Insira o mês:'));
const ano = Number(prompt('Insira o ano:'));

if (ano >= 0 && ano <= 9999 && mes >= 1 && mes <= 12 && data >= 1 && data <= 31) 
{
    if (ano % 4 === 0 && mes === 2 && data > 29) 
    {
        console.log('Data inválida');
        process.exit();
    }
    if (ano % 4 !== 0 && mes === 2 && data > 28) 
    {
        console.log('Data inválida');
        process.exit();
    }
    if ((mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) && data > 31) 
    {
        console.log('teste mes 1');
        console.log('Data inválida');
        process.exit();
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && data > 30)
    {
        console.log('Data inválida');
        process.exit();
    }
    console.log('Data válida');
}else 
{
    console.log('Data inválida');
}
