
import { Link } from "react-router-dom";

import './Header.css' 

function Header (){
    return (
        <header className='header-app'>
        <div className="container">
          <h1>Empadas do Lab 365</h1>
          <p>O sabor que compila o seu paladar!</p>
        </div>
        <nav>
          <a>
            <Link to="/">
              Nosso Cardápio
            </Link>
          </a>
          <a>
            <Link to="/Contador">
              Contador
            </Link>
          </a>
          <a>
            <Link to="/cadastro">
              Cadastro de empadas
            </Link>
          </a>
          <a>
            <Link to="/contato">
              Contato
            </Link>
          </a>
          <a>
            <Link to="/feedback">
              Feedback
            </Link>
          </a>
          <a>
            <Link to="/carrinho">
              Carrinho
            </Link>
          </a>
        </nav>
      </header>

    )
}

export default Header

