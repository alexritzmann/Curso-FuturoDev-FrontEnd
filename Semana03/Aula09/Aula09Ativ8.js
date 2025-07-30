
let senha = 1234;
let senhaDigitada;

do {
    senhaDigitada = Number(prompt('Digite sua senha: '));
} while (senhaDigitada !== senha);

console.log('Acesso liberado!');
