import { useReducer } from 'react'
import '../css/app4.css'


function UseReducer () {
    // state: lo stato attuale
    // action: funzione per inviare azioni
    // reducer: funzione che riceve lo stato corrente e un'azione, e restituisce il nuovo stato
    const [point, setPoint] = useReducer((state, action) => {
        switch(action.type) {
            case 'change_x':
                return{
                    ...state,  // destructuring
                    x: state.x * 2
                }
            case 'change_y':
                return {
                    ...state,
                    y: state.y * 1.5
                }
            case 'change_z':
                return {
                    ...state,
                    z: state.z +50
                }
        }
    }, {
        x: 10,
        y: 20,
        z: 30
    })

    const [text, setText] = useReducer((state, action) => {
        switch(action.type) {
            case 'change_a':
                return{
                    // ...state,
                    a: action.e.target.value,
                    b: state.b
                }
            case 'change_b':
                return {
                    ...state,
                    b: action.e.target.value
                }
        }
    }, 
    {
        a: '',
        b: ''
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
                
                <div className="row-app4">
                    <div className="cardJsx">
                        <h3>Reducer</h3>
                        <div>
                            x: {point.x} <br />
                            y: {point.y} <br />
                            z: {point.z}
                        </div>
                        <div>
                            <button onClick={() => {
                                setPoint({type: 'change_x'})
                            }}>Cambia x</button> *2
                        </div>
                        <div>
                            <button onClick={() => {
                                setPoint({type: 'change_y'})
                            }}>Cambia y</button> *1.5
                        </div>
                        <div>
                            <button onClick={() => {
                                setPoint({type: 'change_z'})
                            }}> Cambia z</button> +50
                        </div>
                    </div>

                    <div className="cardJsx">
                        <h3>Input</h3>
                        <div>
                            Frase A
                            <input type="text" value={text.a} onChange={(e) => {
                                setText({type: 'change_a', e})
                            }}  />
                        </div>
                        <div>
                            Frase B
                            <input type="text" value={text.b} onChange={(e) => {
                                setText({type: 'change_b', e})
                            }} />
                        </div>
                        <hr />
                        <div>
                            <div>
                                Frase A: <b>{text.a}</b>
                            </div>
                            <div>
                                Frase B: <b>{text.b}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseReducer