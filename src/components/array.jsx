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

    function addLanguage() {
        console.log('hai fatto click su addLanguage');
        setcodLanguagesAdd(l => [...l, 'php'])
    }

    //  TEMPLATE  ----------------------------------------------
    return(
        <div className='array-component'>
            <h1>
                Array Component
            </h1>
            <div className='container'>
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
            </div>
        </div>
    )
}

export default Array