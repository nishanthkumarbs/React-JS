import React, { useContext } from 'react'
import courseContext from './courseContext';

const Darshan = () => {
    let course = useContext(courseContext);
    console.log(course.java);
  return (
    <div>
        <h1>sudeep M S </h1>
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

export default Darshan