import React from 'react'
import HOC from './HOC'
import CommonFunctionality from './HOC'

const Hemanth = (props) => {
    console.log(props)
    let {money,handleMoney}=props
  return (
    <div>
        <h1>Hemath is Donating {money}/- for Tejas</h1>
        <button onClick={handleMoney}>Increment Money</button>
    </div>
  )
}

export default CommonFunctionality(Hemanth,2)