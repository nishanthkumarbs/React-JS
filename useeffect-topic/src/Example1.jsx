import React, { useEffect, useState } from 'react'

const Example1 = () => {
    let [count1, setCount1]=useState(0)
    let [count2, setCount2]=useState(0)

    let handleCount1=()=>{
        setCount1(count1+1)
    }
    let handleCount2=()=>{
        setCount2(count2+1)
    }
    useEffect(()=>{
        console.log("Rithin")
    },[count1])
  return (
    <div>
        <h1>{count1}</h1>
        <button onClick={handleCount1}>Change count1</button>
        <hr />
        <h1>{count2}</h1>
        <button onClick={handleCount2}>Change count2</button>
    </div>
  )
}

export default Example1