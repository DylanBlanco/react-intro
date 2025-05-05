import { useState } from "react"

// function BoxDimensions (props) {
function BoxDimensions ({bgColor, width, height}) {
    // const [dimensions, setDimensions] = useState({
    //     w: 100,
    //     h: 100
    // })

    // misure preimpostate con i props
    const [dimensions, setDimensions] = useState({
        w: width,
        h: height
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
                                    max={200}
                                    value={dimensions.w}
                                    onChange={changeWidth}
                                />
                            </div>
                            <div>
                                <b>Height</b>
                                <input
                                    type="range"
                                    min={10}
                                    max={200}
                                    value={dimensions.h}
                                    onChange={changeHeight}
                                />
                            </div>
                            <div 
                                className="box"
                                style={{
                                    width: dimensions.w + 'px',
                                    height:dimensions.h + 'px',
                                    // backgroundColor: props.bgColor,
                                    backgroundColor: bgColor,
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