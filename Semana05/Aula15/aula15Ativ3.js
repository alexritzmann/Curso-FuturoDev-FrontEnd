

const user = document.getElementById('usuario');
const senha = document.getElementById('senha');
const botaoEntrar = document.getElementById('botao-entrar');


function atualizarBotao() 
{
    if (user.value.trim() === "" || senha.value.trim() === "") 
    {
        botaoEntrar.disabled = true;
        botaoEntrar.style.backgroundColor = 'gray';
        botaoEntrar.style.cursor = 'not-allowed';
    } else {
        botaoEntrar.disabled = false;
        botaoEntrar.style.backgroundColor = 'green';
        botaoEntrar.style.cursor = 'pointer';
    }
}

atualizarBotao();

user.addEventListener('input', atualizarBotao);
senha.addEventListener('input', atualizarBotao);

const botaoMostrar = document.getElementById('botao-mostrar');
const senhaInput = document.getElementById('senha');
botaoMostrar.textContent = 'Mostrar Senha';

botaoMostrar.addEventListener('click', () => {
    if (senhaInput.type === 'password') 
        {
        senhaInput.type = 'text';
        botaoMostrar.textContent = 'Ocultar Senha';
    } else 
    {
        senhaInput.type = 'password';
        botaoMostrar.textContent = 'Mostrar Senha';
    }
});

