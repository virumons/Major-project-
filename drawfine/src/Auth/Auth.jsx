import React, { useState } from 'react'
import Login from './Login.jsx';
import Register from './Register.jsx';
// import imgsignin from '../Assets/signins.svg';
import {Link} from 'react-router-dom';
import Googleauth from './Googleauth.jsx';
// import logo from '../Assets/logoforba.png'


const Auth = () => {
    const [islogin, setlogin] = useState(true);
  return (
    <div className='flex flex-row bg-[#ffffff] h-[100vh] justify-center items-center'>


      <div className='w-[100%] h-[100vh] text-black flex flex-col justify-center items-center'>
          
          <div>
            <Link to='/' className='text-[20px] mb-2 flex flex-row'>
            {/* <img width="28" height="28" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home--v1.png" alt="home--v1"/> */}
            <h1 className='ml-2'>Home</h1>
            </Link>
          </div>

          {islogin ? <Login /> : <Register />}
          
          <label className='flex flex-row mt-4' onClick={()=>setlogin(!islogin)}>
                      <h1 className='mr-2 text-[#919191]'>{islogin ? "Don't have an account." : "have account ?"}</h1>
                    <h1>{islogin ? "sign up" :"login"}</h1>
            </label>
            
          <div className=' flex flex-col justify-center items-center'>
            <h1 className='mb-4'>or</h1>
            <Googleauth prefix={islogin ? "login" : "sign up"}/>
          </div>

      </div>
    </div>
  )
}

export default Auth
