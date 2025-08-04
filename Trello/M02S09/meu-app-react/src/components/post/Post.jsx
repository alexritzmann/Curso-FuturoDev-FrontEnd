

import './Post.css'


function Post({ id, url = "https://png.pngtree.com/png-clipart/20230108/original/pngtree-new-post-stock-png-image_8885583.png", type = "Artigo", title = "Título do Post", description = "Descrição do Post", date = "Data do Post", handleDelete }) {

    return (
    <>
        <section className='container-post'>
            <div className='card-post'>
                <div className='card-image'>
                    <img className='image-post' src={url} alt="Url da imagem" />
                </div>
                <div className='card-info'>
                    <p className='type-post'>{type}</p>
                    <h3 className='title-post'>{title}</h3>
                    <p className='description-post'>{description}</p>
                    <div className='last-info'>
                        <span>
                            <p className='date-post'>Publicado em: {date}</p>
                            <button className='btn-delete' onClick={() => handleDelete(id)}>Excluir</button>
                        </span>
                    </div>     
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Post
