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
                    <p>
                        Un custom hook in React è una funzione personalizzata che utilizza hook interni, <br />
                        per incapsulare logica riutilizzabile tra componenti.
                    </p>
                </div>

                <div className="row">
                    <div className="cardJsx">
                        <h3>Custom Hook</h3>
                        <div>
                            <div>
                                Counter: <b>{counter}</b>
                            </div>
                            <div className='box-btn'>
                                <button onClick={decrementCounter}>Decrementa</button>
                                <button onClick={incrementCounter}>Incrementa</button>
                            </div>
                        </div>
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