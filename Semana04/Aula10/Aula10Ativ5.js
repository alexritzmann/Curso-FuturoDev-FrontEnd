
let lista = [123, "texto", true, "palavra", 99, "JS"];
let novaLista = [];
for (const item of lista) 
{
    if(isNaN(item))
    {
        novaLista.push(item);
    } 
}
console.log(novaLista);
