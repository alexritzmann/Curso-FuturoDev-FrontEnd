

import './Header.css'


function Header({ postCount }) {
  
    return (
    <>
        <div className='container-header'>
            <h1>Painel de Gerenciamento</h1>
            <h3>Atualmente, você tem <strong>{postCount} posts</strong> cadastrados</h3>
        </div> 
    </>
  )
}

export default Header
