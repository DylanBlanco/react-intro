import { useState } from 'react'
import './css/app6.css'

function App() {
    // Logica  ------------------------------------------------
    const {counter, incrementCounter, decrementCounter} = useCounter(10)


    // Template  ----------------------------------------------
    return(
        <div className="app6">
            <h1>App6</h1>
            <div className="container-app6">
                <h2>Custom Hook</h2>
                <div>
                    <p>Descrizione Hook</p>
                </div>

                <div className="row">
                    <div className="cardJsx">

                    </div>
                </div>
            </div>
        </div>
    )
}

function useCounter(startValue) {
    const [counter, setCounter] = useState(startValue)

    function incrementCounter() {
        setCounter(c => c + 1)
    }

    function decrementCounter() {
        setCounter(c => c - 1)
    }

    return {counter, incrementCounter, decrementCounter}
}

export default App