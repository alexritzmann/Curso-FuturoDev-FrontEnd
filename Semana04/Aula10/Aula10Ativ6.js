
let dados = [123, "texto", true, "palavra", 99, "JS"];
let novaLista = [];

for(valor of dados)
{
    if(typeof valor === 'string')
    {
        novaLista.push(valor);
    }
}
console.log(novaLista);
