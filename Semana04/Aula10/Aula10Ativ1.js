const data = prompt('Insira a data no formato YYYY-MM-DD:');
var data2 = [];
for(let i = 0; i < data.split('-').length; i++)
{
    if(isNaN(data.split('-')[i]))
    {
        window.alert('Data inválida');
        process.exit();
    }
    data2[i] = parseInt(data.split('-')[i]);
}
console.log(data2);

if(data.split('-').length !== 3)
{
    window.alert('Data inválida');
    process.exit();
}else if(data.split('-')[0].length !== 4 || data.split('-')[1].length !== 2 || data.split('-')[2].length !== 2)
{
    window.alert('Data inválida');
    process.exit();
}else
{
    if(data.split('-')[1] > 12 || data.split('-')[2] > 31)
    {
        window.alert('Data inválida');
        process.exit();
    }else if(data.split('-')[1] < 1 || data.split('-')[2] < 1)
    {
        window.alert('Data inválida');
        process.exit();
    }else
    {
        const ano = data.split('-')[0];
        const mes = data.split('-')[1];
        const dia = data.split('-')[2];
        window.alert(`${dia}-${mes}-${ano}`);
    }
}
