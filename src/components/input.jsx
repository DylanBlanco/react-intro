import { useState } from "react"
import BoxDimensions from "./boxDimensions"

function Input() {
    //  Logica  -----------------------------------------------
    
    const [userData, setUserData] = useState('')
    const [userLeng, setUserLeng] = useState('')

    const schoolObjects = [
        { name: "Matita", category: "Scrittura", price: 0.50 },
        { name: "Penna", category: "Scrittura", price: 0.80 },
        { name: "Gomma", category: "Correzione", price: 0.30 },
        { name: "Righello", category: "Misurazione", price: 1.00 },
        { name: "Quaderno", category: "Cartoleria", price: 1.50 },
        { name: "Temperamatite", category: "Accessori", price: 0.70 },
        { name: "Evidenziatore", category: "Scrittura", price: 1.20 },
        { name: "Colla stick", category: "Creatività", price: 1.00 },
        { name: "Forbici", category: "Creatività", price: 2.50 },
        { name: "Zaino", category: "Contenitore", price: 20.00 }
    ]

    const [objSelected, setObjSelected] = useState(schoolObjects.name)
    
    //  Input - function di interpolazione
    function changeUserData (e) { // event - per ottenere valore digitato da utente
        // const element = e.target // target - per ottenere il vaolre dell'input
        // const v = element.value

        // setUserData(v)

        setUserData(e.target.value) // funzione ridotta
    }

    // Select - function di interpolazione
    function selChangeUserData (e) { // event - per ottenere valore digitato da utente
        // const element = e.target // target - per ottenere il vaolre dell'input
        // const v = element.value

        // setUserLeng(v)

        setUserLeng(e.target.value) // funzione ridotta
    }

    function changeSchoolObj (e) {
        setObjSelected(e.target.value)
    }

    // CheckBox
    const [checked,setChecked] = useState(false)
    function changeChecked() {
        setChecked(prev => !prev)
    }

    //  BOX
    const [dimensions, setDimensions] = useState({
        w: 100,
        h: 100
    })

    function changeWidth(e) {
        setDimensions(prev => {
            return {
                ...prev,
                w: e.target.value
            }
        })
    }
    
    function changeHeight(e) {
        setDimensions(prev => {
            return {
                ...prev,
                h: e.target.value
            }
        })
    }


    //  Template  ---------------------------------------------
    return(
        <>
            <div className="input">
                <h1>Input section</h1>

                <div className="container">
                    {/* Input */}
                    <div className="cardJsx">
                        <h3>Input</h3>
                        <div className="input-card">
                            <h4>Input</h4>
                            <div>
                                <input
                                // type - tipo dell'input(text, number, mail, ecc...)
                                type="text" 
                                // value - Valore dell'input
                                value={userData}
                                // onChange - gestore degli eventi, serve per rilevare cambiamenti nei campi di input
                                onChange={changeUserData} />
                                <div className="mini-text">{userData}</div>
                            </div>
                        </div>

                        <hr />

                        <div className="input-card">
                            <h4>Select</h4>
                            <div className="row">
                                <div>
                                    <select onChange={selChangeUserData} name="" id="">
                                        <option value="">----</option>
                                        <option value="Italiano">Italiano</option>
                                        <option value="Inglese">Inglese</option>
                                        <option value="Spagnolo">Spagnolo</option>
                                    </select>
                                </div>
                                <div className="mini-text">{userLeng}</div>
                            </div>
                        </div>
                    </div>

                    {/* ARRAY */}
                    <div className="cardJsx">
                        <h3>ARRAY</h3>
                        <div className="input-card">
                            <h4>Oggetti Scolastici</h4>
                            {
                                schoolObjects.map((obj, i) => (
                                    <p key={obj + '_' + i}>{i + 1}. {obj.name}</p>
                                ))
                            }
                        </div>
                        <div className="input-card">
                            <div className="row">
                                <div>
                                    <h4>Filtra Ricerca</h4>
                                    <div>
                                        <p>Nome</p>
                                        <select onChange={changeSchoolObj}>
                                            <option value="">------</option>
                                            {
                                                schoolObjects.map((obj, i) => (
                                                    <option key={obj + '_' + i} value={obj.name}>{obj.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h4>Risultato Ricerca</h4>
                                <div>
                                    <p>{objSelected}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Check-Box */}
                    <div className="cardJsx">
                        <h3>Check-Box</h3>
                        <div className="input-card">
                            <label htmlFor="color">
                                <div>Select Check-Box</div>
                                <input type="checkbox" 
                                    id="color"
                                    value={checked}
                                    onChange={changeChecked}
                                />
                            </label>
                            <hr />
                            {checked && (
                                <div>Hai selezionato la Check-Box</div>
                            )}
                        </div>
                    </div>

                    {/* Box */}
                    <div className="cardJsx">
                        <h3>Box</h3>
                        <div className="input-card">
                            <h4>Dimensions</h4>
                            <div className="row">
                                <div>
                                    <b>Width</b>
                                    <input
                                        type="range"
                                        min={10}
                                        max={150}
                                        value={dimensions.w}
                                        onChange={changeWidth}
                                    />
                                </div>
                                <div>
                                    <b>Heigth</b>
                                    <input
                                        type="range"
                                        min={10}
                                        max={150}
                                        value={dimensions.h}
                                        onChange={changeHeight}
                                    />
                                </div>
                            </div>
                            <div className="box-width"
                                style={{
                                    width: dimensions.w + 'px', 
                                    heigth: dimensions.h + 'px'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Component BoxDimensions */}
                <h2>Component BoxDimensions</h2>
                <BoxDimensions bgColor='#262C36' width={50} height={100} />

                {/* Anche se richiamati, ogni component lavora a se */}
                <BoxDimensions bgColor='#206FEB' width={50} height={100} />

                {/* Proprietà Children */}
                <BoxDimensions bgColor='#217121' width={50} height={100}>
                    <h1>Proprietà Children</h1>
                    <div>
                        <p>La Proprietà Children serve a interpolare un contenuto all'nterno del props</p>
                    </div>
                </BoxDimensions>
            </div>
        </>
    )
}

export default Input