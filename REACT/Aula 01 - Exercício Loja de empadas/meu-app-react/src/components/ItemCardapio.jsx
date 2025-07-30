
import './ItemCardapio.css' 


function ItemCardapio ({title = "Título da Receita", descripition = "Descrição da receita", price = "0,00"}){
    return (
        <article className='cardapio-item'>
            <h3>{title}</h3>
            <p>{descripition}</p>
            <span><strong>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}</strong></span>
            <div>
            <button type="button" id="btn-enviar" class="btn">
                <i class="fab fa-whatsapp"></i> Pedir no Whatsapp
            </button>
            </div>
        </article>

    )
}

export default ItemCardapio
