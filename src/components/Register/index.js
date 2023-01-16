// REGISTER user component

import React from "react";
import { useState } from "react";


const Register = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // Sends data to API on form submit
    const handleSubmit = (e) => {
        username = e.target.username.value;
        password = e.target.password.value;
        try {
            return fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({username: username, password: password })
            })
            .then(data => data.json())
        }
        catch (err) {
            console.warn(err)
        }
    }

    return (
        <>
            <div className='register'>
            <h1>Please Register</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-username">
                    <label for="register-username" className='label'>Username</label>
                    <input type="text" className="form-input" id="register-username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="form-password">
                    <label for="register-password" className='label'>Password</label>
                    <input type="password" className="form-input" id="register-password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='submit-btn'>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
            </div>
            <div className='redirect'>
                <h2>Don't have an account? Login here</h2> 
            </div>
        </>
    )
};


export default Register;