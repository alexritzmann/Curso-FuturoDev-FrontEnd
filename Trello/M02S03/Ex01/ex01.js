const frase = prompt('Digite uma frase:');

if (frase) 
{
    let novaFrase = '';
    for(let i = 0; i < frase.length; i++)
    {
        console.log(novaFrase);
        if (i === 0) 
        {
            novaFrase += frase[i].toUpperCase();
        }else if (frase[i - 1] === ' ') 
        {
            novaFrase += frase[i].toUpperCase();
        }else
        {
            novaFrase += frase[i];
        }
    }
    console.log(novaFrase);
}else 
{
    alert("Nenhuma frase foi inserida!");
}
