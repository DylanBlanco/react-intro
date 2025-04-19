import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import Counter from './components/counter.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <h1>
            Questo è l'inizio di React
        </h1>
        <App />
        
        {/* Counter con nuovo Componente */}
        <Counter />
    </StrictMode>,
)
