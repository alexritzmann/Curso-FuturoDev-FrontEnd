
const tarefaDigitada = document.getElementById('tarefa');
const adicionar = document.getElementById('adicionar');
const listaDeTarefas = document.getElementById('lista');
let listagemDasTarefas = [];


if (localStorage.getItem('tarefas')) 
{
  listagemDasTarefas = JSON.parse(localStorage.getItem('tarefas'));
  listagemDasTarefas.forEach(tarefa => 
  {
    adicionarTarefaDOM(tarefa);
  });
}

function adicionarTarefaDOM(textoTarefa) 
{
  const novaTarefa = document.createElement('li');
  novaTarefa.textContent = textoTarefa + " - ";
  
  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Excluir';
  novaTarefa.appendChild(botaoExcluir);

  botaoExcluir.addEventListener('click', () => 
  {
    listaDeTarefas.removeChild(novaTarefa);
    listagemDasTarefas = listagemDasTarefas.filter(t => t !== textoTarefa);
    localStorage.setItem('tarefas', JSON.stringify(listagemDasTarefas));
    if (listagemDasTarefas.length === 0)
    {
      localStorage.clear();
    }
  });

  listaDeTarefas.appendChild(novaTarefa);
}

adicionar.addEventListener('click', () => 
{
  const textoTarefa = tarefaDigitada.value.trim();
  
  if (!textoTarefa) 
  {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  if (listagemDasTarefas.some(t => t.toLowerCase() === textoTarefa.toLowerCase())) 
  {
    alert('Tarefa já cadastrada.');
    return;
  }

  listagemDasTarefas.push(textoTarefa);
  adicionarTarefaDOM(textoTarefa);
  
  localStorage.setItem('tarefas', JSON.stringify(listagemDasTarefas));

  tarefaDigitada.value = '';
});

