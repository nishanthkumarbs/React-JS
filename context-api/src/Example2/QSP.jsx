import React from 'react'
import CourseContext from './courseContext'
import Java from './Java'
import Python from './Python'

const QSP = () => {
    let course={
        java:["java","SQL","WebTech","React JS","J2EE"],
        python:["python","SQL","WebTech","React JS","Django"]
    }
  return (
    <div>
    <CourseContext.Provider value={course}>
        <Java/>
        <Python/>
    </CourseContext.Provider>
    </div>
  )
}

export default QSP