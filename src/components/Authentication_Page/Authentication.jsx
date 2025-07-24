import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './auth.css'
const Authentication = ({setshowAuth}) => {
    const [currentState, setcurrentState] = useState('Login')
  return (
        <div className="Auth-container">
            <form className="form-container">
                <div className="form-title">
                   <h2>{currentState}</h2>
                    <img onClick={()=>setshowAuth(false)} src={assets.cross_icon} alt="" />                   
                </div>
                <div className="form-inputs">
                    {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                    <input type="email" placeholder='Your Email' required/>
                    <input type="password" placeholder='Your password' required/>
                </div>
                <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="Auth-Condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree the terms os use & privacy policy.</p>
                </div>
                {currentState==="Login" ? <p>Create a new Account? <span onClick={()=>setcurrentState("Sign Up")}>Sign Up</span></p>
                :<p>Already have an Account? <span onClick={()=>setcurrentState("Login")}>Login here</span></p>}
            </form>
        </div>
  )
}

export default Authentication