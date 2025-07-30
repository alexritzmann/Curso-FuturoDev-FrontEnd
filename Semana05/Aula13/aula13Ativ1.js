

document.addEventListener('DOMContentLoaded', () => 
{
    const titulo = document.getElementById('titulo');
    console.log('Título (por ID):', titulo);

    const tagsP = document.getElementsByTagName('p');
    console.log('Elementos P (por tag):', tagsP);

    const paragrafos = document.getElementsByClassName('paragrafo');
    console.log('Parágrafos (por classe):', paragrafos);

    const pParagrafo = document.querySelectorAll('p.paragrafo');
    console.log('Parágrafos (querySelectorAll):', pParagrafo);
});

