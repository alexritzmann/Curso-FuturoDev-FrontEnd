const a = prompt('Digite a nota da prova do aluno:');

if (Number(a) < 6 && Number(a) >= 0) {
    if (+a >= 5.5){
        console.log('E+')
    }else 
    console.log('E');
}else  if (Number(a) < 7 && Number(a) >= 6) {
    if (+a >= 6.5){
        console.log('D+')
    }else
    console.log('D');
}else  if (Number(a) < 8 && Number(a) >= 7) {
    if (+a >= 7.5){
        console.log('C+')
    }else
    console.log('C');
}else  if (Number(a) < 9 && Number(a) >= 8) {
    if (+a >= 8.5){
        console.log('B+')
    }else
    console.log('B');
}else  if (Number(a) <= 10 && Number(a) >= 9) {
    if (+a >= 9.5){
        console.log('A+')
    }else
    console.log('A');
}else {
    console.log('Ops, algo deu errado');
}
