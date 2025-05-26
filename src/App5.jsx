import { useMemo, useState } from 'react'
import './css/app5.css'

function App5 () {
    // Logica  ------------------------------------------------
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const helloValue = useMemo(() => hello(counter), [counter])

    // Template  ----------------------------------------------
    return (
        <div className="app5">
            <h1>App5</h1>
            <div className="container-app5">
                <h2>UseMemo</h2>
                <div>
                    <p>
                        è un hook che serve a memorizzare in <b>cache</b> un determinato valore e ricalcolarlo solo quando serve.
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
                        <button onClick={() => setCounter(c => c + 1)}>Incrementa</button>
                        <hr />
                        <div>
                            Counter2: <b>{counter2}</b>
                        </div>
                        <button onClick={() => setCounter2(c => c + 1)}>Incrementa counter2</button>
                        <hr />
                        {helloValue}
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