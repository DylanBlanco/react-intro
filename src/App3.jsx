import { useEffect, useState } from 'react'
import './css/app3.css'

function App() {
    // Logica ---------------------------------------

    const [counter, setCounter] = useState(10)
    const [counter2, setCounter2] = useState(100)
    const [users, setUsers] = useState([])

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


    // Template -------------------------------------
    return(
        <div className="app3">
            <h1>App3</h1>
            <div className='container-app3'>
                <h2>Use-Effect</h2>
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
                            <h5>user.name</h5>
                            {
                                users.map((user, i) => (
                                    <div key={user.id}>
                                        {i}. {user.name}
                                    </div>
                                ))
                            }
                        </div>
                        <hr />
                        <div>
                            <h5>user.username</h5>
                            {
                                users.map((user, i) => (
                                    <div key={user.id}>
                                        {i}. {user.username}
                                    </div>
                                ))
                            }
                        </div>
                        <hr />
                        <div>
                            <h5>user.email</h5>
                            {
                                users.map((user, i) => (
                                    <div key={user.id}>
                                        {i}. {user.email}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App