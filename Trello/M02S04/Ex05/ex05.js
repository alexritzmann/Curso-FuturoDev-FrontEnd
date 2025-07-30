
function filtroDinamico (listaASerFiltrada, propriedadeDaLista, valorDaPropriedade) 
{
    return listaASerFiltrada.filter(item => item[propriedadeDaLista] === valorDaPropriedade);
}

const produtos = 
[
    { nome: "Notebook", estoque: 4 },
    { nome: "Monitor", estoque: 0 },
    { nome: "Teclado", estoque: 2 },
    { nome: "Mouse", estoque: 0 },
    { nome: "Impressora", estoque: 1 },
    { nome: "Caixa de Som", estoque: 0 },
    { nome: "Fonte", estoque: 1 },
    { nome: "Cabo HDMI", estoque: 0 }
];

const produtosFiltrados = filtroDinamico(produtos, "estoque", 0);

console.log(produtosFiltrados);
