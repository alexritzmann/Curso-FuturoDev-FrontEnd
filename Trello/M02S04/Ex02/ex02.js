
const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];

vendas.forEach(item => {console.log(item);});

let totalVendas = vendas.reduce((total, item) => total + item.valor, 0);
console.log(totalVendas);

//ou

let totalVendasComFor = 0;
for (let i = 0; i < vendas.length; i++) {
  totalVendasComFor += vendas[i].valor;
}
console.log(totalVendasComFor);
