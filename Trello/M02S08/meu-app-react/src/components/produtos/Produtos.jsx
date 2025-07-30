
import './Produtos.css'

function Produtos({name = "nome do produto", imagem = "imagem do produto", descripition = "Descrição do produto"}) {
  

  return (
    <>
    <article id='article-produtos'>
        <div className='img-produto'>
            <img src={imagem} alt="imagem do produto "/>
        </div>
        
        <div className='text-produto'>
            <h3>{name}</h3>
            <p>{descripition}</p>
        </div>
    </article>
    </>
  )
}

export default Produtos
