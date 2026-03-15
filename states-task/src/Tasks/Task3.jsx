import { useState } from "react"

const Task3 = () => {

    let [student, setStudent] = useState(
        {
            name: "Nishanth",
            phone:8963257410,
            age: 22,
            place: "Mysore",
            college:"MITM"
        }
    )
    let handelStudent=()=>{
        setStudent({
            name: "Dhanush",
            phone:8107412589,
            age: 23,
            place: "Mandya",
            college:"PES"
        })
    }
    return (
        <>
            <h1>Student Details</h1>
            <h2>Student Name:{student.name}</h2>
            <h2>Student phone:{student.phone}</h2>
            <h2>Student age:{student.age}</h2>
            <h2>Student place:{student.place}</h2>
            <h2>Student college:{student.college}</h2>
            <button onClick={handelStudent}>Change student</button>
        </>
    )
}

export default Task3