import React, { useState } from 'react'
// import imgsignin from '../Assets/signins.svg';
// import {Link} from 'react-router-dom';
// import logo from '../Assets/logoforba.png'

const Login = () => {
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  })
  const [showpassword, setshowpassword]= useState(false);
  return (
    <div className='flex flex-col justify-center items-center'>
            <label className='mb-12'>
          <h1 className='text-black text-2xl mb-1'>Login, Welcome back 👋</h1>
            <h2 className='text-[#919191]'>Please login with credentials and resume your work.</h2>
          </label>
                    <div className=''>
                    <label className='flex flex-row items-start'>
                      <input type='email' id='email' value={inputs.email} onChange={(e)=>setinputs({...inputs,email:e.target.value})} size='48' placeholder='E-mail' className='bg-[#ebebeb] p-[15px] my-[8px] rounded-xl'></input>
                    </label>

                    <label className='flex flex-row items-center'>
                      <input type={showpassword ? 'text' : 'password'} id='password' value={inputs.password} onChange={(e)=>setinputs({...inputs,password:e.target.value})} size='48' placeholder='Connect Password' className='bg-[#ebebeb] text-[20px] p-[15px] my-[8px] rounded-xl'>
                      </input>
                      {/* <button className=' bg-black text-white px-4 py-2 ml-2 rounded-xl ' onClick={()=>{setshowpassword(!showpassword)}}>{showpassword?'hide':'show'}</button> */}
                    </label>
                    
                    <div className='flex flex-row justify-end items-center'>
                    <label>
                      <h1 className='text-[#919191]'>Forgot Password?</h1>
                    </label>
                    </div>

                    </div>
                    <div>
                    <input type='submit' id='submit' value='login' className='bg-[#A74D9B] py-2 px-52 rounded-xl text-black font-medium mt-4  '></input>
                  
                    </div>
    </div>
  )
}

export default Login
