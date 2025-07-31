

import { useState } from 'react'
import './Form.css'

function Form(){

    const [postTitle, setPostTitle] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [postURLCover, setPostURLCover] = useState('')
    const [postDate, setPostDate] = useState('')

    function savePost(event){
        event.preventDefault()
        alert('Post cadastrado com sucesso!')
        setPostTitle('')
        setPostDescription('')
        setPostURLCover('')
        setPostDate('')
    }

    return (
        
        <div className='container-form'>
            <h3>Novo Post</h3>
            <form className='form' onSubmit={savePost}>
                <label htmlFor='postTitle'>Título:</label>
                <input type="text" id="postTitle" placeholder='Titulo' value={postTitle} onChange={(event) => setPostTitle(event.target.value)} />

                <label htmlFor='postDescription'>Descricão:</label>
                <textarea id="postDescription" placeholder='Descricão' value={postDescription} onChange={(event) => setPostDescription(event.target.value)} />

                <label htmlFor='postURLCover'>URL da capa:</label>
                <input type="text" id="postURLCover" placeholder='URL da imagem da Capa' value={postURLCover} onChange={(event) => setPostURLCover(event.target.value)} />

                <label htmlFor='postDate'>Data de publicação:</label>
                <input type="date" id="postDate" value={postDate} onChange={(event) => setPostDate(event.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form