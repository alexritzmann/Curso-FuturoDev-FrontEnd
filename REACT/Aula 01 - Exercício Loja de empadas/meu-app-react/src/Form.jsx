
import { ToastContainer, toast } from 'react-toastify';
import Lottie from 'react-lottie';


import { useState } from 'react'
import './Form.css'

function Form(){
    const notify = () => toast()


    let [nameEmpada, setNameEmpada] = useState('')
    let [descriptionEmpada, setDescriptionEmpada] = useState('')
    let [priceEmpada, setPriceEmpadaEmpada] = useState('')
    let [tipoEmpada, setTipoEmpada] = useState('')
    let [isGlutenFree, setIsGlutenFree] = useState(false)
    let [isVegan, setIsVegan] = useState(false)
    let [saborPrincipal, setSaborPrincipal] = useState('')

    function saveEmpada(event){


        event.preventDefault()

        if (nameEmpada === "") {
            toast.error("Nome é obrigatório");
        }
        if (descriptionEmpada === "") {
            toast.error("Descrição é obrigatória");
        }
        if (priceEmpada === "") {
            toast.error("Preço é obrigatório");
        }
        if (tipoEmpada === "") {
            toast.error("Tipo é obrigatório");
        }
        if (saborPrincipal === "") {
            toast.error("Sabor Principal é obrigatório");
        }
    
       
        const novaEmpada = {
            nameEmpada: nameEmpada,
            descriptionEmpada: descriptionEmpada,
            priceEmpada: priceEmpada,
            tipo: tipoEmpada,
            isGlutenFree: isGlutenFree,
            isVegan: isVegan,
            saborPrincipal: saborPrincipal
        }

        let listaEmpadas = JSON.parse(localStorage.getItem('empadas')) || [] // Verifica se já existe uma lista no localStorage, caso contrário, cria uma nova lista
        listaEmpadas.push(novaEmpada) // Adiciona a nova empada à lista
        localStorage.setItem('empadas', JSON.stringify(listaEmpadas)) // Salva a lista atualizada no localStorage

        if (nameEmpada != "" && descriptionEmpada != "" && priceEmpada != "" && tipoEmpada != "" && saborPrincipal != "") {
            toast.success("Empada cadastrada com sucesso!");

            setNameEmpada('')
            setDescriptionEmpada('')
            setPriceEmpadaEmpada('')
            setTipoEmpada('')
            setIsGlutenFree (false)
            setIsVegan (false)
            setSaborPrincipal('')
        }
        
        /* COLOCAR AQUI O RECARREGAMENTO DA PÁGINA APÓS O CADASTRO UTILIZANDO O LOTTIE
        setTimeout(() => {
            setLoading(false) // Recarrega a página após o cadastro
        }, 3000); // Tempo de espera de 2 segundos antes de recarregar a página
        */
    }

    return (
        <div className='container-form'>
            <h2>Cadastro de Empadas</h2>
            <form onSubmit={saveEmpada}>
                <label htmlFor='nameEmpada'>Título:</label>
                <input type="text" id="nameEmpada" value={nameEmpada} onChange={(event) => setNameEmpada(event.target.value)} />

                <label htmlFor='descriptionEmpada'>Descrição:</label>
                <textarea value={descriptionEmpada} onChange={(event) => setDescriptionEmpada(event.target.value)}></textarea>

                <label htmlFor='priceEmpada'>Preço:</label>
                <input type="number" id="priceEmpada" min={0} value={priceEmpada} onChange={(event) => {
                    const value = parseFloat(event.target.value);
                    if(isNaN(value)){
                        setPriceEmpadaEmpada('');
                    } else
                    if(value >= 0){
                        setPriceEmpadaEmpada(value);
                    }
                }}/>

                <label htmlFor="tipoEmpada">Tipo da Empada</label>
                <select className='select-empada' id="tipoEmpada" value={tipoEmpada} onChange={(event) => {
                    if(event.target.value === ''){
                        setTipoEmpada('');
                    } else
                        if(event.target.value === 'Doce' || event.target.value === 'Salgada'){
                        setTipoEmpada(event.target.value);
                    }}}>
                    <option value="">Selecione</option>
                    <option value="Doce">Doce</option>
                    <option value="Salgada">Salgada</option>
                
                </select>
                <div className='checkbox-container'>
                    <input className='checkbox' type="checkbox" id="isGlutenFree" checked={isGlutenFree} onChange={
                        (event) => setIsGlutenFree(event.target.checked)}/>
                    <label htmlFor="isGlutenFree">Gluten Free</label>
                    {isGlutenFree && <span className='label-gluten-free'>Sem Glúten</span>}
                </div>
                <div className='checkbox-container'>
                    <input className='checkbox' type="checkbox" id="isVegan" checked={isVegan} onChange={
                        (event) => setIsVegan(event.target.checked)}/>
                    <label htmlFor="isVegan">Vegano</label>
                </div>

                <fieldset className='fieldset-sabor'>
                    <legend>Sabor Principal</legend>

                    <div>
                        <input type="radio" id='carne' name='sabor' value='Carne' onChange={(event) => setSaborPrincipal(event.target.value)} checked={saborPrincipal === 'Carne'}/>
                        <label htmlFor="carne">Carne</label>
                    </div>
                    <div>
                        <input type="radio" id='frango' name='sabor' value='Frango' onChange={(event) => setSaborPrincipal(event.target.value)} checked={saborPrincipal === 'Frango'}/>
                        <label htmlFor="frango">Frango</label>
                    </div>
                    <div>
                        <input type="radio" id='camarao' name='sabor' value='Camarao' onChange={(event) => setSaborPrincipal(event.target.value)} checked={saborPrincipal === 'Camarao'}/>
                        <label htmlFor="camarao">Camarão</label>
                    </div>
                </fieldset>
                



                <button id='btn-cadastrar' type='submit' onClick={notify}>Cadastrar</button>
            </form>
            <ToastContainer />
        </div>
        
    )
}

export default Form

