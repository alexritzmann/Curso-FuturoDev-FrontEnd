
let objeto = new Object();

objeto.valor = 0;

objeto.incrementar = function () 
{
    this.valor++;
};

objeto.decrementar = function () 
{
    this.valor--;
};

objeto.mostrarValor = function () 
{
    console.log(`O valor atual é ${this.valor}`);
};

objeto.incrementar();
objeto.incrementar();
objeto.incrementar();
objeto.decrementar();
objeto.mostrarValor();
