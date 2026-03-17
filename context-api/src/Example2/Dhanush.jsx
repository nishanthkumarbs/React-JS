import React, { useContext } from 'react'
import courseContext from './courseContext';

const Dhanush = () => {
    let course = useContext(courseContext);
    console.log(course.java);
  return (
    <div>
        <h1>Raj M K </h1>
        <h1>Java Full Stack course Details</h1>
        {
            course.java.map((item)=>{
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

export default Dhanush