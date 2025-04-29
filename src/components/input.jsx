import { useState } from "react"

function Input() {
    //  Logica  -----------------------------------------------
    
    const [userData, setUserData] = useState('')
    const [userLeng, setUserLeng] = useState('')
    const [schoolObjects, setSchoolObjects] = useState([
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
    ])
    
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
                                    <h4>Cerca</h4>
                                    <input type="text" />
                                </div>

                                <div>
                                    <h4>Filtra</h4>
                                    <select>
                                        <option value="">Category</option>
                                        <option value="">Category</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <p>-Risultato ricerca-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input