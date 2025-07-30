const listaDeItens = [];
let item;

do{
    item = prompt("Digite o item para adicionar na sua lista: (digite 'sair' para finalizar)")
    if (item.toLowerCase() === 'sair') 
    {
        break;
    }

    listaDeItens.push(item); // adiciona item no final da lista
    if(listaDeItens.length>5)
    {
        listaDeItens.pop(); // remove do final da lista
    }
}while (true);

console.log(listaDeItens);
