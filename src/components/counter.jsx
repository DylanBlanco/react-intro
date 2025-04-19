import { useState } from "react"

function Counter () {
    //  LOGICA  ----------------------------------------

    const [counterComponent, setCounterComponent] = useState(0)
    const counter = {
        increaseC: () => {
            setCounterComponent(c => c + 1)
        },
        decreaseC: () => {
            setCounterComponent(c => c - 1)
        }
    }


    //  TEMPLATE  --------------------------------------
    return (
        <div>
            <div>
                <h2>Contatore con nuovo componente</h2>

                {/* Contatore obj */}
                <div>
                    <h3>Component Counter</h3>
                    <div>
                        Contatore: {counterComponent}
                        <div>
                            <button onClick={counter.increaseC}>Aumenta</button>
                        </div>
                        <div>
                            <button onClick={counter.decreaseC}>Diminuisci</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter