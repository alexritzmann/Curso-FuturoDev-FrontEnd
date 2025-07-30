let cobra = [{x:10,y:10}];
let comida = gerarComida();
let direcao = 'DIREITA';
let velocidade = 150;
let pontos = 0;
let intervalo;

function iniciarJogo(){
    criarTabuleiro();
    document.addEventListener('keydown', mudarDirecao);
    intervalo = setInterval(moverCobra, velocidade);
    document.getElementById('score').textContent = pontos;
}

function criarTabuleiro(){
    const tabuleiro = document.getElementById('gameBoard');
    tabuleiro.innerHTML = '';

    cobra.forEach((segmento) => {
        const elemento = document.createElement('div');
        elemento.style.gridRowStart = segmento.y;
        elemento.style.gridColumnStart = segmento.x;
        elemento.classList.add('snake');
        tabuleiro.appendChild(elemento);
    });

    const elementoComida = document.createElement('div');
    elementoComida.style.gridRowStart = comida.y;
    elementoComida.style.gridColumnStart = comida.x;
    elementoComida.classList.add('food');
    tabuleiro.appendChild(elementoComida);
}

function gerarComida(){
    let novaComida;
    while(!novaComida || posicaoOcupada(novaComida)){
        novaComida = {
            x: Math.floor(Math.random() * 20) + 1,
            y: Math.floor(Math.random() * 20) + 1
        }
    }
    return novaComida;
}

function posicaoOcupada(posicao){
    return cobra.some((segmento) => segmento.x === posicao.x && segmento.y === posicao.y);
}

function mudarDirecao(evento){
    switch(evento.key){
        case 'ArrowRight':
            if(direcao !== 'ESQUERDA') direcao = 'DIREITA';
            break;
        case 'ArrowLeft':
            if(direcao !== 'DIREITA') direcao = 'ESQUERDA';
            break;
        case 'ArrowUp':
            if(direcao !== 'BAIXO') direcao = 'CIMA';
            break;
        case 'ArrowDown':
            if(direcao !== 'CIMA') direcao = 'BAIXO';
            break;
    }
}

function fimDeJogo(){
    clearInterval(intervalo);
    alert(`Game Over! Sua pontuação foi: ${pontos}`);
}

function moverCobra() {
    const cabeca = { ...cobra[0] };
    if (direcao === 'DIREITA') cabeca.x += 1;
    if (direcao === 'ESQUERDA') cabeca.x -= 1;
    if (direcao === 'CIMA') cabeca.y -= 1;
    if (direcao === 'BAIXO') cabeca.y += 1;
    
    if (verificarColisao(cabeca)) {
        fimDeJogo();
        return;
    }
    
    cobra.unshift(cabeca);
    
    if (cabeca.x === comida.x && cabeca.y === comida.y) {
        comida = gerarComida();
        pontos += 10;
        // Atualiza o placar na tela
        document.getElementById('score').textContent = pontos;
        velocidade = Math.max(50, velocidade - 10);
        clearInterval(intervalo);
        intervalo = setInterval(moverCobra, velocidade);
    } else {
        cobra.pop();
    }
    criarTabuleiro();
}

function verificarColisao(cabeca){
    if(cabeca.x < 1 || cabeca.x > 20 || cabeca.y < 1 || cabeca.y > 20){
        return true;
    }
    for(let i = 1; i < cobra.length; i++){
        if(cabeca.x === cobra[i].x && cabeca.y === cobra[i].y){
            return true;
        }
    }
    return false;
}

iniciarJogo();
