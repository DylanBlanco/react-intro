import { useState } from "react"
import "../css/style.css"
import "../css/app7_context.css"


// const AppContext = createContext()

export default function UseContext () {
    const [value, setvalue] = useState(2)
    
    return (
        <div className="app7-context">
            <h3>UseContext</h3>
            <div className="row-ctx">
                <div className="card-ctx">
                    ouhohu
                </div>
            </div>
        </div>
    )
}

function ValA() {
    return (
        <div>
            ValA
        </div>
    )
}