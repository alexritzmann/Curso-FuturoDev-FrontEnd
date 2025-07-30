
let alunos = [
    {nome: 'Pedro', turma: 'A', nota: 8},
    {nome: 'João', turma: 'B', nota: 7},
    {nome: 'Maria', turma: 'C', nota: 9},
    {nome: 'Ana', turma: 'D', nota: 6},
    {nome: 'Joana', turma: 'E', nota: 10}
]

alunos.forEach(aluno => aluno.nota >= 7 ? aluno.aprovado = true : aluno.aprovado = false);

console.log(alunos);

