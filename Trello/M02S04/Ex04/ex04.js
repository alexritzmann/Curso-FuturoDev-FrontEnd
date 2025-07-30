
const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};

let dadosAtualizados = new Object();

for (let naoNulos in dados) {
  if (dados[naoNulos] !== null && dados[naoNulos] !== undefined) {
    dadosAtualizados[naoNulos] = dados[naoNulos];
  }
}

console.log(dadosAtualizados);
