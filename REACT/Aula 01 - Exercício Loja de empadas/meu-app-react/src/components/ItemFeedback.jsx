
import './ItemFeedback.css' 


function ItemFeedback ({author = "Autor", comment = "Cometário"}){
    return (
        <article className='item-feedback'>
            <ul className='feedback-list'>
                <h3 className='author'>{author}</h3>
                <li className='comment'>
                    <p className='text'>{comment}</p>
                </li>
            </ul>
        </article>

    )
}

export default ItemFeedback
