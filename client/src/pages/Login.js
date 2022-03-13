import React from 'react'
import './Login.css'

const Login = () => {
  
  return (
    <div className='login'>
        <div className='login-container'>
            <h3>Login</h3>
            <p>Email Address</p>
            <input className='input' id='login-input' placeholder='Enter email address'></input>
            <p>Password</p>
            <input className='input' id='login-input' placeholder='Enter password'></input>
            <button className='submit-btn' id='login-submit'>Submit</button>
        </div>
    </div>
  )
}

export default Login