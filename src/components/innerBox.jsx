function InnerBox() {
    // LOGICA  ------------------------------------------------


    // TEMPLATE  ----------------------------------------------
    return(
        <>
            <div className="container">
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
                    <div className="box-width"></div>
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
                    <div className="box-width"></div>
                </div>
            </div>
        </>
    )
}

export default InnerBox