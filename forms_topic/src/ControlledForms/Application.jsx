import React, { useState } from 'react'

const Application = () => {
    let [formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        dob:"",
        age:""
    })
    let handleForm=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Form Submited")
        console.log(formData)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Application Form</legend>
                    <label htmlFor="username">Enter Username:</label>
                    <input onChange={handleForm} type="text" id="username" name='username' placeholder="enter username" />
                    <br /><br />

                    <label htmlFor="email">Enter email:</label>
                    <input onChange={handleForm} type="email" id="email" name='email' placeholder="enter email" />
                    <br /><br />

                    <label htmlFor="password">Enter password:</label>
                    <input onChange={handleForm} type="password" id="password" name='password' placeholder="enter password" />
                    <br /><br />

                    <label htmlFor="dob">DOB:</label>
                    <input onChange={handleForm} type="date" name="dob" id="dob" placeholder='Enter DOB' />
                    <br /><br />

                    <label htmlFor="age">Age:</label>
                    <input onChange={handleForm} type="number"id='age' placeholder='Enter Age' name='age' />
                    <br /><br />
                    <button >submit</button>
                    <button>reset</button>
                </fieldset>
            </form>
        </>
    )
}

export default Application