import { useState } from "react"
import "../css/style.css"
import "../css/app7_context.css"


// const AppContext = createContext()

export default function UseContext () {
    const [value, setValue] = useState(5)
    
    return (
        <div className="app7-context">
            <h3>UseContext</h3>
            <div className="row-ctx">

                <div className="card-ctx">
                    <h3>Context.jsx</h3>

                    <ValA value={value} setValue={setValue} />
                </div>
            </div>
        </div>
    )
}

function ValA({value, setValue}) {
    return (
        <div>
            <ValB value={value} setValue={setValue} />
        </div>
    )
}

function ValB({value, setValue}) {
    return (
        <div>
            
            <div>
                Value: <strong>{value}</strong>
            </div>
            
            <div>
                <button onClick={() => setValue(v => v + 5)}>Change Value</button>
            </div>
        </div>
    )
}
