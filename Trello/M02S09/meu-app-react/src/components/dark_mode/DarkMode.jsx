import './DarkMode.css'
import { useState, useEffect } from 'react'

function DarkMode() {
  
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
        <div className='container-dark-mode'>
            <button className="theme-button" onClick={toggleTheme}>
                {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
        </div>
        
    </>
  )
}

export default DarkMode