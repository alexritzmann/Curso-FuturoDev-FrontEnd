
const titulo = document.getElementById('titulo');
const corpo = document.getElementById('corpo');
const form = document.getElementById('form');

function salvar(event) 
{
    event.preventDefault(); 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titulo.value,
            body: corpo.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        window.alert('Post criado com sucesso!');
    });
}

form.addEventListener('submit', salvar);