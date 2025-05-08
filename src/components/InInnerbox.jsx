import { useState } from "react"

function InInnerbox ({width, height, backColor}) {
    // LOGICA  ------------------------------------------------
    const [param, setParam] = useState({
            w: width,
            h: height,
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
                        className="box"
                        style={{
                            width: param.w + 'px', 
                            height: param.h + 'px', 
                            backgroundColor: backColor
                        }}
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

export default InInnerbox