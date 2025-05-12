import { useState } from 'react'
import '../css/app2.css'
import CounterApp from './component/appCounter'

function App() {
    const [counter, setCounter] = useState(0)

    return(
        <div className="app2">
            <h1>App2</h1>
            <div className="counterAppBox">
                <h2>CounterApp</h2>
                {counter}
                <CounterApp changeCounter={setCounter}/>
            </div>
        </div>
    )
}

export default App