import CourseContext from "./CourseContext";
import Java from "./Java";
import Python from "./Python";

const QSP=()=>{
    let course={
        java:["java","web technology","React Js","SQL","Advanced java"],
        python:["python","web technology","React Js","SQL","Django"]

    }
    return(
        <div>
            
            <CourseContext.Provider value={course}>
  <Java></Java>
  <hr></hr>
  <Python></Python>
            </CourseContext.Provider>
            
        </div>
    )
}
export default QSP;