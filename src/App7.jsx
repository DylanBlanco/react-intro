import { useContext, useState } from 'react'
import './css/app7.css'


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

                <div className="cardJsx">
                    <div>
                        <CompA value={value} setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CompA({value, setValue}) {
    return (
        <div>
            CompA
            <div>
                compA:
                <CompB value={value} setValue={setValue} />
            </div>
        </div>
    )
}

function CompB({value, setValue}) {
    return (
        <div>
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
            CompC
            <div>
                Value: {value}
            </div>
            <button onClick={() => setValue(v => v * 2)}>Change Value</button>
        </div>
    )
}