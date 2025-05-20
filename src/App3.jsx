import { useEffect, useState } from 'react'
import './css/app3.css'

function App() {
    // Logica ---------------------------------------

    const [counter, setCounter] = useState(10)
    const [counter2, setCounter2] = useState(100)
    const [users, setUsers] = useState([])
    const [text, setText] = useState('testo da cambiare')


    // onLoad && onUpload
    useEffect(() => {
        console.log('re-rendering effettuato!')
    })

    // onLoad && onUpdate(counter2)
    useEffect(() => {
        console.log('re-rendering di counter2 effettutato!')
    }, [counter2])

    // onLoad
    useEffect(() => {
        console.log('Primo Rendering Effettuato')
    }, [])

    // onLoad / jsonplaceholder API - https://jsonplaceholder.typicode.com/
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(json => console.log(json))  // richiamo del mio json in console
            .then(json => {
                setUsers(json)  // Richiamo del json in setUsers
            })
    }, [])
    
    // ChangeText
    useEffect(() => {
        changeText
    }, [text])

    function changeText () {
        return ('Nuovo Testo')
    }


    // Template -------------------------------------
    return(
        <div className="app3">
            <h1>App3</h1>
            <div className='container-app3'>
                <h2>Use-Effect</h2>
                <div>
                    <div>
                        Ti permette di dire a React: <br />
                        “Esegui questa funzione dopo che il componente è stato renderizzato o aggiornato”. <hr />
                    </div>
                    <div>
                        Esempi di effetti collaterali:
                        <ol>
                            <li>Chiamate API</li>
                            <li>Interazioni con il DOM</li>
                            <li>Event listeners</li>
                            <li>Timer / setInterval</li>
                            <li>Sincronizzare lo stato con qualcosa di esterno</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="cardJsx">
                        <h4>Counter</h4>
                        <div className='counter-box'>
                            <div>
                                {counter}
                            </div>
                            <div>
                                <button onClick={() => setCounter(c => c + 10)}>+</button>
                            </div>
                        </div>
                        <p>
                            re-rendering onLoad && onUpload
                        </p>
                        <hr />
                        <h4>Counter2</h4>
                        <div className='counter-box'>
                            <div>
                                {counter2}
                            </div>
                            <div>
                                <button onClick={() => setCounter2(c => c + 10)}>+</button>
                            </div>
                        </div>
                        <p>
                            re-rendering onLoad && onUpload
                        </p>
                    </div>

                    <div className="cardJsx">
                        <h4>json-placeholder</h4>
                        <div>
                            <h5>Users</h5>

                            {/* Richiamo json con operatore ternario */}
                            {users.length > 0 ? (  // ? operatore ternario
                                <div>
                                    {users.map((user, i) => (
                                        <div key={user.id}>
                                            <div>
                                                {i}. {user.name} <br />
                                                ({user.username}) <br />
                                                {user.email}
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    Nessun Utente
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="cardJsx">
                        <div>
                            <h1>
                                {text}
                            </h1>
                        </div>
                        <div>
                            <button onClick={() => {setText(changeText)}}>change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App