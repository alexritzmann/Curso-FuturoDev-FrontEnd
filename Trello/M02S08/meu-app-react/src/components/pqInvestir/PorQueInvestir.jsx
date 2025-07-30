
import './PorQueInvestir.css'

function PorQueInvestir({title = "Título padrão", descripition = "Descrição padrão"}) {
  

  return (
    <>
        <article id='article-pq-investir'>
                <h3 id='title-pq-investir'>{title}</h3>
                <p id='descripition-pq-investir'>{descripition}</p>
        </article>
        
    </>
  )
}

export default PorQueInvestir
