import React from 'react'
import { useContext } from 'react'
import courseContext from './courseContext';
const Hemanth = () => {
let course = useContext(courseContext);
  console.log(course.python);
  return (
    <div>
        <h1>Hemanth </h1>
         <h1>Python Full Stack course Details</h1>
        {
            course.python.map((item)=>{
                return(
                    <li>
                        {item}
                    </li>
                )
            })
        }
        <hr />
    </div>
  )
}

export default Hemanth