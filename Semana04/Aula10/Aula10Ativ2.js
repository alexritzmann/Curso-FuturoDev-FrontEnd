const listaDeItens = [];
let item;

do{
    item = prompt("Digite o item para adicionar na sua lista: (digite 'sair' para finalizar)")
    if (item.toLowerCase() === 'sair') 
    {
        break;
    }

    listaDeItens.unshift(item); // adiciona no início da lista
    if(listaDeItens.length>5)
    {
        listaDeItens.pop(); // remove o último elemento do array
    }
}while (true);

console.log(listaDeItens);
