import React from 'react'
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function Login() {


   console.log("successfully login our website")

  return (
    <div className='wrapper' >  
     <div className="form-box login">
      <form action="submit.jsx">
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text"
          placeholder='Username' required/>
          <FaUser className="icon" />
        </div>  
        <div className='input-box'>
          <input type="password"
          placeholder='Password' required/>
          <FaLock  className="icon"/>
        </div>
        <div className='remember-forgot'>
          <label><input type="checkbox" name="chk" value="check"/>Remember me</label> 
          <a href="a">Forgot password?</a>
        </div>
          <button type="submit">Login</button>
          <div className='register-link'>
          <p>Don't have an account? <a href="a"> Register </a></p>
          </div>
      </form>
     </div>

     <div className="form-box register">
      <form action="">
        <h1>Registration</h1>
        <div className='input-box'>
          <input type="text"
          placeholder='Username' required/>
          <FaUser className="icon" />
        </div> 
        <div className='input-box'>
          <input type="text"
          placeholder='Email' required/>
          <FaEnvelope className="icon" />
        </div>
        <div className='input-box'>
          <input type="password"
          placeholder='Password' required/>
          <FaLock  className="icon"/>
        </div>
        <div className='remember-forgot'>
          <label><input type="checkbox" name="chk2" value="check1"/> I agree to the terms & conditions 
          </label>
        </div>
          <button type="submit">Register</button>
        <div className='register-link'>
          <p>Already have an account? <a href="a"> Login</a></p>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Login