import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Style -----------------------------------------
import './css/style.css'
// import './index.css'

// Components ------------------------------------
import Counter from './components/counter.jsx'
import Condition from './components/condizioni.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <h1>
            Questo è l'inizio di React
        </h1>
        <App />
        
        {/* Counter con nuovo Componente */}
        <Counter />

        {/* Condition Component */}
        <Condition />
    </StrictMode>,
)
