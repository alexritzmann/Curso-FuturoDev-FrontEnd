/*
const usuarios = [];
function iniciarCadastro() {
    while (true) {
        const nomeUsuario = prompt('Digite o nome do usuário:');
        const telefone = prompt('Digite o telefone do usuário:');
        const email = prompt('Digite o email do usuário:');
        const perfil = prompt('Digite o perfil do usuário:');

        if (!nomeUsuario || !telefone || !email || !perfil) break;

        usuarios.push({ nomeUsuario, telefone, email, perfil });

        const continuar = prompt('Deseja cadastrar outro usuário? (digite "nao" para parar)');
        if (continuar?.toLowerCase() === "nao") break;
    }
    cadastrarUsuario();
}


function cadastrarUsuario() 
{
    const container = document.getElementById('corpoTabela');
    container.innerHTML = '';
    
    usuarios.forEach(user => 
    {
        const linha = document.createElement('tr');
        linha.className = 'linhaTabela';
        
        const celNome = document.createElement('td');
        celNome.textContent = user.nomeUsuario;

        const celTelefone = document.createElement('td');
        celTelefone.textContent = user.telefone;
        
        const celEmail = document.createElement('td');
        celEmail.textContent = user.email;
        
        const celPerfil = document.createElement('td');
        celPerfil.textContent = user.perfil;
        
        const celAcao = document.createElement('td');
        
        const btnAlterar = document.createElement('button');
        btnAlterar.textContent = 'Alterar';
        
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';

        celAcao.append(btnAlterar, btnExcluir);
        
        linha.append(celNome, celTelefone, celEmail, celPerfil, celAcao);
        container.appendChild(linha);

    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btnIniciar = document.createElement('button');
    btnIniciar.textContent = 'Iniciar Cadastro';
    btnIniciar.id = 'btnIniciar';
    btnIniciar.style.margin = '10px';
    
    document.querySelector('h1').insertAdjacentElement('afterend', btnIniciar);
    
    btnIniciar.addEventListener('click', iniciarCadastro);
});
*/

/*------------OUTRA FORMA------------*/

/*
let continuar = "";
do{

    const nome = prompt('Digite o nome do usuário:');
    const telefone = prompt('Digite o telefone do usuário:');
    const email = prompt('Digite o email do usuário:');
    const perfil = prompt('Digite o perfil do usuário:');

    const tableBody = document.getElementById('corpoTabela');

    const tr = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.innerText = nome;

    const tdTelefone = document.createElement('td');
    tdTelefone.innerText = telefone;

    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;

    const tdPerfil = document.createElement('td');
    tdPerfil.innerText = perfil;

    const tdAcoes = document.createElement('td');
    const btnAlterar = document.createElement('button');
    btnAlterar.innerText = 'Alterar';
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';

    tdAcoes.appendChild(btnAlterar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdNome);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPerfil);
    tr.appendChild(tdAcoes);

    tableBody.appendChild(tr);

    continuar = prompt('Digite sair case deseje parar');

}while(continuar.toLocaleLowerCase() !== 'sair');
*/

/*------------OUTRA FORMA------------*/



let continuar = "";
do{

    const nome = prompt('Digite o nome do usuário:');
    const telefone = prompt('Digite o telefone do usuário:');
    const email = prompt('Digite o email do usuário:');
    const perfil = prompt('Digite o perfil do usuário:');

    const tableBody = document.getElementById('corpoTabela');

    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>${email}</td>
        <td>${perfil}</td>
        <td>
            <button>Alterar</button>
            <button>Excluir</button>
        </td>
    `;

    tableBody.appendChild(tr);

    continuar = prompt('Digite sair case deseje parar');

}while(continuar.toLocaleLowerCase() !== 'sair');