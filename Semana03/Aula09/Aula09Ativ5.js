const a = prompt('Digite um número:');


if (!isNaN(a) && a>=0)
{
    let fat = 1;
    for (let i = 2; i <= a; i++) 
    {
        fat = fat * i;
    }
    console.log(fat);
}else{
    console.log('Ops, algo deu errado');
}
