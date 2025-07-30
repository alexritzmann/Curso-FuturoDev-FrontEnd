
import './Footer.css'
import { useState, useEffect } from 'react'

function Footer() {
  
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
        setDarkMode(savedMode === 'true');
        document.body.classList.toggle('dark-mode', savedMode === 'true');
        }
    }, []);


    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode.toString());
        
        document.body.classList.toggle('dark-mode', newMode);
        document.body.classList.toggle('light-mode', !newMode);
    };

  return (
    <>
        <div className='container-footer'>
            <div>
                <span>Energia Solar 365</span>
                <span>CNPJ: 00.000.000/0001-00</span>
                <span>Email: energiasolar365@example.com</span>
                <span>Rua: Rua da Energia Solar, Bairro: Centro, Cidade: Joinville</span>
            </div>
            <div>
                <a href="https://github.com/AlexRitzmann"></a>
                <a href="https://www.instagram.com/alexritzmann.rtg/"></a>
            </div>
            <button className="botao-tema" onClick={toggleTheme}>
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
            <div>
                <span>Desenvolvido por: Alex Ritzmann</span>
            </div>

        </div>
        
    </>
  )
}

export default Footer
