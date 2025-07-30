

import './Orcamento.css'

function Orcamento() {
  

  return (
    <>
        <div className='container-form'>
            <form className='formulario-orcamento'>
                <input type="text" id="name" placeholder='Seu nome'/>
                <input type="email" id="email" placeholder='Seu e-mail'/>
                <input type="fone" id="telefone" placeholder='Telefone'/>
                <input type="text" id="system" placeholder='Tipo de sistema'/>
                <textarea name="message" id="message" placeholder='Descreva seu projeto (área, localização...)'></textarea>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
        
    </>
  )
}

export default Orcamento
