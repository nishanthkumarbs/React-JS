import { useContext } from "react"
import CourseContext from "./CourseContext"

const Dhanush=()=>{


    let javacourse=useContext(CourseContext)
    console.log(javacourse.java);
    

    return(
        <div>
        <h1>Dhanush</h1>
        <h1>Java Full Stack Course details</h1>
        {
            javacourse.java.map((item)=>{
                console.log(item);
                return(
                    <li>{item}</li>
                )
                
            })
        }
        </div>
    )
}
export default Dhanush