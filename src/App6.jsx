import { useState } from 'react'
import useModal from './Custom Hook/useModal'
import useFetch from './Custom Hook/useFetch'
import './css/app6.css'

function App() {
    // Logica  ------------------------------------------------
    const {counter, incrementCounter, decrementCounter} = useCounter(10)
    
    const { isOpen, openModal, closeModal } = useModal()  // custom hook - useModal
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');  // custom hook - useFetch

    if (loading)
        return
            <p>
                Caricamento...
            </p>
    if (error)
        return
            <p>
                Errore: {error}
            </p>


    // Template  ----------------------------------------------
    return(
        <div className="app6">
            <h1>App6</h1>
            <div className="container-app6">
                <h2>Custom Hook</h2>
                <div>
                    <p>
                        Un custom hook in React è una funzione personalizzata che utilizza hook interni, <br />
                        per incapsulare logica riutilizzabile tra componenti.
                    </p>
                </div>

                {/* Custom Hook - useCounter */}
                <div className="row">
                    <div className="cardJsx">
                        <h3>Custom Hook</h3>
                        <div>
                            <div>
                                Counter: <b>{counter}</b>
                            </div>
                            <div className='box-btn'>
                                <button onClick={decrementCounter}>Decrementa</button>
                                <button onClick={incrementCounter}>Incrementa</button>
                            </div>
                        </div>
                    </div>

                    {/* custom hook - useMoal */}
                    <div className="cardJsx">
                        <h3>UseModal</h3>
                        <button onClick={openModal}>Apri Modale</button>
                        {isOpen && (
                            <div>
                            <p>Modale Aperto</p>
                            <button onClick={closeModal}>Chiudi</button>
                            </div>
                        )}
                    </div>

                    {/* Custom Hook - use */}
                    <div className="cardJsx">
                        <h3>useFetch(API)</h3>
                        <div>
                            <ul>
                                {data.map(post => (
                                    <li key={post.id}>
                                        <strong>{post.title}</strong>
                                        <p>{post.body}</p>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function useCounter(startValue) {
    const [counter, setCounter] = useState(startValue)

    function incrementCounter() {
        setCounter(c => c + 1)
    }

    function decrementCounter() {
        setCounter(c => c - 1)
    }

    return {counter, incrementCounter, decrementCounter}
}


export default App