import React, { useRef, useState } from 'react'

const Example3 = () => {
    const [submittedData, setSubmittedData] = useState(null);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ageRef = useRef();
    const dobRef = useRef();
    const addressRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            age: ageRef.current.value,
            dob: dobRef.current.value,
            address: addressRef.current.value
        };
        setSubmittedData(data);
    };

    const handleReset = () => {
        usernameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        ageRef.current.value = '';
        dobRef.current.value = '';
        addressRef.current.value = '';
        setSubmittedData(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Example3</legend>
                <label htmlFor="username">Username</label>
                <input type="text" ref={usernameRef} placeholder='Enter the Username' required />
                <br /><br />
                <label htmlFor="email">Email</label>
                <input type="email" ref={emailRef} placeholder='Enter the Email' required />
                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} placeholder='Enter the Password' required />
                <br /><br />
                <label htmlFor="age">Age</label>
                <input type="number" ref={ageRef} placeholder='Enter the Age' required />
                <br /><br />
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" ref={dobRef} required />
                <br /><br />
                <label htmlFor="address">Address</label>
                <textarea ref={addressRef} placeholder='Enter the Address' required></textarea>
                <br /><br />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </fieldset>
            {submittedData && (
                <div>
                    <h2>User data:</h2>
                    <p>Username:  {submittedData.username}</p>
                    <p>Email:  {submittedData.email}</p>
                    <p>Password: {submittedData.password}</p>
                    <p>Age: {submittedData.age}</p>
                    <p>Date of Birth: {submittedData.dob}</p>
                    <p>Address: {submittedData.address}</p>
                </div>
            )}
        </form>
    )
}

export default Example3;