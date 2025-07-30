

const tarefaDigitada = document.getElementById('tarefa');
const adicionar = document.getElementById('adicionar');
const listaDeTarefas = document.getElementById('lista');
const listaDeTarefasRealizadas = document.getElementById('lista-tarefas-realizadas');
let listagemDasTarefas = [];
let listagemDasTarefasRealizadas = [];


if (localStorage.getItem('tarefas')) 
{
  listagemDasTarefas = JSON.parse(localStorage.getItem('tarefas'));
  listagemDasTarefas.forEach(tarefa => 
  {
    adicionarTarefaDOM(tarefa, false);
  });
}

if (localStorage.getItem('tarefasRealizadas')) 
{
  listagemDasTarefasRealizadas = JSON.parse(localStorage.getItem('tarefasRealizadas'));
  listagemDasTarefasRealizadas.forEach(tarefa => 
  {
    adicionarTarefaDOM(tarefa, true);
  });
}


function adicionarTarefaDOM(textoTarefa, concluida) 
{
  const novaTarefa = document.createElement('li');

  const nomeTarefa = document.createElement('span'); 
  nomeTarefa.textContent = textoTarefa;

  const espacamento = document.createElement('span');
  espacamento.textContent = ' - ';
  
  const botaoExcluir = document.createElement('button');
  botaoExcluir.textContent = 'Excluir';

  const espacamento2 = document.createElement('span');
  espacamento2.textContent = ' - ';
  
  const checkboxTarefa = document.createElement('input');
  checkboxTarefa.type = 'checkbox';
  checkboxTarefa.checked = concluida;
  
  const checkboxLabel = document.createElement('label');
  checkboxLabel.textContent = 'Realizada';


  checkboxTarefa.addEventListener('change', () => 
  {
    if (checkboxTarefa.checked) 
    {
      listaDeTarefas.removeChild(novaTarefa);
      listaDeTarefasRealizadas.appendChild(novaTarefa);
      
      listagemDasTarefas = listagemDasTarefas.filter(t => t !== textoTarefa);
      listagemDasTarefasRealizadas.push(textoTarefa);
    }else
    {
      listaDeTarefasRealizadas.removeChild(novaTarefa);
      listaDeTarefas.appendChild(novaTarefa);
      
      listagemDasTarefasRealizadas = listagemDasTarefasRealizadas.filter(t => t !== textoTarefa);
      listagemDasTarefas.push(textoTarefa);
    }
    
    localStorage.setItem('tarefas', JSON.stringify(listagemDasTarefas));
    localStorage.setItem('tarefasRealizadas', JSON.stringify(listagemDasTarefasRealizadas));
  });

  botaoExcluir.addEventListener('click', () => 
  {
    if (novaTarefa.parentNode === listaDeTarefas) 
    {
      listaDeTarefas.removeChild(novaTarefa);
    }else
    {
      listaDeTarefasRealizadas.removeChild(novaTarefa);
    }
    
    listagemDasTarefas = listagemDasTarefas.filter(t => t !== textoTarefa);
    listagemDasTarefasRealizadas = listagemDasTarefasRealizadas.filter(t => t !== textoTarefa);
    
    localStorage.setItem('tarefas', JSON.stringify(listagemDasTarefas));
    localStorage.setItem('tarefasRealizadas', JSON.stringify(listagemDasTarefasRealizadas));
    
    if (listagemDasTarefas.length === 0 && listagemDasTarefasRealizadas.length === 0) 
    {
      localStorage.removeItem('tarefas');
      localStorage.removeItem('tarefasRealizadas');
    }
  });


  novaTarefa.appendChild(nomeTarefa);
  novaTarefa.appendChild(espacamento);
  novaTarefa.appendChild(botaoExcluir);
  novaTarefa.appendChild(espacamento2);
  novaTarefa.appendChild(checkboxTarefa);
  novaTarefa.appendChild(checkboxLabel);


  if(concluida)
  {
    listaDeTarefasRealizadas.appendChild(novaTarefa);
  }else
  {
    listaDeTarefas.appendChild(novaTarefa);
  }
}

adicionar.addEventListener('click', () => 
{
  const textoTarefa = tarefaDigitada.value.trim();
  
  if (!textoTarefa) 
  {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const todasTarefas = [...listagemDasTarefas, ...listagemDasTarefasRealizadas];
  if (todasTarefas.some(t => t.toLowerCase() === textoTarefa.toLowerCase())) 
  {
    alert('Tarefa já cadastrada.');
    return;
  }

  listagemDasTarefas.push(textoTarefa);
  adicionarTarefaDOM(textoTarefa, false);
  
  localStorage.setItem('tarefas', JSON.stringify(listagemDasTarefas));

  tarefaDigitada.value = '';
});
