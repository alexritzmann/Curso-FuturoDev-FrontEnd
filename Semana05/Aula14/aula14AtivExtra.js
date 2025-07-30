
const btnAlterarCorBody = document.createElement('button');
btnAlterarCorBody.textContent = 'Alterar Cor do Body';

document.getElementById('botaoAlterarCor').appendChild(btnAlterarCorBody);


btnAlterarCorBody.addEventListener('click', () => {
    document.body.classList.toggle('fundo-vermelho');
    
    if (document.body.classList.contains('fundo-vermelho')) {
        btnAlterarCorBody.textContent = 'Voltar Cor original do Body';
    } else {
        btnAlterarCorBody.textContent = 'Alterar Cor do Body';
    }
});
