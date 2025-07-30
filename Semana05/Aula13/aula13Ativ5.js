
const tituloInformado = prompt('Digite um título:');
const titulo = document.createElement('h1');
titulo.textContent = tituloInformado;
document.getElementById('tituloParagrafo').appendChild(titulo);

/*
const paragrafo1Informado = prompt('Digite o primeiro parágrafo:');
const paragrafo1 = document.createElement('p');
paragrafo1.textContent = paragrafo1Informado;
document.getElementById('tituloParagrafo').appendChild(paragrafo1);


const paragrafo2Informado = prompt('Digite o segundo parágrafo:');
const paragrafo2 = document.createElement('p');
paragrafo2.textContent = paragrafo2Informado;
document.getElementById('tituloParagrafo').appendChild(paragrafo2);


const paragrafo3Informado = prompt('Digite o terceiro parágrafo:');
const paragrafo3 = document.createElement('p');
paragrafo3.textContent = paragrafo3Informado;
document.getElementById('tituloParagrafo').appendChild(paragrafo3);
*/

for (let i = 0; i < 3; i++) 
{
    const posicao = i === 0 ? 'primeiro' : i === 1 ? 'segundo' : 'terceiro';
    const paragrafo = document.createElement('p');
    paragrafo.textContent = prompt(`Digite o ${posicao} parágrafo:`);
    document.getElementById('tituloParagrafo').appendChild(paragrafo);
}
