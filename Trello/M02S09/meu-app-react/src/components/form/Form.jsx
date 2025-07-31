

import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import './Form.css'

function Form(){

    const [postTitle, setPostTitle] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [postURLCover, setPostURLCover] = useState('')
    const [postDate, setPostDate] = useState('')
    const [postCategory, setPostCategory] = useState('')


    function savePost(event){
        event.preventDefault()


        if(!postTitle || !postDescription || !postURLCover || !postDate || !postCategory){
            toast.error('Preencha todos os campos!')
            return
        }

        if(!postURLCover.startsWith('http') && !postURLCover.startsWith('https')) {
            toast.error('A URL deve começar com http ou https')
            return
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(postDate);
        
        if(selectedDate < today) {
            toast.info('Não é possível selecionar uma data passada!');
            return;
        }

        
        alert('Post cadastrado com sucesso!')
        setPostTitle('')
        setPostDescription('')
        setPostURLCover('')
        setPostDate('')
        setPostCategory('')
    }

    return (
        
        <div className='container-form'>
            <h3>Novo Post</h3>
            <form className='form' onSubmit={savePost}>
                <label className='required-field' htmlFor='postTitle'>Título:</label>
                <input type="text" id="postTitle" placeholder='Titulo' value={postTitle} onChange={(event) => setPostTitle(event.target.value)} required/>

                <label className='required-field' htmlFor='postDescription'>Descricão:</label>
                <textarea id="postDescription" placeholder='Descricão' value={postDescription} onChange={(event) => setPostDescription(event.target.value)} required/>

                <label className='required-field' htmlFor='postURLCover'>URL da capa:</label>
                <input type="text" id="postURLCover" placeholder='URL da imagem da Capa' value={postURLCover} onChange={(event) => setPostURLCover(event.target.value)} required/>

                <label className='required-field' htmlFor='postDate'>Data de publicação:</label>
                <input type="date" id="postDate" value={postDate} onChange={(event) => setPostDate(event.target.value)} min={new Date().toISOString().split('T')[0]}required/>

                <label className='required-field' htmlFor='postCategory'>Tipo do post</label>
                <select id="postCategory" value={postCategory} onChange={(event) => setPostCategory(event.target.value)} required>
                    <option value="Artigo">Artigo</option>
                    <option value="Noticia">Notícia</option>
                    <option value="Tutorial">Tutorial</option>
                    <option value="Entrevista">Entrevista</option>
                </select>

                <button type='submit'>Cadastrar</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Form
