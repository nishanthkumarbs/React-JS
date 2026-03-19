import { useRef } from "react";


const Example1=()=>{
    let usernamRef=useRef()
    let passwordRef=useRef()
    let emailRef=useRef()


    let handlesubmit=(e)=>{
        e.preventDefault()
        console.log(usernamRef.current.value);
        console.log(passwordRef.current.value);
        console.log(emailRef.current.value);
        console.log("Form Submitted");
        

    }


    return(
        <form onSubmit={handlesubmit}>
            <fieldset>
                <legend>Example1</legend>
                <label htmlFor="">Username:</label>
                <input type="text" ref={usernamRef} placeholder="enter the username" />
                <br /> <br />

                <label htmlFor="">Password:</label>
                <input type="password" ref={passwordRef} placeholder="enter the password" />
                <br /><br />
                <label htmlFor="">Email:</label>
                <input type="Email" ref={emailRef} placeholder="enter the Email" />
                <br /><br />

                <button>Submit</button>
                <button>Reset</button>
            </fieldset>
        </form>
    )
}
export default Example1;