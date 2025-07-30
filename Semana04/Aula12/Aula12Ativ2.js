
let usuario = {nome: 'Alex', dn: '01/01/1986', sexo: 'M'};


let contador = 0;

for(let quantidadeDeAtributos in usuarios)
{
    contador += 1;
    console.log('Atributo: ', quantidadeDeAtributos);
};

console.log('Quantidade de atributos: ', contador);
