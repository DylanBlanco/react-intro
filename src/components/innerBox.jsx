import { useState } from "react"

function InnerBox({width, height, bgColor}) {
    // LOGICA  ------------------------------------------------
    const [param, setParam] = useState({
            w: width,
            h: height,
            // bgColor: background-color
    })
    
    function changeWidth(e) {
        setParam(prev => {
            return {
                ...prev,
                w: e.target.value
            }
        })
    }
    
    function changeHeight(e) {
        setParam(prev => {
            return {
                ...prev,
                h: e.target.value
            }
        })
    }


    // TEMPLATE  ----------------------------------------------
    return(
        <>
            <div className="container">
                <div>
                    <div>
                        <b>Width</b>
                        <input
                            type="range"
                            min={10}
                            max={150}
                            value={param.w}
                            onChange={changeWidth}
                        />
                    </div>
                    <div>
                        <b>Height</b>
                        <input
                            type="range"
                            min={10}
                            max={150}
                            value={param.h}
                            onChange={changeHeight}
                        />
                    </div>
                    <div 
                        className="box-width"
                        style={{
                            width: param.w + 'px', 
                            height: param.h + 'px', 
                            backgroundColor: bgColor
                        }}
                    >
                    </div>
                </div>

                <div>
                    <div>
                        <b>Width</b>
                        <input
                            type="range"
                        />
                    </div>
                    <div>
                        <b>Height</b>
                        <input
                            type="range"
                        />
                    </div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    )
}

export default InnerBox