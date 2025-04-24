// STYLE
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

    //  TEMPLATE  ----------------------------------------------
    return(
        <div className='array-component'>
            <h1>
                Array Component
            </h1>
            <div className='container'>
                <div className="cardJsx">
                    <h3>Coding Languages</h3>
                    {
                        codLanguages.map((lang, i) => (
                            <div key={lang + '_' + i}>{(i+1) + '.' + lang}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Array