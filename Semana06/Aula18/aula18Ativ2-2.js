

const imagemUsuario = document.getElementById('imagem-usuario');
const nomeUsuario = document.getElementById('nome-usuario');
const emailUsuario = document.getElementById('email-usuario');
const celularUsuario = document.getElementById('celular-usuario');

function buscarUsuario()
{
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(body => {
        imagemUsuario.src = body.results[0].picture.large;
        nomeUsuario.innerText = body.results[0].name.first;
        emailUsuario.innerText = body.results[0].email;
        celularUsuario.innerText = body.results[0].phone;
    });
    
}


buscarUsuario();