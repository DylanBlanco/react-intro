// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// UseState è un HOOK che rende le variabili reattive
import { useState } from "react";

function App() {
    //  LOGICA ------------------------------------------------

    // Injection
    let primoTesto = 'Questa è una frase'  // Frase da Inietatre 

    // useState - per cambiare testo dobbiamo usare una variabile di stato
    const [secondText, setSecondText] = useState('questa è la seconda frase | Da modificare')

    // Contatore
    const [counter, setCounter] = useState(0)
    
    // Contatore con la Function
    const [functionCounter, setFunctionCounter] = useState(0)
    function increaseCounter() {
        setFunctionCounter(c => c + 1)
    }
    function decreaseCounter() {
        setFunctionCounter(c => c - 1)
    }


    //  TEMPLATE ------------------------------------------------
    
    return (
        <div>
            {/* Injection */}
            <div>
                <h3>Injection</h3>
                <div>
                    {primoTesto} {/* Frease Iniettata */}
                </div>
            </div>
            
            {/* Modifica Variabile */}
            <div>
                <h3>UseState</h3>
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
                <h3>Contatore</h3>
                <div>
                    {counter}
                    <div>
                        <button onClick={() => setCounter(count => count + 1)}>Aunmenta</button>
                    </div>
                    <div>
                        <button onClick={() => setCounter(count => count - 1)}>Diminuisci</button>
                    </div>
                </div>
            </div>

            {/* Contatore con la Function */}
            <div>
                <h3>Contatore con Function</h3>
                <div>
                    <b>
                        Counter: {functionCounter}
                    </b>
                    <div>
                        <button onClick={() => increaseCounter()}>Aumenta</button>
                    </div>
                    <div>
                        <button onClick={() => decreaseCounter()}>Decrementa</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
