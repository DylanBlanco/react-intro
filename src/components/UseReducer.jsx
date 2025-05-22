import { useReducer } from 'react'
import '../css/app4.css'


function UseReducer () {
    // state: lo stato attuale
    // action: funzione per inviare azioni
    // reducer: funzione che riceve lo stato corrente e un'azione, e restituisce il nuovo stato
    const [point, setPoint] = useReducer((state, action) => {

    }, {
        x: 10,
        y: 20,
        z: 30
    })

    return(
        <>
            <div className="UseReducer">
                <h2>UseReducer</h2>
                <div>
                    <p>Ti permette di gestire una variabile di stato e controllarla in maniera centralizzata tramite una funzione <b>reducer</b> che decide come aggiornare lo stato in base a un'azione</p>
                    <p>In React, useReducer è un hook avanzato per la gestione dello stato, usato quando useState non basta più, ad esempio quando:</p>
                    <ol>
                        <li>
                            Lo stato è complesso (oggetto con più proprietà)
                        </li>
                        <li>
                            Ci sono molte transizioni di stato (azioni diverse che lo modificano)
                        </li>
                        <li>
                            Vuoi centralizzare la logica di aggiornamento dello stato in un’unica funzione
                        </li>
                    </ol>
                </div>
                
                <div className="cardJsx">
                    <h3>Reducer</h3>
                    <div>
                        x: {point.x} <br />
                        y: {point.y} <br />
                        z: {point.z}
                    </div>
                    <div>
                        <button onClick={() => {
                            setPoint()
                        }}>Cambia x</button>
                    </div>
                    <div>
                        <button>Cambia x</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseReducer