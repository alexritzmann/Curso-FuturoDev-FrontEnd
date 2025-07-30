

const itemTabela = document.querySelector('#corpoTabela');
const totalNovos = document.querySelector('#totalNovos');
const totalUsados = document.querySelector('#totalUsados');
const btnAlterarTema = document.querySelector('#botao-tema');


const temaSalvo = localStorage.getItem('temaEscuro');
const listaCelulares = JSON.parse(localStorage.getItem('listaCelulares')) || [];


let totalCelularesNovos = 0;
let totalCelularesUsados = 0;


if (temaSalvo === 'true') 
{
  document.body.classList.add('tema-escuro');
  btnAlterarTema.textContent = 'Tema Claro';
}

listaCelulares.forEach(celular => 
{
  const novaLinha = document.createElement('tr');
  const marcaCelular = document.createElement('td');
  marcaCelular.textContent = celular.marca;
  const modeloCelular = document.createElement('td');
  modeloCelular.textContent = celular.modelo;
  const corCelular = document.createElement('td');
  corCelular.textContent = celular.cor;
  const valorCelular = document.createElement('td');
  valorCelular.textContent = celular.valor;
  const estadoCelular = document.createElement('td');
  estadoCelular.textContent = celular.estado;
  const descricaoCelular = document.createElement('td');
  descricaoCelular.textContent = celular.descricao;
  const acao = document.createElement('td');
  const botoes = document.createElement('div');
  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Excluir';
  botaoExcluir.className = 'botaoAcao';
  const botaoAlterar = document.createElement('button');
  botaoAlterar.textContent = 'Alterar';
  botaoAlterar.className = 'botaoAcao';


  botoes.appendChild(botaoExcluir);
  botoes.appendChild(botaoAlterar);
  acao.appendChild(botoes);
  

  botaoAlterar.addEventListener('click', () => 
  {
    localStorage.setItem('celularEditando', JSON.stringify(celular));
    window.location.href = '../Ex03/ex03.html';
  });

  botaoExcluir.addEventListener('click', () => 
  {
    itemTabela.removeChild(novaLinha);
    listaCelulares.splice(listaCelulares.indexOf(celular), 1);
    localStorage.setItem('listaCelulares', JSON.stringify(listaCelulares));
    if (celular.estado === 'novo')
    {
      totalCelularesNovos -= 1;
    }
    else 
    {
      totalCelularesUsados -= 1;
    }
    if (listaCelulares.length === 0)
    {
      localStorage.clear();
    }
    totalNovos.textContent = ("Total de Celulares Novos: " + totalCelularesNovos);
    totalUsados.textContent = ("Total de Celulares Usados: " + totalCelularesUsados);
  });

  if (celular.estado === 'novo')
  {
    totalCelularesNovos += 1;
  }
  else 
  {
    totalCelularesUsados += 1;
  }


  novaLinha.appendChild(marcaCelular);
  novaLinha.appendChild(modeloCelular);
  novaLinha.appendChild(corCelular);
  novaLinha.appendChild(valorCelular);
  novaLinha.appendChild(estadoCelular);
  novaLinha.appendChild(descricaoCelular);
  novaLinha.appendChild(acao);
  itemTabela.appendChild(novaLinha);

});

totalNovos.textContent = ("Total de Celulares Novos: " + totalCelularesNovos);
totalUsados.textContent = ("Total de Celulares Usados: " + totalCelularesUsados);

btnAlterarTema.addEventListener('click', () => 
{
  document.body.classList.toggle('tema-escuro');
  const temaEscuroAtivo = document.body.classList.contains('tema-escuro');
  btnAlterarTema.textContent = temaEscuroAtivo ? 'Tema Claro' : 'Tema Escuro';

  localStorage.setItem('temaEscuro', temaEscuroAtivo);
});
