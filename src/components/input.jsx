import { useState } from "react"

function Input() {
    //  Logica  -----------------------------------------------
    const [userDate, setUserData] = useState('')
    function changeUserData (e) { // event - per ottenere valore digitato da utente
    console.log(e.target) // target - per ottenere il vaolre dell'input
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
                        <div>
                            <input
                            // type - tipo dell'input(text, number, mail, ecc...)
                            type="text" 
                            // value - Valore dell'input
                            value={userDate}
                            // onChange - gestore degli eventi
                            onChange={changeUserData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input