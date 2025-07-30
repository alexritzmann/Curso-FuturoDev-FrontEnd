
function parOuImpar(num)
{
    return new Promise ((resolve, reject) => {
        if (num % 2 === 0) {
            resolve('Par');
        }else
            reject('Impar');
    });
}

function testando()
{
    const num = 13;
    parOuImpar(num)
    .then(valor => console.log(valor))
    .catch(error => console.log(error))
    .finally(() => console.log('número passado foi o ', num));
}

testando();

