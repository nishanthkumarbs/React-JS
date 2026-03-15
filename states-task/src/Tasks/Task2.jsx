import { useState } from "react"

const Task2 = () => {
    let [sub, setSub] = useState("Python")
    let [list, setlist] = useState(
        <ol>
            <li>Python</li>
            <li>Web Tech</li>
            <li>SQL</li>
            <li>DJango</li>
        </ol>
    )
    let handelSub = () => {
        setSub("Java")
        setlist(
            <ol>
                <li>Java</li>
                <li>Web Tech</li>
                <li>SQL</li>
                <li>J2EE</li>
            </ol>
        )
    }
    return (
        <>
            <h1>{sub} Full Stack</h1>
            <li>{list}</li>
            <button onClick={handelSub}>Change to Java</button>
        </>
    )
}

export default Task2