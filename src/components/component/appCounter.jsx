function CounterApp({changeCounter}) {
    return(
        <div>
            <div>
                <div className="counterApp">
                    <button onClick={() => {changeCounter(c => c - 1)}}>-</button>
                    <button onClick={() => {changeCounter(c => c + 1)}}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CounterApp