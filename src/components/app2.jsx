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
                    <h2>Counter</h2>
                    {counter}
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