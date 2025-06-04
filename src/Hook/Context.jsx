import { createContext, useState } from "react"
import "../css/style.css"
import "../css/app7_context.css"


const AppContext = createContext()

export default function UseContext () {
    const [value, setValue] = useState(5)
    
    return (
        <AppContext.Provider value={{value,setValue}}>
            <div className="app7-context">
                <h3>UseContext</h3>
                <div className="row-ctx">

                    <div className="card-ctx">
                        <h3>Context.jsx</h3>

                        <ValA />
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    )
}

function ValA() {
    return (
        <div>
            <ValB />
        </div>
    )
}

function ValB() {
    return (
        <div>
{/*             
            <div>
                Value: <strong>{value}</strong>
            </div>
            
            <div>
                <button onClick={() => setValue(v => v + 5)}>Change Value</button>
            </div> */}
        </div>
    )
}
