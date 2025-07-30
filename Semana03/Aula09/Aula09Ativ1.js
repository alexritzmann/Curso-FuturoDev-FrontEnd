const a = prompt('Digite o conceito do aluno:');

switch (a) {
    case 'A':
    case 'a':
        console.log('Excelente');
        break;
    case 'B':
    case 'b':
        console.log('Muito Bom');
        break;
    case 'C':
    case 'c':
        console.log('Bom');
        break;
    case 'D':
    case 'd':
        console.log('Regular');
        break;
    case 'E':
    case 'e':
        console.log('Insuficiente');
        break;
    default:
        console.log('Ops, algo deu errado');
        break;
}
