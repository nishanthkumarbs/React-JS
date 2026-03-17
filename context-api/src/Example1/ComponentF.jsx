import React, { useContext } from 'react'
import Usercontext from '../userContext'

const ComponentF = () => {
    let userName=useContext(Usercontext)
  return (
    <div>
        <h1>ComponentF</h1>
        <h2>My name is {userName}</h2>
    </div>
  )
}
export default ComponentF