import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './components/app2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import App6 from './App6.jsx'
import App7 from './App7.jsx'

// Style -----------------------------------------
import './css/style.css'
// import './index.css'
import './css/input.css'

// Components ------------------------------------
import Counter from './components/counter.jsx'
import Array from './components/array.jsx'
import Input from './components/input.jsx'
import Condition from './components/condition.jsx'
import App5 from './App5.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <h1>
            Questo è l'inizio di React
        </h1>
        <App />
        
        {/* Counter con nuovo Componente */}
        <Counter />

        {/* Condition Component */}
        <Array />

        {/* Input */}
        <Input />

        {/* Componente reattiva */}
        <App2 />

        {/* UseEffect */}
        <App3 />

        {/* UseRef */}
        <App4 />

        {/* UseMemo && UseCallback */}
        <App5 />

        {/* Custom Hook */}
        <App6 />

        {/* Custom Hook */}
        <App7 />
    </StrictMode>,
)
