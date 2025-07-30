const a = prompt('Digite um número:');

if (!isNaN(+a))
{
    for (let i = 0; i <= 10; i++) 
        {
        console.log(a*i);
    }
}else{
    console.log('Ops, algo deu errado');
}
