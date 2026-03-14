import React, { useState } from 'react'

const Example8 = () => {
    let [count, setState] = useState(0);

    let increment = () => {
        setState(count = count + 1)
    }
    let decrement = () => {
        setState(count = count - 1)
    }
    let reset = () => {
        setState(0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Example8