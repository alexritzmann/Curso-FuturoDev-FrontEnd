
const dadosPessoais = { nome: "Lucas", idade: 30 };
const endereco = { cidade: "São Paulo", estado: "SP" };

const pessoa = {...dadosPessoais, ...endereco};

console.log(pessoa);
