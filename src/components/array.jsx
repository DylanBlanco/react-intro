// STYLE
import { useState } from 'react'
import '../css/array.css'

function Array () {
    //  LOGICA  ------------------------------------------------
    const codLanguages = [
        'Html',
        'Css',
        'JavaScript',
        'Vue.js',
        'React',
        'PHP',
        'Laravel'
    ]

    // Array codLanguagesAdd - Variabile di stato
    const [codLanguagesAdd, setcodLanguagesAdd] = useState([
        'Html',
        'Css',
        'JavaScript',
        'Vue.js',
        'React',
        'PHP',
        'Laravel'
    ])

    // Misure Lati per Calcolo Area
    const [sides, setSides] = useState({
        x: 10,
        y: 6,
        p: 3.14,
        r: 2
    })

    // Aggiunta Code Language
    function addLanguage() {  // Aggiungi linguagggio php
        setcodLanguagesAdd(l => [...l, 'php'])
        console.log('hai aggiunto php');
    }

    // Calcola Area Triangolo
    function calcAreaTriangle() {      
        return sides.x * sides.y / 2
    }

    // Calcola Area Cerchio
    const areaCircle = sides.p * (sides.r * sides.r)
    function calcAreaCircle() {
        return areaCircle
    }

    //  TEMPLATE  ----------------------------------------------
    return(
        <div className='array-component'>
            <h1>
                Array Component
            </h1>
            <div className='container'>

                {/* Iterazione Array  */}
                <div className="cardJsx">
                    <h3>Coding Languages</h3>
                    <ul>
                        {
                            codLanguages.map((lang, i) => (
                                <li key={lang + '_' + i}>
                                    {(i+1) + '.' + lang}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Aggiungi Elemento */}
                <div className="cardJsx">
                    <h3>Aggiunta Linguaggio</h3>
                    <button onClick={addLanguage}>Aggiungi</button>
                    <ul>
                        {
                            codLanguagesAdd.map((lang, i) => (
                                <li key={lang + '_' + i}>
                                    {(i+1) + '.' + lang}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Array Reattivo */}
                <div className="cardJsx">
                    <h3>Calcola Aerea</h3>
                    {/* Area Rettangolo */}
                    <div className="areaRett">
                        <h4>Area Rettangolo</h4>
                        <div>
                            <span>X: {sides.x}</span>
                            <span>Y: {sides.y}</span>
                        </div>
                        <hr />
                        <div>
                            <b>Area: {sides.x * sides.y}</b>
                        </div>
                    </div>

                    {/* Area Triangolo con function */}
                    <div className="areaTri">
                        <h4>Area Triangolo</h4>
                        <div>
                            <span>X: {sides.x}</span>
                            <span>Y: {sides.y}</span>
                        </div>
                        <hr />
                        <div>
                            <b>Area: {calcAreaTriangle()}</b>
                        </div>
                    </div>

                    {/* Area Cerchio con function */}
                    <div className="areaTri">
                        <h4>Area Cerchio</h4>
                        <div>
                            <span>p: {sides.p}</span>
                            <span>r: {sides.r}</span>
                        </div>
                        <hr />
                        <div>
                            <b>Area: {calcAreaCircle()}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Array