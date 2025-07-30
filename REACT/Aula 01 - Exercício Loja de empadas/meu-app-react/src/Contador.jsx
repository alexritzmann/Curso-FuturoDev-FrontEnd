import{ useState } from 'react'

function Contador(){

    let [contador, setContador] = useState(0)

    function acrescentarValorContador(){
        setContador(contador + 1)
        alert(`Contador: ${contador + 1}`)
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={acrescentarValorContador}>Acrescentar</button>
        </div>
    )
}

export default Contador