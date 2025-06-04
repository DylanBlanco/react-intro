import { createContext, useContext, useState } from "react"
import "../css/style.css"
import "../css/app7_context.css"


const AppContext = createContext(null)  // (null) Valore di default

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
    // const ctx = useContext(AppContext)
    const {value, setValue} = useContext(AppContext)  // Proprietà destrutturate

    return (
        <div>
            <div>
                {/* Value: <strong>{ctx.value}</strong> */}
                Value: <strong>{value}</strong>
            </div>
            
            <div>
                {/* <button onClick={() => ctx.setValue(v => v + 5)}>Change Value</button> */}
                <button onClick={() => setValue(v => v + 5)}>Change Value</button>
            </div>
        </div>
    )
}
