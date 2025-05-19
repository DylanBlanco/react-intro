import { useEffect } from 'react'
import './css/app3.css'
function App() {
    // Logica ---------------------------------------
    useEffect(() => {
        console.log('re-rendering effettuato!')
    })


    // Template -------------------------------------
    return(
        <div className="app3">
            <h1>App3</h1>
            <div className='container-app3'>
                <h2>Use-Effect</h2>
                <div className="cardJsx">
                    qlq                  
                </div>
            </div>
        </div>
    )
}

export default App