// LOGIN user component

import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Do I need this?
import Register from '../Register';

// Fetching user data from API
async function loginUser(credentials) {
    try {
        return await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }
    catch (err) {
        console.warn(err)
    }
};


const Login = ({ setToken, handleRedirect }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username, 
            password
        });
        setToken(token)
    }


  return (
    <>
        <div className='login'>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-username">
                    <label htmlFor="login-username" className='label'>Username</label>
                    <input type="text" className="form-input" id="login-username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="form-password">
                    <label htmlFor="login-password" className='label'>Password</label>
                    <input type="password" className="form-input" id="login-password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='submit-btn'>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
        <div className='redirect'>
            <h2>Don't have an account? Register <span onClick={handleRedirect}>here</span></h2> 
        </div>
    </>
  )
};

Login.PropTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;