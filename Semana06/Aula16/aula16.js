

const btnConsole = document.getElementById('console');

btnConsole.addEventListener('click', () => {
    console.log('Mensagem de Log');
    console.info('Mensagem de Info');
    console.error('Mensagem de Error');
    console.warn('Mensagem de Warn');
});


const btnRecarregar = document.getElementById('recarregar');
const btnVoltar = document.getElementById('voltar');
const btnAvancar = document.getElementById('avançar');

btnRecarregar.addEventListener('click', () => {
    navigation.reload();
});

btnVoltar.addEventListener('click', () => {
    navigation.back();
});

btnAvancar.addEventListener('click', () => {
    navigation.forward();
});


const btnSetSessionStorage = document.getElementById('setSessionStorage');
const btnSetLocalStorage = document.getElementById('setLocalStorage');
const btnGetSessionStorage = document.getElementById('getSessionStorage');
const btnGetLocalStorage = document.getElementById('getLocalStorage');

btnSetLocalStorage.addEventListener('click', () => {
    localStorage.setItem('chave', 'valor'); //sempre condição de chave valor
});

btnSetSessionStorage.addEventListener('click', () => {
    sessionStorage.setItem('chave', true); //sempre condição de chave valor
});

btnGetLocalStorage.addEventListener('click', () => {
    console.log(localStorage.getItem('chave')); // busca pela chave e sempre retorno string
});

btnGetSessionStorage.addEventListener('click', () => {
    console.log(sessionStorage.getItem('chave')); // busca pela chave e sempre retorno string
});

const btnSetSessionStorageLista = document.getElementById('setSessionStorageLista');
const btnSetLocalStorageObjeto = document.getElementById('setLocalStorageObjeto');
const btnGetSessionStorageLista = document.getElementById('getSessionStorageLista');
const btnGetLocalStorageObjeto = document.getElementById('getLocalStorageObjeto');

//USAR STRINGIFY PARA CONVERTER OBJETO/LISTA EM STRING (JSON)

btnSetSessionStorageLista.addEventListener('click', () => {
    sessionStorage.setItem('lista', JSON.stringify(['item1', 'item2', 'item3']));
});

btnSetLocalStorageObjeto.addEventListener('click', () => {
    localStorage.setItem('objeto', JSON.stringify({chave: 'valor', chave2: 'valor2', chave3: 'valor3'})); 
});

//USAR PARSE PARA CONVERTER STRING EM OBJETO/LISTA (JSON)

btnGetSessionStorageLista.addEventListener('click', () => {
    console.log(JSON.parse(sessionStorage.getItem('lista'))); 
});

btnGetLocalStorageObjeto.addEventListener('click', () => {
    console.log(JSON.parse(localStorage.getItem('objeto')));
});


const btnConfirm = document.getElementById('confirm');
const btnAlert = document.getElementById('alert');

btnConfirm.addEventListener('click', () => {
    if(window.confirm("Deseja confirmar?"))
    {
        console.log('Usuário confirmou');
    }else
    {
        console.log('Usuário cancelou');
    }
});

btnAlert.addEventListener('click', () => {
    alert('Mensagem de Alerta');
});

//setTimeout - (DELAY) executa uma funcao depois de um determinado tempo 
//setInterval - executa uma funcao durante um determinado intervalo de tempo

const btnSetTimeout = document.getElementById('setTimeout');
const btnSetInterval = document.getElementById('setInterval');
const btnPararSetInterval = document.getElementById('pararSetInterval');

btnSetTimeout.onclick = () => {
    setTimeout(() => {
        console.log('setTimeout executado depois de 3 segundos');
    }, 3000);

    console.log('setTimeout será executado daqui 3 segundos');
};

let intervalo;
btnSetInterval.onclick = () => {
    let i = 0;
    intervalo = setInterval(() => {
        console.log(i +' setInterval executando a cada 0.5 segundos');
        i++;
    }, 500);

    //setTimeout para parar o setInterval
    setTimeout(() => {
        clearInterval(intervalo); // clearInterval para parar o setInterval
    }, 10000); // vai parar em 10 segundos
};

btnPararSetInterval.onclick = () => {
    clearInterval(intervalo); // clearInterval para parar o setInterval
};

