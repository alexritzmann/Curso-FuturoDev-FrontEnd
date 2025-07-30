

const varParOuImpar = new Promise ((resolve, reject) => {
    if (a % 2 === 0) {
        resolve('Par');
    }else(a % 2 === 1)
    {
        reject('Impar');
    }
});

async function concluirProcesso() {
    console.log('Processo async await iniciado');
    await sleep(3000);
    console.log('Processo async await concluido depois de 3 segundos');
}

concluirProcesso();

console.log('"...executando outras coisas..."');

