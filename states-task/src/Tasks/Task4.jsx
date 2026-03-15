import { useState } from "react"

const Task4 = () => {
    let [gender, setGender] = useState("Male")
    let handelGender = () => {

        // if (gender==="Female") {
        //     setGender("Male")
        // }
        // else{
        //     setGender("Female")
        // }


        setGender(prev=>prev==='Male'?'Female':'Male')
    }
    return (
        <>
            <h1>{gender}</h1>
            <button onClick={handelGender}>Change to Gender</button>
        </>
    )
}

export default Task4