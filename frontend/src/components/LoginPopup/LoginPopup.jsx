import React, { useState } from 'react'
import { assets } from '../../assets/assets';


/**
 * Renders a login/signup popup component
 * @param {Object} props - Component props
 * @param {Function} props.showLogin - Function to control the visibility of the login popup
 * @returns {JSX.Element} A login/signup form within a popup
 */
const LoginPopup = ({showLogin}) => {
 const [currState, setCurrState] = useState("Login");
  return (
    <div className='login-popup z-10 absolute w-full h-full grid  bg-[#00000090]'>
      <form className='login-popup-container place-self-center w-[max(24vw,400px)] bg-white text-[#808080] flex flex-col gap-6 py-6 px-8 rounded-lg text-lg'>
        <div className="login-popup-title flex justify-between font-medium items-center text-black">
          <h2>{currState}</h2>
          /**
           * Renders an image element with a cross icon
           * @param {Object} props - The component props
           * @param {Function} props.showLogin - Function to control login visibility
           * @returns {JSX.Element} An img element representing a clickable cross icon
           */
          <img className='w-4 cursor-pointer' src={assets.cross_icon} onClick={()=>{showLogin(false)}} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col g-5 ">
          {currState === 'Login'? <></> : 
          
          <input className='border border-solid border-[#c9c9c9] p-2 mt-3 rounded-md text-[16px]' type="text" placeholder='Your name' required/>}
          
          <input className='border border-solid border-[#c9c9c9] p-2 mt-3 rounded-md text-[16px]' type="email" placeholder='Your email' required/>
          <input className='border border-solid border-[#c9c9c9] p-2 mt-3 rounded-md text-[16px]' type="password" placeholder='password' required/>
        </div>
        <button className='p-4 rounded-md text-white bg-tomato text-[1rem] '>{currState==='Sign Up'? "Create account" :"Login"}</button>
        <div className="login-popup-condition flex items-start gap-3 mt-[-15px]">
          <input className='mt-2' type="checkbox" required />
          <p>By continuing you agreee to the terms and conditions of tomato and its privacy policy.</p>
        </div>
        {currState === 'Login' ? 
        /**
         ```
         /**
          * Renders a paragraph element with a login prompt and a clickable span
          * @param {function} setCurrState - Function to update the current state
          * @returns {JSX.Element} A paragraph element with a login prompt and a clickable span
          */
         ```
         * Renders a paragraph with a clickable span to switch to the Sign Up state
         * @param {function} setCurrState - Function to update the current state
         * @returns {JSX.Element} A paragraph element with a clickable span
         */
        <p>Create a new Account? <span className='text-tomato font-medium cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
       : <p>Already hava an account? <span className='text-tomato font-medium cursor-pointer' onClick={()=> setCurrState("Login")}>Login here</span></p>
       }
      </form>
    </div>
  )
}

export default LoginPopup