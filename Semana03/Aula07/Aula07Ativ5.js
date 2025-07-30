const emailUsuario = prompt('Qual seu email?');
console.log(emailUsuario.slice(0, emailUsuario.indexOf('@')));
console.log(emailUsuario.split('@')[0]);

