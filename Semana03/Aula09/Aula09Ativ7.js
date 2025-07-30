
const numeroGerado = Math.floor(Math.random() * 50)+1;

let tentativas = 5;

while (tentativas > 0) 
{
    const palpite = Number(prompt(`Adivinhe o número (${tentativas} tentativas restantes):`));
    
    if (palpite === numeroGerado) 
    {
        alert('Parabéns! Você acertou!');
        break;
    }
    
    alert(numeroGerado > palpite ? 'Tente um número MAIOR' : 'Tente um número MENOR');
    tentativas--;
}

if (tentativas === 0) 
{
    alert(`Game over! O número era ${numeroGerado}`);
}
