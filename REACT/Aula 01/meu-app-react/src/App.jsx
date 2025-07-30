
import './App.css'



function App() 
{

  const resultado = 10

  function darParabens() 
  {
    alert('Parabens')
  }

  return (
    <div>
      
      <div>
        <button onClick={() => alert('Você clicou') }>Click</button>
      </div>
      <div>
        <button onClick={darParabens}>Parabens</button>
      </div>
      <div>
        <span>Pesultado: {resultado}</span>
      </div>
    
    
    
    </div>


      
    
  )
}

export default App
