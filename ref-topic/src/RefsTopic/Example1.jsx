import React, { useRef } from 'react'

const Example1 = () => {
    let h1Ref=useRef();
    let handleData=()=>{
        console.log(h1Ref.current)
        h1Ref.current.style.backgroundColor="red"
        h1Ref.current.style.color="white"
    }
  return (
    <div>
        <h1 ref={h1Ref}>Example1</h1>
        <button onClick={handleData}>change Data</button>
    </div>
  )
}

export default Example1

