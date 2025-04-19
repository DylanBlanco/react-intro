import '../css/style.css'
import { useState } from "react"

function Counter () {
    //  LOGICA  --------------------------------------------------

    const [counterComponent, setCounterComponent] = useState(0)
    const counter = {
        increaseC: () => {
            setCounterComponent(c => c + 1)
        },
        decreaseC: () => {
            setCounterComponent(c => c - 1)
        }
    }


    //  TEMPLATE  ------------------------------------------------
    return (
        <div className='counter-body'>
            <h1>Questo è un Nuovo Componente</h1>

            <div className='container'>
                {/* Contatore obj */}
                <div className='box-counter'>
                    <h3>Component Counter</h3>
                    <p>
                        Contatore: {counterComponent}
                    </p>
                    <div className='counter'>
                        <div>
                            <button onClick={counter.decreaseC}>Diminuisci</button>
                        </div>
                        <div>
                            <button onClick={counter.increaseC}>Aumenta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter