import { useEffect, useRef, useState } from 'react'
import UseReducer from './components/UseReducer';
import './css/app4.css'

function App () {
    // Logica -------------------------------------------------
    const countRef = useRef(10);
    const [counter, setCounter] = useState(0);
    const boxRef = useRef(null)
    const textBox = 'Fai click!'

    useEffect(() => {
        const box = boxRef.current
        
        box.addEventListener('click', () => {
            box.style.backgroundColor = '#E8D3BB'
            box.innerHTML = 'hai clickato'
        })
    }, [])


    // Template -----------------------------------------------
    return (
        <div className="app4">
            <h1>
                App4
            </h1>
            <div className='container-app4'>
                <h2>UseRef</h2>
                <div>
                    Ha due usi principali:
                    <ol>
                        <li>
                            UseRef salva un valore persistente tra i render senza causare re-render
                        </li>
                        <li>
                            Accedere agli elementi HTML del nostro JSX
                        </li>
                    </ol>
                </div>

                <div className='row-app4'>
                    <div className="cardJsx">
                        <h3>Valore persistente</h3>
                        <div>
                            CountRef: <b>{countRef.current}</b>
                        </div>
                        <div>
                            Counter: <b>{counter}</b>
                        </div>
                        <hr />
                        <div className='box-count'>
                            <div>
                                <button onClick={() => {
                                    countRef.current = countRef.current + 1
                                }}>Aumenta countRef</button>
                            </div>
                            <div>
                                <button onClick={() => {
                                    setCounter(c => c + 1)
                                }}>Aumenta Counter</button>
                            </div>
                        </div>
                    </div>

                    <div className="cardJsx">
                        <h3>Elemento Dom</h3>
                        <p>Modifica elemento del Dom</p>
                        <div ref={boxRef} className='box-dom'>
                            {textBox}
                        </div>
                    </div>
                </div>
            </div>

            <UseReducer />
        </div>
    )
}
export default App