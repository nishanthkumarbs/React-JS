import React from 'react'
import CommonFunctionality from './src/HOC'

const Darshan = (props) => {
    console.log(props)
    let { money, handleMoney } = props
    return (
        <div>
            <h1>Darshan is Donating {money}/- for Tejas</h1>
            <button onClick={handleMoney}>Increment Money</button>
        </div>
    )
}

export default CommonFunctionality(Darshan,3)