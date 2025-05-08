import { useState } from "react"
import InInnerbox from "./InInnerbox"

function InnerBox({width, height, color}) {
    // LOGICA  ------------------------------------------------
    const [params, setParams] = useState({
            w: width,
            h: height,
    })
    
    function changeWidth(e) {
        setParams(prev => {
            return {
                ...prev,
                w: e.target.value
            }
        })
    }
    
    function changeHeight(e) {
        setParams(prev => {
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
                            value={params.w}
                            onChange={changeWidth}
                        />
                    </div>
                    <div>
                        <b>Height</b>
                        <input
                            type="range"
                            min={10}
                            max={150}
                            value={params.h}
                            onChange={changeHeight}
                        />
                    </div>
                    <div 
                        className="box"
                        style={{
                            width: params.w + 'px', 
                            height: params.h + 'px', 
                            backgroundColor: color
                        }}
                    >
                    </div>
                </div>

                {/* <div>
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
                </div> */}
            </div>
                    
            <InInnerbox width={params.w / 2} height={params.h / 2} backColor={color}/>
        </>
    )
}

export default InnerBox