import React, { useState } from 'react'
import cover from '../assets/coverpage.svg'

const Register = () => {
  const [inputs, setinputs] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  // const {loading, error, signup}=useSignupwithEP();
  const [showpassword,setshowpassword] = useState(false);
  return (
    <>

        <label>  
          <h1 className='text-black mb-1'>Register, Join With us 👋</h1>
          <h2 className='text-[#919191]'>Register and setup the environment.</h2>
        </label>
        
        
            <div className='w-[100%] flex flex-col justify-center items-center'>
                  <label className='flex flex-row items-start'>
                    <input type='text' id='username' size='45' value={inputs.username} onChange={(e)=>{
                      setinputs({...inputs,username:e.target.value});
                    }} placeholder='Username' className='bg-[#ebebeb] p-[15px] text-[16px] text-white my-[8px] rounded-lg'></input>
                  </label>

                  <label className='flex flex-row items-start'>
                    <input type='email'  size='45' value={inputs.email} onChange={(e)=>{
                      setinputs({...inputs,email:e.target.value});
                    }}  placeholder='E-mail' className='bg-[#ebebeb] p-[15px] text-[16px] my-[8px] text-white rounded-lg'></input>
                  </label>

                  <label className='flex flex-row items-center'>
                    <input type={showpassword?'text':'password'} id='pass' size='45' value={inputs.password} onChange={(e)=>{setinputs({...inputs,password:e.target.value})}} placeholder='New Password' className='bg-[#ebebeb] p-[15px] text-[16px]  my-[8px] rounded-lg text-white'></input>
                    {/* <button  onClick={()=>{setshowpassword(!showpassword)}}>{showpassword?'hide':'show'}</button> */}
                  </label>
                  
               

                  <label className='flex flex-row items-start'>
                    <textarea cols='45' rows='3' id='address' value={inputs.address} onChange={(e)=>{
                      setinputs({...inputs,address:e.target.value});
                    }}  placeholder='Address ' className='bg-[#ebebeb] mr-3 p-[15px] text-white text-[16px] my-[8px] rounded-lg' ></textarea>
                  </label>
                    {/* {error && (
                      <h1 className='text-[#e56565]'>{error.message}</h1>
                    )} */}

             </div>
          
                  <div className=''>
                  <input type='submit' id='submit'
                
                  onClick={()=>signup(inputs)} value='Register' className='bg-[#A74D9B] py-2 px-32 rounded-xl text-black font-medium mt-4  '></input>
                  </div>
                  {/* {loading && (<h1>Loading...</h1>)} */}
                  </>
  )
}

export default Register
