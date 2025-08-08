

import './Contato.css' 

function Contato (){

    return (
    <footer className='footer'>
        <section>
          <h2 className='contact'>Contato</h2>
          <form className='formulario'>
            <div className='form-group'>
              <label htmlFor='name'>Nome:</label>
              <input placeholder='Seu Nome' type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='telefone'>Telefone:</label>
              <input placeholder="(47) 99999-9999" type='fone' id='telefone' name='telefone' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Mensagem:</label>
              <textarea id='message' name='message' rows='4' required></textarea>
            </div>
            <button className='btn-contact' type='submit'>Enviar</button>
          
          </form>
        </section>
        
      </footer>

    )
}

export default Contato

