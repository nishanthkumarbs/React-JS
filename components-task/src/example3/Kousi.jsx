import { useContext } from "react";
import CourseContext from "../example2/CourseContext";

const Kousi=()=>{

    let shanthicourse=useContext(CourseContext)
    console.log(shanthicourse.acadamy1);
    
    return(
        <div>
            <h1 style={{color:"red"}}>Kousii</h1>
            <h1 style={{color:"green"}}>ShanthiAcademi  course Details</h1>
       {
        shanthicourse.acadamy1.map((item)=>{
            console.log(item);
            return(
                <li style={{color:"blue"}}>{item}</li>
            )
            
        })
       }
       
        </div>
    )
}
export default Kousi;