import './css/app7.css'
import { useState } from 'react'
import Context from './Hook/Context'


export default function App() {
    const [value,setValue] = useState(10)

    return (
        <div className="app7">
            <h1>App7</h1>
            <div className="container-app7">
                <h2>UseContext</h2>
                <div>
                    <p>
                        è un hook di React che ti permette di accedere a un contesto (context) direttamente all'interno di un componente funzionale, <br /> senza dover passare manualmente le props da componente a componente (il cosiddetto "prop drilling").
                    </p>
                </div>

                <div className="row">
                    <div className="cardJsx">
                        <h3>Prop Drilling</h3>
                        <div>
                            <CompA value={value} setValue={setValue} />
                        </div>
                    </div>
                    
                    <div className='app7-ctx'>
                        <Context />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CompA({value, setValue}) {
    return (
        <div>
            <hr />
            CompA
            <div>
                <CompB value={value} setValue={setValue} />
            </div>
        </div>
    )
}

function CompB({value, setValue}) {
    return (
        <div>
            <hr />
            CompB
            <div>
                <CompC value={value} setValue={setValue} />
            </div>
        </div>
    )
}

function CompC({value, setValue}) {
    return (
        <div>
            <hr />
            CompC
            <div>
                Value: {value}
            </div>
            <button onClick={() => setValue(v => v * 2)}>Change Value</button>
        </div>
    )
}