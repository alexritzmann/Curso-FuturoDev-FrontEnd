

// NÃO LEMBRO SE TERMINEI ISSO... ANTES DE USAR, VERIFICAR. 


const nome = document.getElementById('nome');
const email = document.getElementById('email');
const perfil = document.getElementById('perfil');
const botaoCadastrar = document.getElementById('botao-cadastro');
const botaoLimpar = document.getElementById('botao-limpa');
const tbody = document.getElementById('tbody');
const senha = document.getElementById('senha');

const listaUsuarios = [];

function atualizarBotao() 
{
    const camposPreenchidos = nome.value.trim() !== "" && email.value.trim() !== "" && email.value.trim() !== "";
    botaoCadastrar.disabled = !camposPreenchidos;
    botaoCadastrar.style.backgroundColor = camposPreenchidos ? 'green' : 'gray';
    botaoCadastrar.style.cursor = camposPreenchidos ? 'pointer' : 'not-allowed';
}

function limparCampos() 
{
    nome.value = '';
    email.value = '';
    senha.value = '';
    perfil.value = 'ADM';
    atualizarBotao();
}

document.querySelector('form').addEventListener('submit', (e) => 
{
    e.preventDefault();
});

botaoCadastrar.addEventListener('click', () => 
{
    const novoUsuario = 
    {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        perfil: perfil.value
    };
    
    listaUsuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
    
    tbody.innerHTML = listaUsuarios.map(usuario => `
        <tr>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.perfil}</td>
            <td>
                <button class="botaoAcao">Alterar</button>
                <button class="botaoAcao">Excluir</button>
            </td>
        </tr>
    `).join('');
    
    limparCampos();
});

atualizarBotao();
nome.addEventListener('input', atualizarBotao);
email.addEventListener('input', atualizarBotao);
botaoLimpar.addEventListener('click', limparCampos);
