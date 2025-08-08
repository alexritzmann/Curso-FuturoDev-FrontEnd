
import './ItemCardapio.css' 


function ItemCardapio ({product}){
    
    function salvarProdutoCarrinho() {
    let meuCarrinhoAtualNoLocalStorage = localStorage.getItem("@carrinho");

    meuCarrinhoAtualNoLocalStorage = !meuCarrinhoAtualNoLocalStorage
      ? []
      : JSON.parse(meuCarrinhoAtualNoLocalStorage);

    meuCarrinhoAtualNoLocalStorage.push(product);

    localStorage.setItem(
      "@carrinho",
      JSON.stringify(meuCarrinhoAtualNoLocalStorage)
    );
  }
    
    return (
        <article className='cardapio-item'>
            <h3>{product.nameEmpada}</h3>
            <p>{product.descriptionEmpada}</p>
            <span><strong>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.priceEmpada)}</strong></span>
            <div>
            <button type="button" id="btn-enviar" class="btn" onClick={salvarProdutoCarrinho}>
                <i class="fab fa-whatsapp"></i> Adicionar no carrinho
            </button>
            </div>
        </article>

    )
}

export default ItemCardapio
