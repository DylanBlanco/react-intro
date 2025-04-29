import { useState } from "react"

function Input() {
    //  Logica  -----------------------------------------------
    
    const [userData, setUserData] = useState('')
    const [userLeng, setUserLeng] = useState('')
    
    //  Input
    function changeUserData (e) { // event - per ottenere valore digitato da utente
        // const element = e.target // target - per ottenere il vaolre dell'input
        // const v = element.value

        // setUserData(v)

        setUserData(e.target.value) // funzione ridotta
    }

    // Select
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
                </div>
            </div>
        </>
    )
}

export default Input