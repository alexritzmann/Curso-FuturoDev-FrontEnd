
let obj = new Object();

obj.nome = "Pedro";
obj.idade = 30;
obj.email = "pedro@ig.com.br";
obj['email2'] = "pedro2@ig.com.br";

console.log(typeof obj);
console.log(obj);

console.log('Email: ', obj.email);
console.log('Email2: ', obj['email2']);

