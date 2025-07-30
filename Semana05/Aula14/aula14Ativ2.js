
const btnCurtir = document.createElement('button');
btnCurtir.textContent = 'Curtir';

document.getElementById('botao-curtir').appendChild(btnCurtir);


btnCurtir.addEventListener('click', () => 
{
    if (btnCurtir.textContent === 'Curtir') 
    {
        btnCurtir.textContent = 'Curtido';
    } else 
    {
        btnCurtir.textContent = 'Curtir';
    }
});
