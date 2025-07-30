
let alunos = [
    {nome: 'Pedro', turma: 'A', nota: 8},
    {nome: 'João', turma: 'B', nota: 7},
    {nome: 'Maria', turma: 'C', nota: 9},
    {nome: 'Ana', turma: 'D', nota: 6},
    {nome: 'Joana', turma: 'E', nota: 10}
]

for (let atributos in alunos) {
    console.log('Atributo: ', atributos);
    console.log('Valor: ', alunos[atributos]);
}
console.log('');
console.log('');
console.log('');

let aluno =
    {nome: 'Pedro', turma: 'A', nota: 8};

for (let atributo in aluno) {
    console.log('Atributo: ', atributo);
}
