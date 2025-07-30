const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

function criarCards() {
    const container = document.getElementById('produtos');
    
    produtos.forEach(produto => 
    {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const titulo = document.createElement('h3');
        titulo.className = 'card-title';
        titulo.textContent = produto.nome;
        
        const preco = document.createElement('p');
        preco.className = 'card-preco';
        preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.textContent = 'Comprar';
        
        cardBody.appendChild(titulo);
        cardBody.appendChild(preco);
        
        card.appendChild(cardBody);
        card.appendChild(btn);
        
        container.appendChild(card);
        
    });
}

document.addEventListener('DOMContentLoaded', criarCards);
