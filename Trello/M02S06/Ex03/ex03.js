

const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const cor = document.querySelector('#cor');
const valor = document.querySelector('#valor');
const estadoRadios = document.querySelectorAll('input[name="estado"]');
const descricao = document.querySelector('#descricao');
const botaoSalvar = document.querySelector('#botao-salvar');
const botaoVoltar = document.querySelector('#botao-voltar');
const formulario = document.querySelector('#form');


let listaCelulares = JSON.parse(localStorage.getItem('listaCelulares')) || [];
const temaEscuro = localStorage.getItem('temaEscuro') === 'true';

if (temaEscuro) 
{
  document.body.classList.add('tema-escuro');
}


let id = 1;
if (listaCelulares.length > 0) 
{
  const ids = listaCelulares.map(celular => celular.id);
  const maiorId = Math.max(...ids);
  id = maiorId + 1;
}


botaoSalvar.disabled = true;
botaoSalvar.style.backgroundColor = 'gray';
botaoSalvar.style.cursor = 'not-allowed';


const celularEditando = JSON.parse(localStorage.getItem('celularEditando'));
if (celularEditando) 
{
  marca.value = celularEditando.marca;
  modelo.value = celularEditando.modelo;
  cor.value = celularEditando.cor;
  valor.value = celularEditando.valor;
  descricao.value = celularEditando.descricao;
  
  estadoRadios.forEach(radio => 
  {
    radio.checked = (radio.value === celularEditando.estado);
  });
  
  id = celularEditando.id;
}

function verificarCampos() 
{
  const estadoSelecionado = Array.from(estadoRadios).some(radio => radio.checked);
  const camposPreenchidos = (
    marca.value.trim() !== "" && 
    modelo.value.trim() !== "" && 
    cor.value.trim() !== "" && 
    valor.value.trim() !== "" && 
    estadoSelecionado
  );
  
  botaoSalvar.disabled = !camposPreenchidos;
  botaoSalvar.style.backgroundColor = camposPreenchidos ? 'green' : 'gray';
  botaoSalvar.style.cursor = camposPreenchidos ? 'pointer' : 'not-allowed';
}


marca.addEventListener('change', verificarCampos);
modelo.addEventListener('input', verificarCampos);
cor.addEventListener('input', verificarCampos);
valor.addEventListener('input', verificarCampos);
estadoRadios.forEach(radio => 
{
  radio.addEventListener('change', verificarCampos);
});


function salvarDados(event) 
{
  event.preventDefault();
  
  const estadoSelecionado = Array.from(estadoRadios).find(radio => radio.checked)?.value || '';
  
  const novoCelular = 
  {
    id: id,
    marca: marca.value,
    modelo: modelo.value,
    cor: cor.value,
    valor: parseFloat(valor.value),
    estado: estadoSelecionado,
    descricao: descricao.value
  };
  
  const index = listaCelulares.findIndex(celular => celular.id === id);
  if (index !== -1) 
  {
    listaCelulares[index] = novoCelular;
  } 
  else 
  {
    id++;
    novoCelular.id = id;
    listaCelulares.push(novoCelular);
  }

  localStorage.setItem('listaCelulares', JSON.stringify(listaCelulares));
  localStorage.removeItem('celularEditando');
  
  window.alert('Dados salvos com sucesso');
  window.location.href = '../Ex06/ex06.html';
}

formulario.addEventListener('submit', salvarDados);
