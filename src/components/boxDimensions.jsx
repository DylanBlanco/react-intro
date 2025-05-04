import { useState } from "react"

function BoxDimensions (props) {
    const [dimensions, setDimensions] = useState({
        w: 100,
        h: 100
    })

    // Function che lega l'input con dimensions.w box
    function changeWidth(e) {
        setDimensions(prev => {
            return {
                ...prev,
                w: e.target.value
            }
        })
    }

    // Function che lega l'input con dimensions.h box
    function changeHeight(e) {
        setDimensions(prev => {
            return {
                ...prev,
                h: e.target.value
            }
        })
    }


    return(
        <div className="box-dimensions">
            <div className="container">
                <div className="cardJsx">
                    <div className="input-card">
                        <h3>Box Dimensions</h3>

                        <div>
                            <div>
                                <b>Width </b>
                                <input
                                    type="range"
                                    min={10}
                                    max={150}
                                    value={dimensions.w}
                                    onChange={changeWidth}
                                />
                            </div>
                            <div>
                                <b>Height</b>
                                <input
                                    type="range"
                                    min={10}
                                    max={150}
                                    value={dimensions.h}
                                    onChange={changeHeight}
                                />
                            </div>
                            <div 
                                className="box"
                                style={{
                                    width: dimensions.w + 'px',
                                    height:dimensions.h + 'px',
                                    backgroundColor: props.bgColor,
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxDimensions