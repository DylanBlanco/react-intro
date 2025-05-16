import { useState } from 'react'
import '../css/app2.css'
import CounterApp from './component/appCounter'

function App() {
    const [counter, setCounter] = useState(0)

    return(
        <div className="app2">
            <h1>App2</h1>
            <div className="counterAppBox">
                <div className="cardCounterAppBox">
                    <div>
                        <h2>State Lifting</h2>
                        <p>significa spostare lo state (stato) da un componente figlio a un componente genitore, per condividerlo tra più componenti.</p>
                    </div>
                    <hr />
                    <span>Counter:</span>
                    <b>
                        {counter}
                    </b>
                    <hr />
                    <div>
                        <h3>CounterApp</h3>
                        <CounterApp changeCounter={setCounter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App