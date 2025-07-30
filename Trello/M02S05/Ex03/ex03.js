
const tarefaDigitada = document.getElementById('tarefa');
const adicionar = document.getElementById('adicionar');
const listaDeTarefas = document.getElementById('lista');

adicionar.addEventListener('click', () => {
  const novaTarefa = document.createElement('li');
  novaTarefa.textContent = tarefaDigitada.value;
  listaDeTarefas.appendChild(novaTarefa);

  tarefaDigitada.value = '';
});
