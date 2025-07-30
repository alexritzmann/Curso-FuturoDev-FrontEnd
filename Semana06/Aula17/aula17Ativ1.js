
const varPromise = new Promise ((resolve, reject) => {
    //.. implementação
    resolve('Deu tudo ok');
    //.. implementação
    reject('Não deu ok');
});


// a funcao promisse (then e catch), está recebendo  o resultado do resolve ou reject
function funcaoPromisse()
{
    varPromise
    .then((result) => {
        console.log('funcaoPromisse: ',result);
    })
    .catch((error) => {
        console.log('funcaoPromisse: ',error);
    })
    .finally(() => {
        console.log('funcaoPromisse: ', 'finally');
    });
}

funcaoPromisse();


async function exemploAsyncAwait() // queremos exibir o resultado da Promise
{
    const msg =  await varPromise;
    console.log('exemploAsyncAwait: ',msg);
}

exemploAsyncAwait();
