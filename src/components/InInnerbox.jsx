import { useEffect, useState } from "react"

function InInnerbox ({width, height, backColor}) {
    // LOGICA  ------------------------------------------------
    const [sides, setSides] = useState({
            w: width,
            h: height,
    })

    //  useEffect - hook che ti permette di eseguire del codice "di effetto collaterale". Dopo che il componente ha fatto il rendering.
    useEffect(() => {
        setSides({ w: width, h: height })  // aggiorna lo stato se le props cambiano
    }, [width, height])
    
    function changeWidthSide(e) {
        setSides(prev => {
            return {
                ...prev,
                w: e.target.value
            }
        })
    }
    
    function changeHeightSide(e) {
        setSides(prev => {
            return {
                ...prev,
                h: e.target.value
            }
        })
    }


    return(
        <>
            <div className="container">
                <div>
                    <h2>In Inner Box</h2>
                    
                    <div>
                        <div>
                            <b>Width</b>
                            <input
                                type="range"
                                min={10}
                                max={150}
                                value={sides.w}
                                onChange={changeWidthSide}
                            />
                        </div>
                        <div>
                            <b>Height</b>
                            <input
                                type="range"
                                min={10}
                                max={150}
                                value={sides.h}
                                onChange={changeHeightSide}
                            />
                        </div>
                        <div 
                            className="box"
                            style={{
                                width: sides.w + 'px', 
                                height: sides.h + 'px', 
                                backgroundColor: backColor
                            }}
                        >
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InInnerbox