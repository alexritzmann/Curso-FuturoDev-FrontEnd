

// NÃO USAR DESSA FORMA...

function concluida3segundos() {
    setTimeout(() => {
        console.log('Concluida após 3 segundos');
    }, 3000);
}

async function executar() {
    console.log('Iniciando...');
    concluida3segundos();
    console.log('Fim...');
}

executar();

console.log('"...executando outras coisas..."');

