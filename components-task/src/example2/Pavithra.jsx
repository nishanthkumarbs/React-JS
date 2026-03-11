import { useContext } from "react";
import CourseContext from "./CourseContext";

const Pavithra=()=>{

    let javacourse=useContext(CourseContext)
    console.log(javacourse.java);
    
    return(
        <div>
            <h1>Pavithra k</h1>
            <h1>Java full Stack Course Details</h1>
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
export default Pavithra;