import { useState } from "react"

const Task1 = () => {

    let [name,setName]=useState("Nishanth");
    let handelName=()=>{
        setName("Nishanth Kumar")
    }
  return (
    <div>
        <h1>My Name is {name}</h1>
        <button onClick={handelName}>Change Name</button>
    </div>
  )
}

export default Task1