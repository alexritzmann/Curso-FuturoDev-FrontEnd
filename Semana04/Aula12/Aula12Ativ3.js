
let carro = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2020,
    descricao: function(){
        return 'Carro: ' + this.marca + ' ' + this.modelo + ' ' + this.ano;
    }
};

console.log(carro.descricao());
console.log('1');

console.log(carro.descricao.call({marca: 'Ford', modelo: 'Fiesta', ano: 2019}));
console.log('2');

let carro3 = carro.descricao.apply({marca: 'GM', modelo: 'Malibu', ano: 2002});
console.log(carro3);
console.log('3');

let carro2 = carro.descricao.bind({marca: 'Ford', modelo: 'Ka', ano: 2019});
console.log(carro2());
console.log('4');


let carro5 = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2020,
    descricao: function(){
        console.log('Carro: ' + this.marca + ' ' + this.modelo + ' ' + this.ano);
    }
};

carro5.descricao();