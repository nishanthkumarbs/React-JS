import { useState } from "react"

const Example7 = () => {
    let [food,setFood]=useState("Dosa");
    let handelFood=()=>{
        setFood("Palav")
    }
  return (
    <div>
        <h1>My fav food {food}</h1>
        <button onClick={handelFood}>Change food</button>
    </div>
  )
}

export default Example7