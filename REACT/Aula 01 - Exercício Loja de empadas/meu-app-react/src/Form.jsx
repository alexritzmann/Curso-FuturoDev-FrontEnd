
import { useState } from 'react'
import './Form.css'

function Form(){

    let [nameEmpada, setNameEmpada] = useState('')

    function saveEmpada(event){
        event.preventDefault()
        alert(`Empada cadastrada: ${nameEmpada}`)
        setNameEmpada('')
        console.log(`Empada cadastrada: ${nameEmpada}`)
    }

    return (
        <div className='container-form'>
            <h2>Cadastro de Empadas</h2>
            <form onSubmit={saveEmpada}>
                <label htmlFor='nameEmpada'>Título:</label>
                <input type="text" id="nameEmpada" value={nameEmpada} onChange={(event) => setNameEmpada(event.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form