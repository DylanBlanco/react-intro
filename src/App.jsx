// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// UseState è un HOOK che rende le variabili reattive
import { useState } from "react";

function App() {
    // Injection
    let primoTesto = 'Questa è una frase'  // Frase da Inietatre 

    // useState - per cambiare testo dobbiamo usare una variabile di stato
    const [secondText, setSecondText] = useState('questa è la seconda frase | Da modificare')

    // Contatore
    const [counter, setCounter] = useState(0)
    
    return (
        <div>
            Questa è l'inizio di React
            <div>
                {primoTesto} {/* Frease Iniettata */}
            </div>
            
            {/* Modifica Variabile */}
            <div>
                {secondText}
                <div>
                    <button onClick={() => {
                        setSecondText('Questo è la seconda frase modificata')
                        console.log(secondText);
                    } }>Cliccami</button>
                </div> 
            </div>
            
            {/* Contatore */}
            <div>

            </div>
        </div>
    )
}

export default App
