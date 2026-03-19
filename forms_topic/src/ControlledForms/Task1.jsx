import React, { useState } from 'react'

const Task1 = () => {
    let [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        dob: "",
        age: "",
        gender:"",
        address:"",
        img:""
    })
    let handleForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    let handleSubmit = (e) => {
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
                    <input onChange={handleForm} type="number" id='age' placeholder='Enter Age' name='age' />
                    <br /><br />

                    <label htmlFor="gender">Gender:</label>
                    <input onChange={handleForm} type="radio" name="gender" id="gender" value="Male"/> Male
                    <input onChange={handleForm} type="radio" name="gender" id="gender" value="Female"/> Female
                    <input onChange={handleForm} type="radio" name="gender" id="gender" value="Others"/> Others
                    <br /><br />

                    <label htmlFor="address">Address:</label>
                    <textarea onChange={handleForm} name="address" id="address"></textarea>
                    <br /><br />

                    <label htmlFor="img">Image:</label>
                    <input onChange={handleForm} type="url" name="img" id="img" />
                    <br /><br />
                    <button >submit</button>
                    <button>reset</button>
                </fieldset>
            </form>

            <img src={formData.img} alt="" width={200} height={200}/>
            <h1>{formData.username}</h1>
            <h3>{formData.email}</h3>
            <h3>{formData.password}</h3>
            <h3>{formData.dob}</h3>
            <h3>{formData.age}</h3>
            <h3>{formData.gender}</h3>
            <p>{formData.address}</p>
        </>
    )
}

export default Task1