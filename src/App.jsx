// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react";

function App() {
    let primoTesto = 'Questa è una frase'  // Frase da Inietatre  
    // per cambiare testo dobbiamo usare una variabile di stato
    const [secondText, setSecondText] = useState('questa è la seconda frase | Da modificare')

    return (
        <div>
            Questa è l'inizio di React
            <div>
                {primoTesto} {/* Frease Iniettata */}
            </div>
            
            <div>
                {secondText}
                <div>
                    <button onClick={() => {
                        setSecondText('Questo è la seconda frase modificata')
                        console.log(secondText);
                    } }>Cliccami</button>
                </div> 
            </div>
        </div>
    )
}

export default App
