import { useContext } from "react"
import CourseContext from "./CourseContext"

const Vinay=()=>{

    let pythoncourse=useContext(CourseContext)
    console.log(pythoncourse.python);
    
    return(
        <div>
            <h1>Vinay</h1>
            <h1>Python Full Stack Course Details</h1>
        {
            pythoncourse.python.map((item)=>{
                console.log(item);
                return(
                    <li>{item}</li>
                )
                
            })
        }
        
        
        </div>
    )
}
export default Vinay;