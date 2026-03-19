import { useState } from "react";



const ControlledFormEx1=()=>{

    let[username, setUsername]=useState('')
    let[email, setEmail]=useState('')
    let[password, setPassword]=useState('')

    let handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    let handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    let handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username);
        console.log(email);
        console.log(password);
        console.log("forms submitted");
        
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Form</legend>
                <label htmlFor="username">Enter Username:</label>
                <input onChange={handleUsername} type="text" id="username" placeholder="enter username" />
                <br /><br />

                <label htmlFor="email">Enter email:</label>
                <input onChange={handleEmail} type="email" id="email" placeholder="enter email" />
                <br /><br />

                <label htmlFor="password">Enter password:</label>
                <input onChange={handlePassword} type="password" id="password" placeholder="enter password" />
                <br /><br />

                <button>submit</button>
                <button>reset</button>
            </fieldset>
        </form>
    )
}
export default ControlledFormEx1;