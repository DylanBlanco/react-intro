import { useCallback, useMemo, useState } from 'react'
import './css/app5.css'

function App5 () {
    // Logica  ------------------------------------------------
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const helloValue = useMemo(() => hello(counter), [counter])

    const incrementCounter = () => setCounter(c => c + 1)
    const incrementCounter2 = () => setCounter2(c => c + 1)

    const [conto, setConto] = useState(0)
    const [conto2, setConto2] = useState(0)
    const aumentaCounter = useCallback(() => setConto(c => c + 1), [counter])
    const aumentaCounter2 = useCallback(() => setConto2(c => c + 1), [counter2])


    // Template  ----------------------------------------------
    return (
        <div className="app5">
            <h1>App5</h1>
            <div className="container-app5">
                <h2>UseMemo</h2>
                <div>
                    <p>
                        è un hook che serve a memorizzare in <b>cache</b> un determinato <b>valore</b> e ricalcolarlo solo quando serve.
                    </p>
                    <p>
                        useMemo evita che una funzione venga rieseguita ogni volta che il componente si aggiorna, se i dati usati non sono cambiati.
                    </p>
                </div>

                <div className="row">
                    <div className='cardJsx'>
                        <h3>Counter</h3>
                        <div>
                            Counter: <b>{counter}</b>
                        </div>
                        <button onClick={incrementCounter}>Incrementa</button>
                        <hr />
                        <h3>Counter (useMemo)</h3>
                        <div>
                            Counter2: <b>{counter2}</b>
                        </div>
                        <button onClick={incrementCounter2}>Incrementa counter2</button>
                    </div>
                </div>
            </div>
            <div className="container-app5">
                <h2>UseCallback</h2>
                <div>
                    <p>UseCallback è un hook che serve e memorizzare in <b>cache</b> una <b>funzione</b> tra i render</p>
                </div>
                <div className="cardJsx">
                    <div>
                        <h3>Counter</h3>
                        <div>
                            Counter: <b>{conto}</b>
                        </div>
                        <div>
                            <button onClick={aumentaCounter}>Incrementa</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>Counter2</h3>
                        <div>
                            Counter: <b>{conto2}</b>
                        </div>
                        <div>
                            <button onClick={aumentaCounter2}>Incrementa Counter2</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function hello(counter) {
    console.log('Hello World!');
    return 'Hello World!!!' + counter;
}

export default App5